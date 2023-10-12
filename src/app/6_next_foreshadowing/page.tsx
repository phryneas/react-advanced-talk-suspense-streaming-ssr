export default function Page() {
  return (
    <header className="grow -mb-8 p-16 justify-between">
      <h1 className="text-right">
        <em>
          <code className="inline">useSuspenseQuery</code>
        </em>
        <br />
        works fine
      </h1>
      <h3>
        But people keep asking about this new experimental Next.js{" "}
        <em>App Router</em>
      </h3>
      <p className="text-right">So let&apos;s try that?</p>
    </header>
  );
}
