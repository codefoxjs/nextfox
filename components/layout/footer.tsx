import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/shared/icons";

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-border py-4 md:h-16 md:py-0">
      <div className="mx-auto flex h-full container flex-col gap-1 md:grid md:grid-cols-3 md:items-center md:gap-4">
        {/* Navigation Links */}
        <nav
          className="flex items-center justify-center gap-1 md:gap-2"
          aria-label="Footer navigation"
        >
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Learn Next.js"
          >
            <Icons.file />
            Learn
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://www.codefoxjs.com?utm_source=app-preview&utm_medium=referral&utm_campaign=codefox-next"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.window />
            Templates
          </Link>
          <Link
            className={buttonVariants({ variant: "link" })}
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icons.globe />
            nextjs.org →
          </Link>
        </nav>

        {/* Branding and Copyright */}
        <div className="flex items-center justify-between md:col-span-2 md:contents">
          <div className="md:col-start-1 md:row-start-1">
            <Link href="/" aria-label="Go to homepage">
              <Icons.nextjs className="size-16" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground md:col-start-3 md:row-start-1 md:justify-self-end">
            &copy; {new Date().getFullYear()}{" "}
            <Link href="https://www.codefoxjs.com" className="hover:underline">
              CodeFoxJS
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
