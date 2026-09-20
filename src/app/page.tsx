import Timeline from "@/components/Timeline";
import ScrollDashes from "@/components/ScrollDashes";
import { timeline } from "@/data/timeline";

export default function Home() {
  return (
    <main className="flex-1 w-full max-w-2xl mx-auto px-6 sm:px-8 py-16 sm:py-20">
      <header className="mb-20">
        <h1 className="text-2xl sm:text-3xl font-medium tracking-tight lowercase">
          ankita menon
        </h1>
        <p className="mt-3 text-muted max-w-lg leading-relaxed">
          product designer. relentlessly curious. i build small things on the
          side and run my life out of a spreadsheet — replace this line with
          your own intro.
        </p>
      </header>

      <Timeline entries={timeline} />
      <ScrollDashes sections={["experience", "agents", "side-quests"]} />
    </main>
  );
}
