import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-128px)] max-w-screen-xl items-center justify-center">
      <div className="flex flex-col items-center gap-8 md:items-start">
        <Icons.nextjs className="w-44" />
        <ol className="list-inside list-decimal text-center text-sm sm:text-left">
          <li className="mb-2 font-mono">
            Get started by editing{" "}
            <code className="rounded-md bg-muted font-mono">app/page.tsx</code>.
          </li>
          <li className="font-mono">Save and see your changes instantly.</li>
        </ol>

        <div className="flex flex-col items-center gap-4 md:flex-row">
          <Link
            href="https://vercel.com/new/clone?repository-url=https://github.com/codefoxjs/nextjs"
            target="_blank"
            rel="noopener noreferrer"
            className={buttonVariants()}
          >
            <Icons.vercel />
            Deploy now
          </Link>
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
        </div>
      </div>
    </main>
  );
}
