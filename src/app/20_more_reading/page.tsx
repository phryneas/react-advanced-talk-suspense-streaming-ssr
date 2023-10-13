import Image from "next/image";
import qrTalk from "./qr_talk.png";
import qrAcRfc from "./qr_ac_rfc.png";
import qrBlog from "./qr_blog.png";
import qrStreamRfc from "./qr_stream_rfc.png";

/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <header>
        <div>
          <h3>Links</h3>
        </div>
      </header>
      <main className="grow grid text-center justify-stretch items-stretch grid-cols-2 gap-x-16 gap-y-2">
        <div className="box  ">
          <a href="https://github.com/phryneas/react-advanced-talk-suspense-streaming-ssr">
            <Image src={qrTalk} alt="" style={{ height: "20vh" }} />
            This Talk.
          </a>
        </div>
        <div className="box ">
          <a href="https://github.com/reactjs/rfcs/pull/219">
            <Image src={qrStreamRfc} alt="" style={{ height: "20vh" }} />
            The injectToStream RFC.
          </a>
        </div>
        <div className="box">
          <a href="https://github.com/apollographql/apollo-client-nextjs/pull/9">
            <Image src={qrAcRfc} alt="" style={{ height: "20vh" }} />
            My writeup with all the graphs and way more details.
          </a>
        </div>
        <div className="box">
          <a href="https://phryneas.de/react-server-components-controversy">
            <Image src={qrBlog} alt="" style={{ height: "20vh" }} />
            My ranty Blogpost about React Server Components.
          </a>
        </div>
      </main>
    </>
  );
}
