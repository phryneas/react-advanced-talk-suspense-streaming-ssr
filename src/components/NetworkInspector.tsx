import { TransportedData } from "./networkInspection/types";

export function NetworkInspector({ data }: { data: TransportedData[] }) {
  const min = data.reduce(
    (min, item) => Math.min(min, item.timestamp),
    Infinity
  );
  const max = data.reduce((max, item) => Math.max(max, item.timestamp), 0);
  const duration = Math.max(max - min, 1);
  const traces = Object.entries(
    data.reduce((traces, item) => {
      traces[item.traceId] = traces[item.traceId] || [];
      traces[item.traceId].push(item);
      return traces;
    }, {} as Record<string, TransportedData[]>)
  );
  const laneHeight = 30;
  function getX(item: TransportedData) {
    return ((item.timestamp - min) / duration) * 100;
  }
  return (
    <div>
      {data.map((item, idx) => (
        <pre key={idx}>{JSON.stringify(item, undefined, 2)}</pre>
      ))}
      <svg
        viewBox={`-10 -10 120 ${(traces.length - 1) * laneHeight + 20}`}
        xmlns="http://www.w3.org/2000/svg"
        stroke="red"
        fill="grey"
        style={{
          border: "1px solid red",
          width: 500,
          height: 200,
          position: "absolute",
          top: "50vh",
          right: 20,
        }}
      >
        {traces.map(([traceId, items], lane) => {
          let lastX = -Infinity;
          return (
            <g key={traceId}>
              <line
                x1={getX(items[0])}
                y1={laneHeight * lane}
                x2={getX(items[items.length - 1])}
                y2={laneHeight * lane}
                stroke={items[0].source === "server" ? "red" : "blue"}
                strokeWidth={5}
              />
              {items.map((item, idx) => {
                const x = Math.max(getX(item), lastX + 3);
                lastX = x;
                return <circle key={idx} cx={x} cy={laneHeight * lane} r="4" />;
              })}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
