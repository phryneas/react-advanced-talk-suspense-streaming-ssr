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
            <li>
              The App is <em>already running in the browser</em> while it
              renders on the server.
            </li>
            <li>
              The page is interactive before the server finished rendering.
            </li>
            <li>
              Apollo Client is a <em>Normalized Cache</em>.
            </li>
            <li>
              User Interaction could trigger cache updates that conflicts with
              data being rendered on the server.
            </li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
