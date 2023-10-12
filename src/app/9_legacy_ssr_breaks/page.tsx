import { Reveal } from "@/components/Reveal";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>So let&apos;s try that.</h3>
        </div>
      </header>
      <main>
        <img src="SSR_fails.jpg" alt="" className="grow" />
      </main>
    </>
  );
}
