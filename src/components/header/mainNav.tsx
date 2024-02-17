"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

// This has to be client comp so we can use hook useSelectedLayoutSegment
export function MainNav({
    routes
}: {
    routes: { title: string; href: string }[];
}) {
    // Get the current segment from the router
    // Since the header is in the root layout it will be the next segement in the router
    const segment = useSelectedLayoutSegment();
    return (
        <nav className="flex items-center space-x-1">
            {routes.map(({ title, href }, i) => {
                return (
                    <Link
                        href={`${href}`}
                        className={`${href.toUpperCase().startsWith(`/${segment?.toUpperCase()}`) ? "text-foreground" : "text-foreground/60"}`}
                        key={i}
                    >
                        {title}
                    </Link>
                );
            })}
        </nav>
    );
}