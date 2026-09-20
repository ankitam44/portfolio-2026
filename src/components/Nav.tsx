import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { categoryLabels, type Category } from "@/data/timeline";

const CATEGORIES: Category[] = ["experience", "agents", "side-quests"];

export default function Nav() {
  return (
    <nav className="sticky top-0 z-10 backdrop-blur bg-background/80 border-b border-line">
      <div className="max-w-2xl mx-auto px-6 sm:px-8 h-14 flex items-center justify-between text-sm">
        <Link href="/" className="lowercase tracking-tight">
          ankita
        </Link>
        <div className="flex items-center gap-5">
          {CATEGORIES.map((c) => (
            <a
              key={c}
              href={`#${c}`}
              className="hidden sm:inline text-muted hover:text-foreground transition-colors lowercase"
            >
              {categoryLabels[c].toLowerCase()}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
