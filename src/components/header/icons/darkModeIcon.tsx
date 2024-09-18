"use client";

import { HeaderIcon } from "@/components/header/icons/headerIcon";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { ComputerDesktopIcon } from "@heroicons/react/20/solid";
import { useTheme, type Theme } from "next-server-theme";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger
} from "@/shadcn/ui/dropdown-menu";

// Client component since local storage
export function DarkModeIcon() {
    const [theme, setTheme] = useTheme();

    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger>
                <HeaderIcon className="w-8">
                    {
                        {
                            light: <SunIcon className="h-5" />,
                            dark: <MoonIcon className="h-5" />,
                            system: <ComputerDesktopIcon className="h-5" />
                        }[theme]
                    }
                </HeaderIcon>
            </DropdownMenuTrigger>
            <DropdownMenuContent sideOffset={7} align="end">
                {(["light", "dark", "system"] as Theme[]).map(themeOption => {
                    return (
                        <DropdownMenuItem
                            key={themeOption}
                            onClick={() => setTheme(themeOption)}
                            className={`flex items-center justify-between rounded-sm px-2 py-1.5 text-left text-sm capitalize text-neutral-400 hover:bg-zinc-100 ${
                                theme === themeOption && "text-neutral-950"
                            }`}
                        >
                            {themeOption}
                        </DropdownMenuItem>
                    );
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
