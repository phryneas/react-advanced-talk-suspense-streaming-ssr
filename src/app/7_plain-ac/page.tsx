"use client";

import { NetworkInspector } from "@/components/networkInspection/NetworkInspector";
import { gql, useSuspenseQuery } from "@apollo/client";
import { print } from "@apollo/client/utilities";
import { Suspense, useTransition } from "react";
export const dynamic = "force-dynamic";

const testQuery = gql`
  query TestQuery {
    me {
      profile {
        id
      }
    }
  }
`;

export default function Page() {
  return (
    <>
      <header>
        <h3>
          using <code className="inline">useSuspenseQuery</code> naively in a
          Client Component
        </h3>
      </header>
      <main className="grow relative">
        <div className="absolute left-0 top-0 right-0 bottom-0">
          <div className="h-full w-full max-h-full grid grid-cols-2 grid-rows-1 items-stretch justify-stretch overflow-y-hidden gap-8">
            <Suspense
              fallback={
                <div className="box alt flex flex-col justify-between">
                  <p>loading query...</p>
                  <br />
                  <pre className="text-sm">{print(testQuery)}</pre>
                </div>
              }
            >
              <div className="box dark flex flex-col justify-between">
                <SuspendedComponent />
              </div>
            </Suspense>

            <div className="box dark flex flex-col">
              <NetworkInspector />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

function SuspendedComponent() {
  const result = useSuspenseQuery(testQuery);
  const [fetching, startTransition] = useTransition();
  return (
    <>
      <pre className="text-sm">Query finished!</pre>
      <div className="flex flex-row">
        <button
          className="primary"
          disabled={fetching}
          onClick={() => result.refetch()}
        >
          Refetch
        </button>
        <button
          className="alt"
          disabled={fetching}
          onClick={() => startTransition(() => void result.refetch())}
        >
          Refetch (useTransition)
        </button>
      </div>
    </>
  );
}
