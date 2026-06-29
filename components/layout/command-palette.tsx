"use client";

import { useEffect, type ReactNode } from "react";
import { Command } from "cmdk";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import {
  User,
  GraduationCap,
  Briefcase,
  FolderKanban,
  Code2,
  Award,
  Mail,
  Download,
  Sun,
  Moon,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons/social";
import { navLinks, contactInfo } from "@/lib/data";
import { scrollToSection } from "@/lib/utils";
import { useTheme } from "next-themes";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const iconMap: Record<string, ReactNode> = {
  About: <User className="h-4 w-4" />,
  Education: <GraduationCap className="h-4 w-4" />,
  Experience: <Briefcase className="h-4 w-4" />,
  Projects: <FolderKanban className="h-4 w-4" />,
  Skills: <Code2 className="h-4 w-4" />,
  Certifications: <Award className="h-4 w-4" />,
  Contact: <Mail className="h-4 w-4" />,
};

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const runCommand = (command: () => void) => {
    onOpenChange(false);
    command();
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden p-0 max-w-lg">
        <DialogTitle className="sr-only">Command Palette</DialogTitle>
        <Command className="[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-group]]:px-2 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          <Command.Input
            placeholder="Type a command or search..."
            className="border-b border-slate-200 dark:border-slate-700 px-4"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
              No results found.
            </Command.Empty>

            <Command.Group heading="Navigation">
              {navLinks.map((link) => (
                <Command.Item
                  key={link.href}
                  onSelect={() =>
                    runCommand(() => scrollToSection(link.href.replace("#", "")))
                  }
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800"
                >
                  {iconMap[link.label]}
                  <span>Go to {link.label}</span>
                </Command.Item>
              ))}
            </Command.Group>

            <Command.Group heading="Actions">
              <Command.Item
                onSelect={() => runCommand(() => window.open(contactInfo.resumeUrl, "_blank"))}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800"
              >
                <Download className="h-4 w-4" />
                <span>Download Resume</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(contactInfo.github, "_blank"))}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800"
              >
                <GitHubIcon className="h-4 w-4" />
                <span>View GitHub</span>
              </Command.Item>
              <Command.Item
                onSelect={() => runCommand(() => window.open(contactInfo.linkedin, "_blank"))}
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800"
              >
                <LinkedInIcon className="h-4 w-4" />
                <span>View LinkedIn</span>
              </Command.Item>
              <Command.Item
                onSelect={() =>
                  runCommand(() => setTheme(theme === "dark" ? "light" : "dark"))
                }
                className="flex items-center gap-3 rounded-xl px-3 py-2.5 cursor-pointer aria-selected:bg-slate-100 dark:aria-selected:bg-slate-800"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
                <span>Toggle Theme</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </DialogContent>
    </Dialog>
  );
}
