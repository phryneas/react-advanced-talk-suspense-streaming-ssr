import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>What we need.</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              A <code className="inline">useStream</code> method that injects
              into the stream ASAP.
            </li>
            <li>
              A <code className="inline">registerCleanupHandler</code> method.
            </li>
            <li>
              Both of these need to be <em>provided by React</em>.
            </li>
            <li>
              Right now, we need a <em>separate library per Framework</em> and{" "}
              <em>cannot support &quot;vanilla React&quot; users</em>.
            </li>
            <li>
              Meanwhile, Framework authors have to make assumption about React
              internals (like rendering/flush timing) that are prone to break at
              some point.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
