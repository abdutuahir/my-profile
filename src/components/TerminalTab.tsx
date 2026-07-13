import React, { useState, useRef, useEffect } from "react";
import { 
  Terminal, 
  Play, 
  Cpu, 
  RefreshCw, 
  ShieldAlert, 
  Activity, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { experienceData } from "../data/experienceData";

interface LogMessage {
  text: string;
  type: "input" | "system" | "error" | "success" | "warning";
}

export default function TerminalTab() {
  const [history, setHistory] = useState<LogMessage[]>([
    { text: "Initializing SRE Operational Shell...", type: "system" },
    { text: "Establishing secure link to abdutahiredris profile nodes...", type: "system" },
    { text: "SLA validation check: PASS (99.99%)", type: "success" },
    { text: "Secure tunnel verified. Type 'help' to see available commands or click the shortcut buttons below.", type: "warning" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of terminal
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (cmd: string) => {
    if (!cmd.trim() || isStreaming) return;

    const trimmedCmd = cmd.trim().toLowerCase();
    const newHistory = [...history, { text: `sre-shell:~$ ${cmd}`, type: "input" as const }];

    switch (trimmedCmd) {
      case "help":
        newHistory.push({
          text: "Available Shell Commands:\n" +
                "  about       - Display Abdu's professional summary in elegant form\n" +
                "  experience  - View historical employment log chronologically\n" +
                "  skills      - Output full table of technical proficiencies\n" +
                "  logs        - Stream live simulated USSD & M-Pesa billing integration SRE telemetry\n" +
                "  audit       - Run simulated OWASP API security audit & remediation script\n" +
                "  clear       - Clear screen buffer",
          type: "system"
        });
        setHistory(newHistory);
        break;

      case "about":
        newHistory.push({
          text: "=========================================================\n" +
                " ABDU TAHIR EDRIS - ENTERPRISE INTEGRATION & SRE LEAD\n" +
                "=========================================================\n" +
                "Current: SRE Lead & Enterprise Integration Engineer @ Safaricom Ethiopia\n" +
                "Profile: Site Reliability Specialist linking high-throughput core channels.\n" +
                "Focus  : TIBCO BusinessWorks, Spring Boot Web Services, GitLab CI/CD, K8s.\n" +
                "Trust  : Multi-year cyber defence developer & penetration auditor (INSA).\n" +
                "Contact: abdutahiredris@gmail.com | Location: Addis Ababa, Ethiopia",
          type: "success"
        });
        setHistory(newHistory);
        break;

      case "experience":
        const expLines = experienceData.map(exp => 
          `• [${exp.period}] ${exp.role} @ ${exp.company}\n` +
          `  - Sector/Summary: ${exp.summary}\n` +
          `  - Tech involved: ${exp.techStack.slice(0, 5).join(", ")}`
        ).join("\n\n");
        newHistory.push({
          text: `EMPLOYMENT LOG DATABASE:\n\n${expLines}`,
          type: "system"
        });
        setHistory(newHistory);
        break;

      case "skills":
        newHistory.push({
          text: "TECHNICAL PROFICIENCY ARCHIVE:\n\n" +
                "┌──────────────────────────┬─────────────────────────────────────────────────┐\n" +
                "│ CATEGORY                 │ TOOLS / FRAMEWORKS                              │\n" +
                "├──────────────────────────┼─────────────────────────────────────────────────┤\n" +
                "│ Enterprise Integration   │ TIBCO BW, Spring Boot, WSO2, ESB, USSD, eKYC    │\n" +
                "│ SRE & Operations         │ Kubernetes, Docker, GitLab CI/CD, Prometheus    │\n" +
                "│ Centralized Monitoring   │ Grafana, ELK Stack, Jaeger Tracing, Alertmanager│\n" +
                "│ Cybersecurity Controls   │ OWASP Top 10, Kali Linux, Source Audit, SSDLC   │\n" +
                "│ Core Languages           │ Java, Python, C++, PHP, Bash Shell Scripting    │\n" +
                "└──────────────────────────┴─────────────────────────────────────────────────┘",
          type: "success"
        });
        setHistory(newHistory);
        break;

      case "logs":
        setIsStreaming(true);
        setHistory(newHistory);
        streamTelemetryLogs(newHistory);
        break;

      case "audit":
        setIsStreaming(true);
        setHistory(newHistory);
        streamSecurityAudit(newHistory);
        break;

      case "clear":
        setHistory([]);
        break;

      default:
        newHistory.push({
          text: `bash: command not found: '${cmd}'. Type 'help' or use shortcuts below for reference.`,
          type: "error"
        });
        setHistory(newHistory);
        break;
    }
    setInputValue("");
  };

  // Telemetry stream generator
  const streamTelemetryLogs = (currentHistory: LogMessage[]) => {
    const steps = [
      { text: "[SRE-MONITOR] Booting SRE Core Telemetry Streamer...", type: "system" },
      { text: "[TIBCO-BW] Loading BusinessWorks Engine Process Context [ESB_CORE_GATEWAY]", type: "system" },
      { text: "[USSD-GATEWAY] Establishing channel callback to Safaricom Billing Server [PORT: 3000]", type: "system" },
      { text: "[eKYC-API] Sync check initiated. Handshake complete. Verification response: 200 OK", type: "success" },
      { text: "[MONITOR] Current TPS: 1450 | Memory Saturation: 44.2% | CPU Load: 12%", type: "system" },
      { text: "[ALERT] core_latency_ms (3250ms) exceeds SLA threshold threshold=2500ms for consecutive requests!", type: "warning" },
      { text: "[ALERT] Triage triggered. SRE Alertmanager routing page to On-Call (abdutahiredris)", type: "warning" },
      { text: "[SRE-SCRIPT] SLA remediation script executing. Cycling container replicas in K8s pool...", type: "system" },
      { text: "[K8S-DOCKER] Redeploying pod instances of 'ussd-integration-v2-7b'...", type: "system" },
      { text: "[SRE-MONITOR] SLA validation test running...", type: "system" },
      { text: "[SRE-MONITOR] Transaction latency restored to 120ms. SLA status: PASS (99.99%)", type: "success" },
      { text: "[SRE-MONITOR] SRE Telemetry stream terminated safely.", type: "success" }
    ];

    let i = 0;
    let runningHistory = [...currentHistory];

    const interval = setInterval(() => {
      if (i < steps.length) {
        runningHistory = [...runningHistory, steps[i] as LogMessage];
        setHistory(runningHistory);
        i++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 450);
  };

  // Cybersecurity scanner stream
  const streamSecurityAudit = (currentHistory: LogMessage[]) => {
    const steps = [
      { text: "[INSA-AUDIT] Initializing secure penetration test suite v3.4...", type: "system" },
      { text: "[INSA-AUDIT] Target host verified: internal-payment-gateway-gateway.local", type: "system" },
      { text: "[OWASP-SCAN] Running signature matching for API Broken Object Level Authorization (BOLA)...", type: "system" },
      { text: "[OWASP-SCAN] WARNING: Unauthorized resource ID manipulation allowed on route /api/v1/payment/accounts/{id}", type: "error" },
      { text: "[OWASP-SCAN] Running input sanitization check for SQL injection (SQLi)...", type: "system" },
      { text: "[OWASP-SCAN] ALERT: Database error response returned on single quote input! Susceptible to blind SQLi", type: "error" },
      { text: "[SSDLC-FIX] Deploying Secure Software Development Lifecycle remediation scripts...", type: "warning" },
      { text: "[SSDLC-FIX] Rebuilding gateway code with prepared statement parameters and regex validation filters...", type: "system" },
      { text: "[INSA-AUDIT] Re-auditing vulnerable endpoints...", type: "system" },
      { text: "[INSA-AUDIT] Results: BOLA (RESOLVED), SQLi (RESOLVED). Secure coding gate: PASSED", type: "success" },
      { text: "[INSA-AUDIT] Penetration auditing process completed. Zero threats detected in buffer.", type: "success" }
    ];

    let i = 0;
    let runningHistory = [...currentHistory];

    const interval = setInterval(() => {
      if (i < steps.length) {
        runningHistory = [...runningHistory, steps[i] as LogMessage];
        setHistory(runningHistory);
        i++;
      } else {
        clearInterval(interval);
        setIsStreaming(false);
      }
    }, 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      runCommand(inputValue);
    }
  };

  return (
    <div className="py-6 space-y-6" id="sre-terminal-container">
      {/* Intro details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d0d7de] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#1f2328] flex items-center gap-2">
            <Terminal className="w-5 h-5 text-amber-600" /> SRE Operational Sandbox
          </h2>
          <p className="text-xs text-[#57606a] mt-1">
            Interact directly with simulated environments representing Abdu's day-to-day operations in SRE deployment pipelines and security assessments.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-mono bg-white border border-[#d0d7de] px-3 py-1 rounded text-[#57606a] shadow-sm">
            <Cpu className="w-3.5 h-3.5 text-[#1f883d]" />
            Vitals: OK
          </span>
          <span className="flex items-center gap-1.5 text-xs font-mono bg-white border border-[#d0d7de] px-3 py-1 rounded text-[#57606a] shadow-sm">
            <Activity className="w-3.5 h-3.5 text-[#0969da]" />
            TPS: 1450/s
          </span>
        </div>
      </div>

      {/* Terminal UI */}
      <div className="bg-[#1f2328] border border-[#d0d7de] rounded-lg overflow-hidden shadow-md font-mono text-sm">
        {/* Terminal Header */}
        <div className="bg-[#f6f8fa] px-4 py-2.5 flex items-center justify-between border-b border-[#d0d7de] select-none">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
            <span className="text-xs text-[#57606a] pl-2 font-medium">sre-admin-terminal - bash - 80×24</span>
          </div>
          <span className="text-[11px] text-[#57606a] font-bold">UTC</span>
        </div>

        {/* Terminal Body */}
        <div className="p-4 h-[380px] overflow-y-auto space-y-2 text-xs md:text-sm select-text leading-relaxed bg-[#1f2328]">
          {history.map((line, idx) => {
            let textColor = "text-[#f6f8fa]";
            if (line.type === "input") textColor = "text-sky-300 font-semibold";
            if (line.type === "system") textColor = "text-[#afb8c1]";
            if (line.type === "success") textColor = "text-emerald-300";
            if (line.type === "error") textColor = "text-red-300";
            if (line.type === "warning") textColor = "text-amber-300";

            return (
              <div key={idx} className={`${textColor} whitespace-pre-wrap font-mono`}>
                {line.text}
              </div>
            );
          })}
          {isStreaming && (
            <div className="flex items-center space-x-2 text-[#afb8c1] italic text-xs pt-1">
              <RefreshCw className="w-3.5 h-3.5 animate-spin text-[#afb8c1]" />
              <span>Telemetry streaming active...</span>
            </div>
          )}
          <div ref={terminalEndRef} />
        </div>

        {/* Terminal Input Bar */}
        <div className="border-t border-[#d0d7de] bg-[#24292f] p-3 flex items-center space-x-2.5">
          <span className="text-sky-300 font-bold select-none font-mono">sre-shell:~$</span>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isStreaming}
            className="flex-1 bg-transparent border-none outline-none font-mono text-xs md:text-sm text-white placeholder-zinc-500 disabled:opacity-50"
            placeholder={isStreaming ? "Awaiting telemetry completion..." : "Type 'help' or click a shortcut below..."}
            id="terminal-cli-input"
            autoFocus
          />
        </div>
      </div>

      {/* CLI Quick Shortcuts Box */}
      <div className="bg-white border border-[#d0d7de] rounded-lg p-4 space-y-3 shadow-sm">
        <h4 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
          <HelpCircle className="w-3.5 h-3.5 text-[#0969da]" />
          Terminal Command Shortcuts
        </h4>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => runCommand("about")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-white border border-[#d0d7de] rounded text-xs font-mono text-[#1f2328] hover:bg-[#f6f8fa] hover:border-[#afb8c1] hover:text-[#0969da] disabled:opacity-40 transition flex items-center gap-1.5 shadow-sm"
            id="shortcut-about"
          >
            <Play className="w-3 h-3 text-[#1f883d]" />
            execute: about
          </button>
          <button
            onClick={() => runCommand("experience")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-white border border-[#d0d7de] rounded text-xs font-mono text-[#1f2328] hover:bg-[#f6f8fa] hover:border-[#afb8c1] hover:text-[#0969da] disabled:opacity-40 transition flex items-center gap-1.5 shadow-sm"
            id="shortcut-experience"
          >
            <Play className="w-3 h-3 text-[#1f883d]" />
            execute: experience
          </button>
          <button
            onClick={() => runCommand("skills")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-white border border-[#d0d7de] rounded text-xs font-mono text-[#1f2328] hover:bg-[#f6f8fa] hover:border-[#afb8c1] hover:text-[#0969da] disabled:opacity-40 transition flex items-center gap-1.5 shadow-sm"
            id="shortcut-skills"
          >
            <Play className="w-3 h-3 text-[#1f883d]" />
            execute: skills
          </button>
          <button
            onClick={() => runCommand("logs")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-[#fff8f2] border border-[#fd8c73]/30 rounded text-xs font-mono text-amber-700 hover:bg-[#fff1e5] disabled:opacity-40 transition flex items-center gap-1.5"
            id="shortcut-logs"
          >
            <Activity className="w-3 h-3 text-amber-600" />
            stream: logs telemetry
          </button>
          <button
            onClick={() => runCommand("audit")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-[#ffebe9] border border-[#ffc4c0]/30 rounded text-xs font-mono text-red-700 hover:bg-[#ffe3e0] disabled:opacity-40 transition flex items-center gap-1.5"
            id="shortcut-audit"
          >
            <ShieldAlert className="w-3 h-3 text-red-600" />
            stream: security audit
          </button>
          <button
            onClick={() => runCommand("clear")}
            disabled={isStreaming}
            className="px-3 py-1.5 bg-white border border-[#d0d7de] rounded text-xs font-mono text-[#57606a] hover:bg-[#f6f8fa] hover:text-[#1f2328] disabled:opacity-40 transition shadow-sm"
            id="shortcut-clear"
          >
            clear buffer
          </button>
        </div>
      </div>
    </div>
  );
}
