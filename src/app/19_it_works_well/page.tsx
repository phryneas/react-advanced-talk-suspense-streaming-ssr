export default function Page() {
  return (
    <>
      <header className="grow -mb-8 p-16 justify-between">
        <h3>Despite everything - this works really well.</h3>
        <h1 className="text-right">
          <em>Try it out:</em>
        </h1>
        <h5>
          <code>@apollo/experimental-nextjs-app-support</code>
        </h5>
      </header>
      <footer className="light">
        <p>
          I&apos;d actually love to call it &quot;stable&quot; at this point,
          <br />
          but timing isn&apos;t where I&apos;d love it to be.
          <br />
          Waiting for React there.
        </p>
      </footer>
    </>
  );
}
