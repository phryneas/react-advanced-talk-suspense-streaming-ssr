import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>When the Stream closes too soon.</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              We have a pair of sibling hooks:
              <ul className="list-disc">
                <li>
                  <code className="inline">useBackgroundQuery</code> starts a
                  query
                </li>
                <li>
                  <code className="inline">useReadQuery</code> (e.g. in a child
                  component) suspends & returns the result
                </li>
              </ul>
            </li>
            <li>
              If <code className="inline">useReadQuery</code> is (not) rendered
              conditionally, the page might just finish rendering.
            </li>
            <li>
              The stream closes before the query resolves, the result from{" "}
              <code className="inline">useBackgroundQuery</code> has no chance
              of being transported over.
            </li>
            <li>
              We restart these queries in the browser - at the `load` event,
              which indicates that streaming has finished.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
