import Image from "next/image";
import thisIsFine from "./thisisfine.png";

export default function Page() {
  return (
    <>
      <header>
        <h2 className="text-right">We can work around most of this.</h2>
      </header>
      <main className="relative">
        <Image fill src={thisIsFine} alt="This is fine (meme)" />
      </main>
      <footer>
        <h3 className="text-right">
          But I&apos;d prefer it if we wouldn&apos;t need to.
        </h3>
      </footer>
    </>
  );
}
