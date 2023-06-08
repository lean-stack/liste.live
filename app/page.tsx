import { Icon } from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <div className="absolute right-2 top-2">
      <ThemeToggle />
    </div>
    <main
      className={cn(
        "min-h-screen flex flex-col justify-center items-center gap-y-8",
        robotoSlab.className
      )}
    >
      <h1 className="text-5xl sm:text-7xl flex items-end gap-x-4">
        <span>Liste</span>
        <span className="translate-y-1 sm:translate-y-2">
          <Icon.List className="h-12 sm:h-20 w-12 sm:w-20" />
        </span>
        <span>Live</span>
      </h1>
      <h2 className="text-2xl sm:text-3xl text-muted-foreground [font-variant:small-caps]">
        Make Any List You Want
      </h2>
    </main>
    </>
  );
}
