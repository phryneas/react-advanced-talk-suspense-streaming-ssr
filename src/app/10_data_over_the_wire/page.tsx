import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Getting data over the wire...</h3>
          <h4 className="text-right">...into a running Application.</h4>
        </div>
      </header>
      <main>
        <ul className="list-decimal">
          <Reveal>
            <li>
              React RFC #219:{" "}
              <code className="inline">
                <em>injectToStream</em>
              </code>
            </li>
            <li>
              <i>Might</i> come one day... <i>maybe</i>?
            </li>
            <li></li>
          </Reveal>
        </ul>
      </main>
    </>
  );
}
