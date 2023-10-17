import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>How SSR worked in the past</h3>
        </div>
      </header>
      <main>
        <ul className="list-decimal">
          <Reveal>
            <li>
              Hook in before React actually renders the page on the server (e.g.
              in <code>getServerSideProps</code>).
            </li>
            <li>Initialize Apollo Client</li>
            <li>
              <pre>
                <code>
                  {`getDataFromTree(
  <ApolloProvider client={client}><Page /></ApolloProvider>
)`}
                </code>
              </pre>
            </li>
            <li>
              Wait for all queries initialized by that pre-render to finish.
            </li>
            <li>
              Repeat 3. until no more queries are initialized. (This actually
              happens internally.)
            </li>
            <li>
              Pass Cache contents as Props into{" "}
              <code className="inline">App</code> component.
            </li>
            <li>Render HTML.</li>
            <li>Send HTML and accumulated Props to Browser.</li>
            <li>Hydrate.</li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
