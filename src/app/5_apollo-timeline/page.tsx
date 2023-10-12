import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Suspense for Data Fetching in Apollo Client</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              <em>October 2018</em>: the experimental{" "}
              <code>react-apollo-hooks</code> library releases with suspense
              support.
            </li>
            <li>
              <em>September 2019</em>: First &quot;official&quot; mention of
              Suspense I could find in our issues (#5357)
              <q>
                When React&apos;s suspense + data fetching approach finalizes (
                <em>hopefully in the next couple of months</em>), [...]
              </q>
            </li>
            <li>...waiting for React...</li>
            <li>
              <em>October 2022</em>: we start making plans - #10231 outlines a{" "}
              <code className="inline">useSuspenseQuery</code> hook.
              <br />
              Also mentions{" "}
              <code className="inline">renderToPipeableStream</code> for SSR
              support to be added in a later step.
            </li>
            <li>
              <em>December 2022</em>: Apollo Client <em>3.8.0-alpha.0</em>{" "}
              releases with a first version of{" "}
              <code className="inline">useSuspenseQuery</code>
            </li>
            <li>
              <em>Februray 2023</em>: we get the green light from the React Team
              to go forward supporting Suspense for Data Fetching
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
