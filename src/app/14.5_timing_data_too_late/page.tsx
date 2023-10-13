import Image from "next/image";
import diagram from "./diagram.svg";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header className="light mb-0">
        <h5>
          The cost of transporting data too late: &quot;Old&quot; overrides
          &quot;New&quot;.
        </h5>
      </header>
      <div className="grow self-stretch relative dark -mb-8 p-0">
        <Image
          src={diagram}
          fill
          alt="A timing diagram describing a 'worst case' scenario where data changes on the client side, while not being transported by the server yet. Outdated server data will overwrite up-to-date client data."
        />
      </div>
    </>
  );
}
