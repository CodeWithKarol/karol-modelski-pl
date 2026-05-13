export function WorkflowDiagram() {
  const nodes = [
    { id: "webhook", label: "Webhook", icon: "⚡", color: "#f59e0b", x: 32, y: 80 },
    { id: "gemini", label: "Gemini AI", icon: "✦", color: "#6366f1", x: 152, y: 80 },
    { id: "sheets", label: "G. Sheets", icon: "▦", color: "#10b981", x: 272, y: 80 },
    { id: "slack", label: "Slack", icon: "◈", color: "#ec4899", x: 392, y: 80 },
  ]

  const edges = [
    { x1: 96, y1: 96, x2: 152, y2: 96 },
    { x1: 216, y1: 96, x2: 272, y2: 96 },
    { x1: 336, y1: 96, x2: 392, y2: 96 },
  ]

  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
        {/* Header bar */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400/70" />
          <span className="h-3 w-3 rounded-full bg-amber-400/70" />
          <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            n8n · workflow · raport-dzienny.json
          </span>
        </div>

        {/* Workflow canvas */}
        <div className="relative px-6 py-8">
          {/* Grid background */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.04]"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                <path d="M 24 0 L 0 0 0 24" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>

          {/* SVG diagram */}
          <svg
            viewBox="0 0 480 160"
            className="relative z-10 w-full"
            aria-label="Workflow: Webhook → Gemini AI → Google Sheets → Slack"
            role="img"
          >
            {/* Edges / connectors */}
            {edges.map((e, i) => (
              <g key={i}>
                <line
                  x1={e.x1}
                  y1={e.y1}
                  x2={e.x2}
                  y2={e.y2}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="4 3"
                  className="text-border"
                />
                {/* Arrow head */}
                <polygon
                  points={`${e.x2},${e.y1 - 4} ${e.x2 + 8},${e.y1} ${e.x2},${e.y1 + 4}`}
                  className="fill-muted-foreground"
                />
              </g>
            ))}

            {/* Nodes */}
            {nodes.map((node) => (
              <g key={node.id} transform={`translate(${node.x}, ${node.y - 40})`}>
                {/* Node box */}
                <rect
                  width="80"
                  height="72"
                  rx="10"
                  className="fill-card stroke-border"
                  strokeWidth="1.5"
                />
                {/* Colored top accent */}
                <rect width="80" height="4" rx="2" fill={node.color} />
                {/* Icon */}
                <text
                  x="40"
                  y="34"
                  textAnchor="middle"
                  fontSize="20"
                  className="fill-foreground select-none"
                >
                  {node.icon}
                </text>
                {/* Label */}
                <text
                  x="40"
                  y="56"
                  textAnchor="middle"
                  fontSize="10"
                  fontFamily="monospace"
                  className="fill-muted-foreground select-none"
                >
                  {node.label}
                </text>
              </g>
            ))}
          </svg>

          {/* Status row */}
          <div className="relative z-10 mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
              <span className="font-mono text-xs text-muted-foreground">
                Aktywny · ostatnie uruchomienie: 3 min temu
              </span>
            </div>
            <span className="font-mono text-xs text-muted-foreground">4 węzły · 0 błędów</span>
          </div>
        </div>
      </div>

      {/* Savings bubble */}
      <div className="absolute -right-4 -top-4 z-20 rotate-2">
        <div className="rounded-xl border border-amber-400/30 bg-amber-50 px-4 py-3 shadow-lg dark:bg-amber-950/50">
          <p className="font-mono text-xs font-semibold text-amber-700 dark:text-amber-300">
            ⏱ Zaoszczędzone
          </p>
          <p className="mt-0.5 font-mono text-xl font-bold text-amber-600 dark:text-amber-400">
            4,5 h
          </p>
          <p className="font-mono text-xs text-amber-600/70 dark:text-amber-400/70">
            w tym tygodniu
          </p>
        </div>
      </div>

      {/* Execution count badge */}
      <div className="absolute -bottom-3 -left-3 z-20 -rotate-1">
        <div className="rounded-lg border border-emerald-400/30 bg-emerald-50 px-3 py-2 shadow-md dark:bg-emerald-950/50">
          <p className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400">
            ✓ 312 uruchomień
          </p>
          <p className="font-mono text-xs text-emerald-600/70 dark:text-emerald-400/70">
            zero błędów
          </p>
        </div>
      </div>
    </div>
  )
}
