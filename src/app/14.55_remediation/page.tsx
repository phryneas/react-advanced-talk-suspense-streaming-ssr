import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>What can we do?</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              While this is a Hydration Mismatch, it&apos;s also correct - there
              is just newer data that should be rendered.
            </li>
            <li>
              After the hook renders on the Server, we{" "}
              <em>Snapshot the Result</em>.
            </li>
            <li>
              We <em>Transport the Snapshot</em> to the browser.
            </li>
            <li>
              We Render the hook, but <em>return the Snapshotted value</em>.
            </li>
            <li>
              Then we <em>immediately rerender</em>.
            </li>
            <li>
              It would be nice if we could just tell React &quot;Hey, this might
              have a Hydration Mismatch, that&apos;s okay&quot;!
            </li>
            <li>
              Right now, we transport a lot of extra data just to make React
              happy.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
