import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col gap-20 p-5">
      <Hero />
      <main className="flex-1 flex flex-col gap-6 max-w-5xl px-4">
        <h2 className="font-medium text-xl mb-4">Next steps</h2>
        <p>アプリケーションの構築を始めましょう！</p>
      </main>
    </div>
  );
}
