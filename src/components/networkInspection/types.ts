import { FetchResult } from "@apollo/client";

type Event<T> = T & {
  traceId: string;
  timestamp: number;
  source?: "client" | "server";
};

export type TransportedData =
  | Event<{ type: "operation"; name: string }>
  | Event<{ type: "next"; result: FetchResult }>
  | Event<{ type: "error"; error: any }>
  | Event<{ type: "complete"; timestamp: number; traceId: string }>;

export interface ConstantTransportCbs {
  transportValue(value: TransportedData): void;
}

export interface TransportData {
  data: TransportedData;
  nextPromise: Promise<TransportData>;
}

declare global {
  interface Window {
    _transport: Pick<TransportedData[], "push"> | TransportedData[];
  }
}
