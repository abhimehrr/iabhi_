"use client";

import { useEffect, useMemo, useState } from "react";

export interface TerminalCardProps {
  className?: string;
}

const TERMINAL_LINES: string[] = [
  "> whoami",
  "Abhishek - Backend Engineer",
  "> skills --top",
  "NestJS, Node.js, PostgreSQL, Redis, Docker",
  "> status",
  "Open to interesting problems"
];

export function TerminalCard({ className }: TerminalCardProps): React.JSX.Element {
  const fullText = useMemo(() => TERMINAL_LINES.join("\n"), []);
  const [typedText, setTypedText] = useState<string>("");

  useEffect(() => {
    let index = 0;
    const timer = window.setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) {
        window.clearInterval(timer);
      }
    }, 20);

    return () => {
      window.clearInterval(timer);
    };
  }, [fullText]);

  return (
    <div
      className={`glass-panel edge-glow relative overflow-hidden rounded-2xl p-5 ${className ?? ""}`}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.18),transparent_30%)]" />
      <div className="mb-4 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
      </div>
      <pre className="relative min-h-[170px] whitespace-pre-wrap font-mono text-sm leading-7 text-[#22c55e]">
        {typedText}
        <span className="animate-pulse">|</span>
      </pre>
    </div>
  );
}
