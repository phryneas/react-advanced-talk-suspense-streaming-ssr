/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Lenz Weber-Tronic (he/him)</h3>
        </div>
      </header>
      <main>
        <ul className="list-disc">
          <li>
            Senior Staff Engineer at Apollo GraphQL
            <br />
            working Full-time on the TypeScript Apollo Client
          </li>
          <li>
            Co-Maintainer of Redux Toolkit
            <br />
            Creator of RTK Query
          </li>
          <li>lots of other Open Source</li>
        </ul>
        <div className="self-stretch flex justify-evenly">
          <div className="box bg-satellite grow-1">
            Coffee / ADHD / Woodworking <br /> Gaming / Plants / Cooking <br />
            daily new nerdy stuff
          </div>
          <div className="box dark grow-1  self-end justify-self-end">
            Twitter: @phry
            <br />
            Github: @phryneas
            <br />
            Web: phryneas.de
          </div>
        </div>
      </main>
    </>
  );
}
