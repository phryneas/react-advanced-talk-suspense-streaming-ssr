import Image from "next/image";
import image from "./SSR_fails.jpg";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>So let&apos;s try that.</h3>
        </div>
      </header>
      <main className="relative">
        <Image fill className="object-contain" src={image} alt="SSR fails" />
      </main>
    </>
  );
}
