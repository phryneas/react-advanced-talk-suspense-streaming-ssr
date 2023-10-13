import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Current Problems</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              This requires framework-specific APIs.
              <br />
              (We have a version of this working in Redwood that only swaps out{" "}
              <code className="inline">useServerInsertedHTML</code>)
            </li>
            <li>Timing is suboptimal.</li>
            <li>
              A lot of extra data over the wire just to prevent Hydration
              Mismatch warnings.
            </li>
            <li>
              We can&apos;t delay closing of the Stream if we need to wait for
              something.
            </li>
            <li>
              Don&apos;t get me started on the painful <i>bundling story</i>.
              That&apos;s a rant for another day.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
