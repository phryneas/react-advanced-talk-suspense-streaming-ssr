import { ApolloLink, FetchResult, Observable } from "@apollo/client";
import { useRef, useState } from "react";
import { ConstantTransportCbs } from "./types";

let lastId = 0;

export function useNetworkInspectorLink() {
  const transportRef = useRef<ConstantTransportCbs>(null);
  const [logLink] = useState(
    () =>
      new ApolloLink((operation, forward) => {
        return new Observable((observer) => {
          const traceId =
            (typeof window !== "undefined" ? "c-" : "s-") + ++lastId;
          transportRef.current?.transportValue({
            traceId,
            timestamp: Date.now(),
            type: "operation",
            name: operation.operationName,
          });
          forward(operation).subscribe({
            next: (result: FetchResult) => {
              transportRef.current?.transportValue({
                traceId,
                timestamp: Date.now(),
                type: "next",
                result,
              });
              observer.next(result);
            },
            error: (error: any) => {
              transportRef.current?.transportValue({
                traceId,
                timestamp: Date.now(),
                type: "error",
                error,
              });
              observer.error(error);
            },
            complete: () => {
              transportRef.current?.transportValue({
                traceId,
                timestamp: Date.now(),
                type: "complete",
              });
              observer.complete();
            },
          });
        });
      })
  );
  return { logLink, transportRef };
}
