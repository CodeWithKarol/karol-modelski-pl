export function WorkflowDiagram() {
  const nodes = [
    { id: "webhook", label: "Webhook", icon: "⚡" },
    { id: "gemini", label: "Gemini AI", icon: "✦" },
    { id: "sheets", label: "G. Sheets", icon: "▦" },
    { id: "slack", label: "Slack", icon: "◈" },
  ]

  const edges = [
    { x1: 96, y1: 96, x2: 152, y2: 96 },
    { x1: 216, y1: 96, x2: 272, y2: 96 },
    { x1: 336, y1: 96, x2: 392, y2: 96 },
  ]

  return (
    <div className="relative w-full">
      {/* Card */}
      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        {/* Header bar */}
        <div className="flex items-center gap-2 border-b border-border bg-muted/30 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-border" />
          <span className="h-3 w-3 rounded-full bg-border" />
          <span className="h-3 w-3 rounded-full bg-border" />
          <span className="ml-3 font-mono text-xs text-muted-foreground">
            workflow.json
          </span>
        </div>

        {/* Workflow canvas */}
        <div className="relative px-6 py-8">
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
                  strokeWidth="1.5"
                  strokeDasharray="4 3"
                  className="text-border"
                />
                {/* Arrow head */}
                <polygon
                  points={`${e.x2},${e.y1 - 4} ${e.x2 + 8},${e.y1} ${e.x2},${e.y1 + 4}`}
                  className="fill-border"
                />
              </g>
            ))}

            {/* Nodes */}
            {nodes.map((node, i) => (
              <g key={node.id} transform={`translate(${32 + i * 120}, 40)`}>
                {/* Node box */}
                <rect
                  width="80"
                  height="72"
                  rx="8"
                  className="fill-background stroke-border"
                  strokeWidth="1"
                />
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
        </div>
      </div>
    </div>
  )
}
