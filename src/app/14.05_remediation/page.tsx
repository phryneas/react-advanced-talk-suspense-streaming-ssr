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
              When a query starts on the Server, we get that info to the Browser
              as soon as possible.
            </li>
            <li>
              In the &quot;Browser Apollo Client&quot;, we{" "}
              <em>simulate an ongoing request</em>.
            </li>
            <li>
              Apollo Client&apos;s <em>Query Deduplication</em> will prevent
              this exact query from running again in the browser.
            </li>
            <li>
              When a query finishes on the Server, we get that info to the
              Browser as soon as possible.
            </li>
            <li>
              The <em>simulated request finishes</em>.
            </li>
            <li>
              We cannot do more - the details of{" "}
              <i>&quot;as soon as possible&quot;</i> are{" "}
              <em>out of our control</em>.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
