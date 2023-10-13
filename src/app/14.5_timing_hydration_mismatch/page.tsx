import Image from "next/image";
import diagram from "./diagram.svg";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header className="light mb-0">
        <h5>Delayed Rehydration can lead to Hydration Mismatches.</h5>
      </header>
      <div className="grow self-stretch relative dark -mb-8 p-0">
        <Image
          src={diagram}
          fill
          className="object-contain"
          alt="A timing diagram describing a 'worst case' scenario where data from the server is delayed due to another component re-suspending, resulting in a hydration mismatch."
        />
      </div>
    </>
  );
}
