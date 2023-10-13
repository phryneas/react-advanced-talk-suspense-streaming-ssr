import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Why timing is so important.</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>The stream closes before all data has been transported.</li>
            <li>
              We need to restart these queries in the browser - at the `load`
              event.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
