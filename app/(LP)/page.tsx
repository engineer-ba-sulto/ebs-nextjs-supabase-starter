import { Hero } from "./_components/hero";

export default function Home() {
  return (
    <main className="flex-1 flex flex-col gap-20 p-5">
      <Hero />
      <div className="flex-1 flex flex-col gap-6 max-w-5xl px-4">
        <h2 className="font-bold text-2xl mb-4">LP Page</h2>
      </div>
    </main>
  );
}
