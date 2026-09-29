"use client";

import { motion, useReducedMotion } from "framer-motion";

export interface SystemFlowProps {
  className?: string;
}

interface FlowNode {
  id: string;
  label: string;
  x: number;
  y: number;
}

const NODES: readonly FlowNode[] = [
  { id: "client", label: "client", x: 60, y: 50 },
  { id: "api", label: "api", x: 200, y: 50 },
  { id: "queue", label: "bullmq", x: 200, y: 160 },
  { id: "worker", label: "worker", x: 90, y: 280 },
  { id: "agent", label: "livekit agent", x: 300, y: 280 },
  { id: "db", label: "postgres", x: 90, y: 390 },
  { id: "whatsapp", label: "whatsapp", x: 300, y: 390 },
];

const EDGES: readonly string[] = [
  "M60 50 H200",
  "M200 50 V160",
  "M200 160 V220 H90 V280",
  "M200 160 V220 H300 V280",
  "M90 280 V390",
  "M300 280 V390",
];

const ROUTES: readonly { path: string; dur: number; begin: number }[] = [
  { path: "M60 50 H200 V220 H90 V390", dur: 5.5, begin: 0 },
  { path: "M60 50 H200 V220 H300 V390", dur: 5.5, begin: 2.2 },
  { path: "M60 50 H200 V220 H90 V390", dur: 5.5, begin: 3.9 },
];

const CHAR_WIDTH = 6.6;
const NODE_HEIGHT = 26;

export function SystemFlow({ className }: SystemFlowProps): React.JSX.Element {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      aria-hidden
    >
      <svg viewBox="0 0 380 440" className="h-auto w-full">
        <defs>
          <pattern id="flow-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r="1" className="fill-border" />
          </pattern>
          <radialGradient id="flow-fade">
            <stop offset="40%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="flow-mask">
            <rect width="380" height="440" fill="url(#flow-fade)" />
          </mask>
        </defs>

        <rect width="380" height="440" fill="url(#flow-dots)" mask="url(#flow-mask)" />

        {EDGES.map((d) => (
          <path key={d} d={d} fill="none" strokeWidth="1" className="stroke-border" />
        ))}

        {!reducedMotion &&
          ROUTES.map((route, index) => (
            <circle key={index} r="2.5" className="fill-accent-orange" opacity="0">
              <animateMotion
                path={route.path}
                dur={`${route.dur}s`}
                begin={`${route.begin}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0;1;1;0"
                keyTimes="0;0.06;0.94;1"
                dur={`${route.dur}s`}
                begin={`${route.begin}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}

        {NODES.map((node) => {
          const width = node.label.length * CHAR_WIDTH + 24;
          return (
            <g key={node.id}>
              <rect
                x={node.x - width / 2}
                y={node.y - NODE_HEIGHT / 2}
                width={width}
                height={NODE_HEIGHT}
                rx="6"
                strokeWidth="1"
                className="fill-surface stroke-border"
              />
              <text
                x={node.x}
                y={node.y}
                textAnchor="middle"
                dominantBaseline="central"
                className="fill-secondary font-mono text-[11px]"
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
