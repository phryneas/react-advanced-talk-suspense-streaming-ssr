"use client";

import { gql, useSuspenseQuery } from "@apollo/client";
export const dynamic = "force-dynamic";
export default function Page() {
  const result = useSuspenseQuery(
    gql`
      query TestQuery {
        __typename
        me {
          profile {
            id
          }
        }
      }
    `
  );

  return (
    <div>
      <h1>Plain AC</h1>
      {JSON.stringify(result.data)}
    </div>
  );
}
