"use client";

import { ConstantTransport } from "@/components/networkInspection/ConstantTransport";
import { useNetworkInspectorLink } from "@/components/networkInspection/useNetworkInspectorLink";
import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  FetchResult,
  HttpLink,
  InMemoryCache,
  Observable,
} from "@apollo/client";
import { useState } from "react";

export const dynamic = "force-dynamic";

function delay<T extends (...args: any) => any>(cb: T) {
  return (...args: Parameters<T>) =>
    setTimeout(() => cb(...args), typeof window !== "undefined" ? 2500 : 1500);
}

export default function Layout({ children }: { children: any }) {
  const { logLink, transportRef } = useNetworkInspectorLink();

  const [ac] = useState(() => {
    const delayLink = new ApolloLink((operation, forward) => {
      return new Observable((observer) => {
        forward(operation).subscribe({
          next: delay((result: FetchResult) => observer.next(result)),
          error: delay((error: any) => observer.error(error)),
          complete: delay(() => observer.complete()),
        });
      });
    });

    const httpLink = new HttpLink({
      uri: "https://current--spotify-demo-graph-hm0mwc.apollographos.net/graphql",
      fetchOptions: { cache: "no-store" },
    });

    return new ApolloClient({
      link: logLink.concat(delayLink).concat(httpLink),
      cache: new InMemoryCache(),
    });
  });

  return (
    <ApolloProvider client={ac}>
      <ConstantTransport ref={transportRef}>{children}</ConstantTransport>
    </ApolloProvider>
  );
}
