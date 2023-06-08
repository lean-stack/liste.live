import { cn } from "@/lib/utils";
import { List } from "lucide-react";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={cn(
        "min-h-screen flex flex-col justify-center items-center gap-y-8",
        robotoSlab.className
      )}
    >
      <h1 className="text-7xl flex items-end gap-x-4">
        Liste{" "}
        <span className="translate-y-3">
          <List className="h-20 w-16" />
        </span>{" "}
        Live
      </h1>
      <h2 className="text-3xl text-muted-foreground [font-variant:small-caps]">
        Make Any List You Want
      </h2>
    </main>
  );
}
