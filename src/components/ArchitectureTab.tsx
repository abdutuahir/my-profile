import React, { useState } from "react";
import { 
  Network, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Info, 
  ArrowRight,
  Database,
  Server
} from "lucide-react";

export default function ArchitectureTab() {
  const [selectedDiagram, setSelectedDiagram] = useState<"esb" | "pipeline" | "banking">("esb");

  return (
    <div className="py-6 space-y-6" id="architecture-tab-container">
      {/* Tab Header Description */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gh-border pb-4">
        <div>
          <h2 className="text-xl font-bold text-gh-text flex items-center gap-2 font-sans">
            <Network className="w-5 h-5 text-gh-accent" /> Enterprise System Architectures
          </h2>
          <p className="text-xs text-gh-muted mt-1">
            Browse and inspect the structural patterns and technical blueprints designed and maintained by Abdu Tahir Edris.
          </p>
        </div>

        {/* Blueprint Toggle Buttons */}
        <div className="flex flex-wrap bg-gh-bg border border-gh-border p-1 rounded-lg">
          <button
            onClick={() => setSelectedDiagram("esb")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all cursor-pointer ${
              selectedDiagram === "esb"
                ? "bg-gh-card text-gh-accent border border-gh-border shadow-sm"
                : "text-gh-muted hover:text-gh-text border border-transparent"
            }`}
            id="diagram-btn-esb"
          >
            ESB Integration Flow
          </button>
          <button
            onClick={() => setSelectedDiagram("pipeline")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all cursor-pointer ${
              selectedDiagram === "pipeline"
                ? "bg-gh-card text-gh-accent border border-gh-border shadow-sm"
                : "text-gh-muted hover:text-gh-text border border-transparent"
            }`}
            id="diagram-btn-pipeline"
          >
            SRE DevSecOps CI/CD
          </button>
          <button
            onClick={() => setSelectedDiagram("banking")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all cursor-pointer ${
              selectedDiagram === "banking"
                ? "bg-gh-card text-gh-accent border border-gh-border shadow-sm"
                : "text-gh-muted hover:text-gh-text border border-transparent"
            }`}
            id="diagram-btn-banking"
          >
            Banking Payment Mesh
          </button>
        </div>
      </div>

      {/* Main Showcase Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="diagrams-grid">
        {/* LEFT PANEL: SVG Diagram Area (8 cols) */}
        <div className="lg:col-span-8 bg-gh-card border border-gh-border rounded-lg p-4 md:p-6 shadow-sm flex flex-col justify-between min-h-[440px]">
          {/* Diagrams Render Case */}
          {selectedDiagram === "esb" && (
            <div className="space-y-6" id="diagram-esb-view">
              <div className="flex items-center justify-between border-b border-gh-border pb-2">
                <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-gh-accent" />
                  ActiveMatrix TIBCO & API USSD Topology
                </h3>
                <span className="text-[10px] bg-gh-accent-light-bg text-gh-accent border border-gh-accent-light-border px-2 py-0.5 rounded font-mono font-bold">
                  99.99% SLA Match
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-gh-bg border border-gh-border rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Grid / Connection Lines */}
                  <path d="M100 110 h560" stroke="var(--gh-border)" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Connection Arrows & Pulsing animations */}
                  <path d="M100 110 h60" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="160,110 152,106 152,114" fill="var(--gh-accent)" />
                  
                  <path d="M260 110 h80" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="340,110 332,106 332,114" fill="var(--gh-accent)" />

                  <path d="M480 110 h100" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="580,110 572,106 572,114" fill="var(--gh-accent)" />

                  <path d="M680 110 h30" stroke="var(--gh-success)" strokeWidth="2" />
                  <polygon points="710,110 702,106 702,114" fill="var(--gh-success)" />

                  {/* Nodes */}
                  {/* Node 1: Mobile Client */}
                  <g>
                    <rect x="10" y="80" width="90" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="55" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Mobile Client</text>
                    <text x="55" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">(USSD *804#)</text>
                  </g>

                  {/* Node 2: USSD Gateway */}
                  <g>
                    <rect x="160" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="210" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">USSD Gateway</text>
                    <text x="210" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">XML over HTTP</text>
                  </g>

                  {/* Node 3: TIBCO ActiveMatrix */}
                  <g>
                    <rect x="340" y="65" width="140" height="90" rx="8" fill="var(--gh-card)" stroke="var(--gh-accent)" strokeWidth="2" />
                    <text x="410" y="92" textAnchor="middle" className="fill-gh-text text-[11px] font-bold">TIBCO ESB</text>
                    <text x="410" y="108" textAnchor="middle" className="fill-gh-accent text-[9px] font-mono">ActiveMatrix BW 6</text>
                    <text x="410" y="124" textAnchor="middle" className="fill-gh-muted text-[9px]">JSON transformation</text>
                    <text x="410" y="138" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">[XML ➜ JSON]</text>
                  </g>

                  {/* Node 4: Spring Boot Billing */}
                  <g>
                    <rect x="580" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="630" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Billing Service</text>
                    <text x="630" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">Spring Web Services</text>
                  </g>

                  {/* Downstream database */}
                  <g>
                    <path d="M710,95 C710,90 750,90 750,95 L750,125 C750,130 710,130 710,125 Z" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <path d="M710,95 C710,100 750,100 750,95" fill="none" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <path d="M710,102 C710,107 750,107 750,102" fill="none" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="730" y="117" textAnchor="middle" className="fill-gh-text text-[9px] font-bold font-mono">DB</text>
                  </g>
                </svg>
              </div>
            </div>
          )}

          {selectedDiagram === "pipeline" && (
            <div className="space-y-6" id="diagram-pipeline-view">
              <div className="flex items-center justify-between border-b border-gh-border pb-2">
                <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#fd8c73]" />
                  Secure DevSecOps & Helm deployment pipeline
                </h3>
                <span className="text-[10px] bg-gh-alert-bg text-gh-alert-text border border-gh-alert-border px-2 py-0.5 rounded font-mono font-bold">
                  Zero Trust Verified
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-gh-bg border border-gh-border rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Connection Lines */}
                  <path d="M100 110 h560" stroke="var(--gh-border)" strokeWidth="2" strokeDasharray="4 4" />
                  
                  <path d="M100 110 h50" stroke="#cf222e" strokeWidth="2" />
                  <polygon points="150,110 142,106 142,114" fill="#cf222e" />
                  
                  <path d="M250 110 h50" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="300,110 292,106 292,114" fill="var(--gh-accent)" />

                  <path d="M410 110 h80" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="490,110 482,106 482,114" fill="var(--gh-accent)" />

                  <path d="M590 110 h50" stroke="var(--gh-success)" strokeWidth="2" />
                  <polygon points="640,110 632,106 632,114" fill="var(--gh-success)" />

                  {/* Nodes */}
                  {/* Node 1: GitLab Commit */}
                  <g>
                    <rect x="10" y="80" width="90" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="55" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Code Commit</text>
                    <text x="55" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">GitLab / Push</text>
                  </g>

                  {/* Node 2: SAST Security scan */}
                  <g>
                    <rect x="150" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="#cf222e" strokeWidth="1.5" />
                    <text x="200" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">SAST Security</text>
                    <text x="200" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">SonarQube / Snyk</text>
                  </g>

                  {/* Node 3: GitLab Runner Docker Builder */}
                  <g>
                    <rect x="300" y="65" width="110" height="90" rx="8" fill="var(--gh-card)" stroke="var(--gh-accent)" strokeWidth="2" />
                    <text x="355" y="92" textAnchor="middle" className="fill-gh-text text-[11px] font-bold">Docker Build</text>
                    <text x="355" y="108" textAnchor="middle" className="fill-gh-accent text-[9px] font-mono">GitLab Runner</text>
                    <text x="355" y="124" textAnchor="middle" className="fill-gh-muted text-[9px]">Trivy Registry scan</text>
                    <text x="355" y="138" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">Audit Gate pass</text>
                  </g>

                  {/* Node 4: Helm chart assembly */}
                  <g>
                    <rect x="490" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="540" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Helm Assembly</text>
                    <text x="540" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">SLA Parameters</text>
                  </g>

                  {/* Node 5: Production Kubernetes Cluster */}
                  <g>
                    <rect x="640" y="75" width="110" height="70" rx="6" fill="var(--gh-card)" stroke="var(--gh-success)" strokeWidth="1.5" />
                    <text x="695" y="100" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Prod Kubernetes</text>
                    <text x="695" y="117" textAnchor="middle" className="fill-gh-success text-[9px] font-mono">Continuous Deploy</text>
                    <text x="695" y="130" textAnchor="middle" className="fill-gh-muted text-[8px] font-mono">Prometheus Linked</text>
                  </g>
                </svg>
              </div>
            </div>
          )}

          {selectedDiagram === "banking" && (
            <div className="space-y-6" id="diagram-banking-view">
              <div className="flex items-center justify-between border-b border-gh-border pb-2">
                <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-gh-accent" />
                  Dual-Gate Banking Payment Mesh
                </h3>
                <span className="text-[10px] bg-gh-alert-bg text-gh-alert-text border border-gh-alert-border px-2 py-0.5 rounded font-mono font-bold">
                  IEEE 29148 Standard
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-gh-bg border border-gh-border rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Grid Lines */}
                  <path d="M100 110 h560" stroke="var(--gh-border)" strokeWidth="2" strokeDasharray="4 4" />
                  
                  <path d="M110 110 h60" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="170,110 162,106 162,114" fill="var(--gh-accent)" />
                  
                  <path d="M280 110 h60" stroke="#3fb950" strokeWidth="2" />
                  <polygon points="340,110 332,106 332,114" fill="#3fb950" />

                  <path d="M470 110 h80" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="550,110 542,106 542,114" fill="var(--gh-accent)" />

                  <path d="M650 110 h40" stroke="var(--gh-accent)" strokeWidth="2" />
                  <polygon points="690,110 682,106 682,114" fill="var(--gh-accent)" />

                  {/* Nodes */}
                  {/* Node 1: Core Portal */}
                  <g>
                    <rect x="10" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="60" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Ethio Tele/Safaricom</text>
                    <text x="60" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">Mobile Inbound</text>
                  </g>

                  {/* Node 2: API Gateway */}
                  <g>
                    <rect x="170" y="80" width="110" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-accent)" strokeWidth="1.5" />
                    <text x="225" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">WSO2 Gateway</text>
                    <text x="225" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">Dual Auth / TLS</text>
                  </g>

                  {/* Node 3: Spring Boot Routing Mesh */}
                  <g>
                    <rect x="340" y="65" width="130" height="90" rx="8" fill="var(--gh-card)" stroke="#3fb950" strokeWidth="2" />
                    <text x="405" y="92" textAnchor="middle" className="fill-gh-text text-[11px] font-bold">Routing Mesh</text>
                    <text x="405" y="108" textAnchor="middle" className="fill-gh-success text-[9px] font-mono">Spring Cloud / Java</text>
                    <text x="405" y="124" textAnchor="middle" className="fill-gh-muted text-[9px]">Validation check</text>
                    <text x="405" y="138" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">IEEE Spec Audited</text>
                  </g>

                  {/* Node 4: EthSwitch Central Clearing */}
                  <g>
                    <rect x="550" y="80" width="100" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="600" y="105" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">EthSwitch</text>
                    <text x="600" y="122" textAnchor="middle" className="fill-gh-muted text-[9px] font-mono">National Clearing</text>
                  </g>

                  {/* Node 5: Banking ledger */}
                  <g>
                    <rect x="690" y="80" width="60" height="60" rx="6" fill="var(--gh-card)" stroke="var(--gh-border)" strokeWidth="1.5" />
                    <text x="720" y="110" textAnchor="middle" className="fill-gh-text text-[10px] font-bold">Ledger</text>
                    <text x="720" y="124" textAnchor="middle" className="fill-gh-muted text-[8px] font-mono">DB Log</text>
                  </g>
                </svg>
              </div>
            </div>
          )}

          {/* SRE Blueprint Footnote */}
          <div className="mt-4 pt-3 border-t border-gh-border flex items-start gap-2 text-xs text-gh-muted bg-gh-bg p-3 rounded-lg border border-gh-border shadow-inner">
            <Info className="w-4 h-4 text-gh-accent shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Active system nodes map to high-availability targets, incorporating centralized health alerts, automatic queue scaling, and military-grade encryption models built across Safaricom, Hijra Bank, and INSA.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: Architectural Details & Key Components (4 cols) */}
        <div className="lg:col-span-4 bg-gh-card border border-gh-border rounded-lg p-5 space-y-5 shadow-sm">
          <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider border-b border-gh-border pb-2.5">
            Architecture Highlights
          </h3>

          {selectedDiagram === "esb" && (
            <div className="space-y-4" id="esb-inspect-content">
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-text flex items-center gap-1.5 uppercase">
                  <Cpu className="w-3.5 h-3.5 text-gh-accent" /> Core Middleware Routing
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  The architecture leverages TIBCO BusinessWorks container pipelines to transform raw legacy USSD protocols (XML structures) into optimized JSON payloads for internal microservice billing.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-success flex items-center gap-1.5 uppercase">
                  <Database className="w-3.5 h-3.5" /> JMS Queue EMS Buffering
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  By placing a TIBCO Enterprise Message Service (EMS) JMS Queue ahead of the billing and customer databases, we ensure 100% request persistence and buffer traffic spikes during peak USSD transaction hours.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#fd8c73] flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> Channel Integrations
                </h4>
                <ul className="text-xs text-gh-muted mt-1.5 space-y-1 pl-4 list-disc marker:text-[#fd8c73]">
                  <li>M-Pesa Core Transaction gateways</li>
                  <li>CRM billing and accounting engines</li>
                  <li>eKYC national database synchronization</li>
                  <li>External partner APIs & payment paths</li>
                </ul>
              </div>
            </div>
          )}

          {selectedDiagram === "pipeline" && (
            <div className="space-y-4" id="pipeline-inspect-content">
              <div>
                <h4 className="text-xs font-bold font-mono text-[#fd8c73] flex items-center gap-1.5 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> Automated Security scanning
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  SAST scanner checks the application codebase during the commit phase for insecure coding practices, while container scanners evaluate final Docker images prior to push.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-success flex items-center gap-1.5 uppercase">
                  <Server className="w-3.5 h-3.5" /> Kubernetes & Helm orchestration
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  Helm charts organize resource deployment parameters, enabling rolling pod rollouts, SLA liveness monitors, and automated scaling based on Prometheus threshold signals.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-accent flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> CI/CD Automation Stages
                </h4>
                <ul className="text-xs text-gh-muted mt-1.5 space-y-1 pl-4 list-disc marker:text-gh-accent">
                  <li>Unit test reports in Junit format</li>
                  <li>Automated code metrics via SonarQube</li>
                  <li>Containerized deployments in Helm clusters</li>
                  <li>Real-time SRE tracing endpoints</li>
                </ul>
              </div>
            </div>
          )}

          {selectedDiagram === "banking" && (
            <div className="space-y-4" id="banking-inspect-content">
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-accent flex items-center gap-1.5 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> WSO2 API Gateway Security
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  The API gateway enforces end-to-end TLS encryption, verifies security tokens on inbound transactions, and manages strict access rules for all banking endpoints.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#fd8c73] flex items-center gap-1.5 uppercase">
                  <Cpu className="w-3.5 h-3.5" /> Micro-Service Routing Mesh
                </h4>
                <p className="text-xs text-gh-muted mt-1 leading-relaxed">
                  The internal routing infrastructure distributes requests to downstreams (Safaricom/Ethio Tel SMS, EthSwitch payment clearing channels, credit cards processing) safely.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-gh-success flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> Core Payment targets
                </h4>
                <ul className="text-xs text-gh-muted mt-1.5 space-y-1 pl-4 list-disc marker:text-gh-success">
                  <li>EthSwitch clearing network</li>
                  <li>Safaricom USSD & callback endpoints</li>
                  <li>Visa/Mastercard gateway APIs</li>
                  <li>Core banking database ledgers</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
