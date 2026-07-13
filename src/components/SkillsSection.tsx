import React, { useState } from "react";
import { 
  Award, 
  Cpu, 
  ShieldAlert, 
  Database, 
  Terminal, 
  Activity, 
  CheckCircle2,
  Lock,
  Layers,
  Sparkles
} from "lucide-react";

interface SkillData {
  subject: string;
  value: number;
  tools: string[];
  desc: string;
}

const skillsData: SkillData[] = [
  { 
    subject: "SRE Automation", 
    value: 95, 
    tools: ["Kubernetes", "Docker Engine", "Ansible", "Terraform", "K8s Operators"], 
    desc: "Production container orchestration, self-healing architecture, and GitOps workflows." 
  },
  { 
    subject: "CI/CD Orchestration", 
    value: 92, 
    tools: ["GitLab CI/CD", "GitHub Actions", "Docker Registry", "Nexus OSS"], 
    desc: "High-throughput pipeline optimization, declarative builds, and container registry design." 
  },
  { 
    subject: "Observability", 
    value: 88, 
    tools: ["Prometheus", "Grafana dashboards", "ELK / EFK Stack", "Jaeger APM"], 
    desc: "Distributed tracing, real-time logging, custom alerting rules, and service health index reporting." 
  },
  { 
    subject: "DevSecOps & OWASP", 
    value: 94, 
    tools: ["SonarQube", "Snyk Scan", "Trivy Vault", "OWASP Top 10 Gates"], 
    desc: "Automated vulnerability scan gates, software composition auditing, and defensive code analysis." 
  },
  { 
    subject: "Penetration Testing", 
    value: 95, 
    tools: ["Burp Suite Pro", "Kali Linux", "Wireshark", "OWASP ZAP", "Nmap"], 
    desc: "Black-box & grey-box auditing of API gateway routing, web applications, and network segments." 
  },
  { 
    subject: "Secure SDLC (SSDLC)", 
    value: 91, 
    tools: ["Threat Modeling", "Secure Design Principles", "IEEE Specification Audits"], 
    desc: "Designing defense-in-depth security architectures and formal specifications checking." 
  }
];

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<SkillData | null>(skillsData[0]);
  const [hoveredSkillIndex, setHoveredSkillIndex] = useState<number | null>(null);

  // SVG Radar Settings
  const width = 360;
  const height = 320;
  const cx = width / 2;
  const cy = height / 2;
  const maxVal = 100;
  const r = 110; // outer radius
  const totalAngles = skillsData.length;

  // Helper to calculate coordinates
  const getCoordinates = (index: number, val: number) => {
    const angle = (index * (2 * Math.PI)) / totalAngles - Math.PI / 2;
    const x = cx + r * (val / maxVal) * Math.cos(angle);
    const y = cy + r * (val / maxVal) * Math.sin(angle);
    return { x, y };
  };

  // Coordinates of background concentric rings (levels: 20, 40, 60, 80, 100)
  const levels = [20, 40, 60, 80, 100];
  const ringPolygons = levels.map((lvl) => {
    return Array.from({ length: totalAngles }).map((_, i) => {
      const { x, y } = getCoordinates(i, lvl);
      return `${x},${y}`;
    }).join(" ");
  });

  // Coordinates of skills polygon
  const skillsPoints = skillsData.map((s, i) => {
    const { x, y } = getCoordinates(i, s.value);
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="bg-gh-card border border-gh-border rounded-lg p-5 space-y-6 shadow-sm page-break-avoid" id="sre-skills-section">
      <div className="border-b border-gh-border pb-3 flex items-center justify-between">
        <h3 className="text-base font-bold text-gh-text flex items-center gap-2 font-sans">
          <Award className="w-5 h-5 text-amber-500" /> SRE & Cybersecurity Proficiency Matrix
        </h3>
        <span className="text-xs text-gh-muted font-mono hidden sm:inline">Tactical Skill Telemetry</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left Column: SVG Radar Chart */}
        <div className="lg:col-span-5 flex justify-center flex-col items-center select-none" id="radar-chart-container">
          <div className="relative w-full max-w-[340px]">
            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible">
              {/* Concentric rings */}
              {ringPolygons.map((points, idx) => (
                <polygon
                  key={idx}
                  points={points}
                  fill="none"
                  stroke="var(--gh-border)"
                  strokeWidth="1"
                  strokeDasharray={idx < levels.length - 1 ? "4,4" : "none"}
                  className="opacity-70"
                />
              ))}

              {/* Grid axes / spokes */}
              {Array.from({ length: totalAngles }).map((_, i) => {
                const innerPt = { x: cx, y: cy };
                const outerPt = getCoordinates(i, maxVal);
                return (
                  <line
                    key={i}
                    x1={innerPt.x}
                    y1={innerPt.y}
                    x2={outerPt.x}
                    y2={outerPt.y}
                    stroke="var(--gh-border)"
                    strokeWidth="1.2"
                    className="opacity-80"
                  />
                );
              })}

              {/* Radial spokes axis text labels */}
              {skillsData.map((s, i) => {
                const textDistance = maxVal + 15;
                const { x, y } = getCoordinates(i, textDistance);
                // Adjust text anchor alignment based on quadrant
                let textAnchor = "middle";
                if (x < cx - 15) textAnchor = "end";
                if (x > cx + 15) textAnchor = "start";
                
                // Fine adjustments for specific labels
                const dx = textAnchor === "end" ? -3 : textAnchor === "start" ? 3 : 0;
                const dy = y < cy ? -2 : y > cy ? 8 : 2;

                return (
                  <text
                    key={i}
                    x={x + dx}
                    y={y + dy}
                    textAnchor={textAnchor}
                    className="text-[10px] font-bold font-mono fill-gh-text select-none cursor-pointer hover:fill-gh-accent transition-colors duration-200"
                    onClick={() => setActiveSkill(s)}
                  >
                    {s.subject}
                  </text>
                );
              })}

              {/* Skills Area Polygon */}
              <polygon
                points={skillsPoints}
                fill="rgba(68, 147, 248, 0.2)"
                stroke="var(--gh-accent)"
                strokeWidth="2.5"
                className="transition-all duration-300"
              />

              {/* Interactive nodes at vertices */}
              {skillsData.map((s, i) => {
                const { x, y } = getCoordinates(i, s.value);
                const isHovered = hoveredSkillIndex === i || activeSkill?.subject === s.subject;
                return (
                  <g key={i}>
                    <circle
                      cx={x}
                      cy={y}
                      r={isHovered ? 7 : 4}
                      className="fill-gh-card stroke-gh-accent transition-all duration-200 cursor-pointer"
                      strokeWidth="2"
                      onMouseEnter={() => {
                        setHoveredSkillIndex(i);
                        setActiveSkill(s);
                      }}
                      onMouseLeave={() => setHoveredSkillIndex(null)}
                      onClick={() => setActiveSkill(s)}
                    />
                    {isHovered && (
                      <circle
                        cx={x}
                        cy={y}
                        r="12"
                        className="fill-none stroke-gh-accent/30 animate-ping"
                        strokeWidth="1"
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>
          <p className="text-[10px] text-gh-muted font-mono mt-2 text-center">
            ✦ Hover vertices or select progress rows to inspect telemetry.
          </p>
        </div>

        {/* Right Column: Proficiency Progress Bars & Custom Details */}
        <div className="lg:col-span-7 space-y-4" id="skills-progress-list">
          {/* Progress list */}
          <div className="space-y-2.5">
            {skillsData.map((s) => {
              const isActive = activeSkill?.subject === s.subject;
              return (
                <div 
                  key={s.subject}
                  onClick={() => setActiveSkill(s)}
                  className={`p-2 rounded border transition cursor-pointer ${
                    isActive 
                      ? "bg-gh-card-selected border-gh-tab-active-border/40 shadow-sm" 
                      : "bg-gh-bg/40 border-gh-border hover:bg-gh-card-hover hover:border-gh-border"
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-semibold mb-1">
                    <span className="text-gh-text flex items-center gap-1.5">
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-gh-accent" : "bg-gh-muted/60"}`}></span>
                      {s.subject}
                    </span>
                    <span className="text-gh-accent font-mono">{s.value}%</span>
                  </div>
                  {/* Progress track */}
                  <div className="w-full bg-gh-border/50 h-2 rounded-full overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-gh-accent to-[#fd8c73] h-full rounded-full transition-all duration-500 ease-out" 
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Skill Telemetry Tooltip Panel */}
          {activeSkill && (
            <div className="border border-gh-border bg-gh-bg rounded-lg p-3.5 space-y-2 min-h-[110px] transition-all duration-300">
              <div className="flex items-center justify-between border-b border-gh-border/50 pb-1.5">
                <span className="text-xs font-bold text-gh-text flex items-center gap-1.5 font-mono">
                  <Terminal className="w-3.5 h-3.5 text-gh-accent" /> telemetry://{activeSkill.subject.toLowerCase().replace(/\s+/g, '-')}
                </span>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 rounded font-mono font-bold">
                  MTTR CONFIRMED
                </span>
              </div>
              <p className="text-xs text-gh-text/90 leading-relaxed">{activeSkill.desc}</p>
              
              <div className="pt-1.5 flex flex-wrap gap-1.5 items-center">
                <span className="text-[10px] font-mono text-gh-muted font-bold uppercase">Proficient Stack:</span>
                {activeSkill.tools.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-0.5 bg-gh-card text-gh-text border border-gh-border/80 rounded font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
