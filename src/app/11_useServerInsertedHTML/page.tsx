import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>What if our component suspends twice.</h3>
          <h4 className="text-right">
            Do we inject the same data three times then?
          </h4>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>Umm... yeah, we kinda would.</li>
            <li>
              Solution: keep some kind of global queue. <br />
              Flush that whenever in injected component is flushed.
            </li>
            <li>By now, this is also a pattern in the docs.</li>
            <li>
              But we can do a bit better:{" "}
              <code className="inline">
                <em>ServerInsertedHTMLContext</em>
              </code>
            </li>
            <li>
              Contains a callback function that injects a component callback.
            </li>
            <li>Now we can conditionally inject.</li>
            <li>We still need that global queue though.</li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
