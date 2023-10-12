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
      <main className="flex-row items-stretch">
        <Suspense
          fallback={
            <div className="box alt grow max-w-xs">
              <p>loading query...</p>
              <pre className="text-sm">{print(testQuery)}</pre>
            </div>
          }
        >
          <div className="box dark grow max-w-xs">
            <SuspendedComponent />
          </div>
        </Suspense>

        <div className="box dark flex flex-col">
          <NetworkInspector />
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
      <pre className="grow shrink text-sm overflow-scroll max-h-40">
        {JSON.stringify(result.data, undefined, 2)}
      </pre>
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
