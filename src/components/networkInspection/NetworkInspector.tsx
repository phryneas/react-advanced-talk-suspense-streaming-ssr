"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { TransportedData } from "./types";

export const NetworkInspectorContext = createContext<TransportedData[]>([]);

export function NetworkInspector() {
  const data = useContext(NetworkInspectorContext);
  const min = data.reduce(
    (min, item) => Math.min(min, item.timestamp),
    Infinity
  );

  const traces = Object.entries(
    data.reduce((traces, item) => {
      traces[item.traceId] = traces[item.traceId] || [];
      traces[item.traceId].push(item);
      return traces;
    }, {} as Record<string, TransportedData[]>)
  );
  let unfinished = !traces.every(([, trace]) =>
    trace.some((event) => event.type === "complete" || event.type === "error")
  );
  const [currentTime, setCurrentTime] = useState(Date.now());
  useEffect(() => {
    if (unfinished) {
      const interval = setInterval(() => setCurrentTime(Date.now()), 100);
      return () => clearInterval(interval);
    }
  }, [unfinished]);
  const max = Math.max(
    currentTime,
    data.reduce((max, item) => Math.max(max, item.timestamp), 0)
  );
  const duration = Math.max(max - min, 1);
  const laneHeight = 30;
  function getX(item: TransportedData) {
    return ((item.timestamp - min) / duration) * 100;
  }
  return (
    <div className="grow flex flex-col">
      <h3>Network Monitor</h3>
      <svg
        viewBox={`-5 0 115 ${traces.length * laneHeight}`}
        xmlns="http://www.w3.org/2000/svg"
        stroke="#cfd7d6"
        className="grow border-solid border-2"
      >
        {new Array(Math.floor(duration / 1000 + 1)).fill(null).map((_, idx) => (
          <line
            key={idx}
            x1={(idx * 100000) / duration}
            x2={(idx * 100000) / duration}
            y1={-10000}
            y2={10000}
            strokeWidth={0.2}
          />
        ))}
        {traces.map(([traceId, items], lane) => {
          let lastX = -Infinity;
          const finished = items.some(
            (item) => item.type === "complete" || item.type === "error"
          );

          return (
            <g
              key={traceId}
              stroke={items[0].source === "server" ? "#fc5200" : "#ffeadb"}
              transform={`translate(0,${laneHeight * lane + laneHeight / 2})`}
            >
              <text
                x="35"
                y={-5}
                fontSize={8}
                fontWeight={100}
                strokeWidth={0.3}
              >
                {items[0].source === "server" ? "Server" : "Browser"}
              </text>
              <line
                x1={getX(items[0])}
                x2={finished ? getX(items[items.length - 1]) : 100}
                strokeWidth={3}
              />
              {items.map((item, idx) => {
                const x = Math.max(getX(item), lastX + 3);
                lastX = x;
                return <circle key={idx} cx={x} r="3" />;
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
