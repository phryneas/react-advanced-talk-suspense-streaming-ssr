import {
  Suspense,
  forwardRef,
  use,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  ConstantTransportCbs,
  TransportData,
  TransportedData,
} from "./networkInspection/types";
import { NetworkInspector } from "./NetworkInspector";

function markFrom(source: "server" | "client") {
  return (item: TransportedData) => ({ source, ...item });
}

export const ConstantTransport = forwardRef<
  ConstantTransportCbs,
  { children: any }
>(function ConstantTransport({ children }, ref) {
  let resolveNextPromise: ({}: TransportData) => void = () => {};
  const [data, setData] = useState<TransportedData[]>([]);
  useEffect(() => {
    if (Array.isArray(window._transport)) {
      const transport = window._transport;
      setData((data) => [...data, ...transport.map(markFrom("server"))]);
      window._transport = {
        push(...items) {
          setData((data) => [...data, ...items.map(markFrom("server"))]);
          return 0;
        },
      };
    }
  }, []);

  // useImperativeHandle doesn't flush on the server
  // @ts-ignore
  if (typeof window === "undefined" && !ref.current) {
    // @ts-ignore
    ref.current = {
      transportValue(value: any) {
        resolveNextPromise({
          data: value,
          nextPromise: new Promise<TransportData>((resolve) => {
            resolveNextPromise = resolve;
          }),
        });
      },
    };
  }
  useImperativeHandle(ref, () => ({
    transportValue(value) {
      Promise.resolve().then(() =>
        setData((data) => [...data, markFrom("client")(value)])
      );
    },
  }));

  return (
    <>
      <Suspense>{children}</Suspense>
      <div>
        <Suspense>
          <Stream
            nextData={
              new Promise<TransportData>((resolve) => {
                resolveNextPromise = resolve;
              })
            }
          />
        </Suspense>
      </div>

      <NetworkInspector data={data} />
    </>
  );
});

function Stream({ nextData }: { nextData: Promise<TransportData> }) {
  const { data, nextPromise } = use(nextData);

  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `(window._transport = window._transport || []).push(${JSON.stringify(
            data
          )})`,
        }}
      />
      <Suspense>
        <Stream nextData={nextPromise} />
      </Suspense>
    </>
  );
}
