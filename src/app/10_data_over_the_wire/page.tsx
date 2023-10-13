import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Getting data over the wire...</h3>
          <h4 className="text-right">...into a running Application.</h4>
        </div>
      </header>
      <main>
        <ul>
          <Reveal>
            <li>
              React RFC #219:{" "}
              <code className="inline">
                <em>injectToStream</em>
              </code>
            </li>
            <li>
              <i>Might</i> come one day... <i>maybe</i>?
            </li>
            <li>
              Next.js comes with{" "}
              <code className="inline">
                <em>useServerInsertedHTML</em>
              </code>
            </li>
            <li>
              On call, stuffs a passed component callback into a global queue
            </li>
            <li>
              What if our component suspends twice. Do we inject the same data
              three times then?
            </li>
            <li>And when exactly does this &quot;flushing&quot; happen?</li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
