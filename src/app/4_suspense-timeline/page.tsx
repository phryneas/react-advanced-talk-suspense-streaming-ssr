import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Suspense for Data Fetching in React</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <Reveal>
            <li>
              <em>October 2018</em>: `React.lazy` is added to React 16.6 - some
              people start abusing it for data fetching purposes.
            </li>
            <li>
              <em>February 2019</em>: React 16.8 releases - the one with Hooks.
            </li>
            <li>
              <em>March 2022</em>: React 18 releases, with &quot;Concurrent
              React&quot; and a footnote:
              <q>
                In React 18, you can start using Suspense for data fetching in
                opinionated frameworks like Relay, Next.js, Hydrogen, or Remix.
                Ad hoc data fetching with Suspense is{" "}
                <em>
                  technically possible, but still not recommended as a general
                  strategy
                </em>
                .
              </q>
            </li>
            <li>
              Data fetching libraries experiment a bit, but keep everything
              &quot;experimental&quot;.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
