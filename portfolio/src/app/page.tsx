import Hero from "./_components/Hero";
import HireMe from "./_components/HireMe";

export default function Home() {
  return (
    <main className="flex flex-col gap-32">
      <Hero />
      <HireMe />
    </main>
  );
}
