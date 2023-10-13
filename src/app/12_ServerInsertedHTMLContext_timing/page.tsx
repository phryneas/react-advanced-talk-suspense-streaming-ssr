import { Reveal } from "@/components/Reveal";
import Image from "next/image";
import code from "./createInsertedHTMLStream.png";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>And when exactly does this &quot;flushing&quot; happen?</h3>
        </div>
      </header>
      <main>
        <a href="https://github.com/vercel/next.js/blob/bbd79ac9977e03010e09ff90d933f2ec614b031f/packages/next/src/server/node-web-streams-helper.ts#L151">
          <Image
            src={code}
            className="p-0"
            alt="createInsertedHTMLStream source code"
          />
        </a>
        <p>
          TLDR: whenever React is done rendering
          <br />
          Usually, when a Suspense boundary is finished.
        </p>
      </main>
    </>
  );
}
