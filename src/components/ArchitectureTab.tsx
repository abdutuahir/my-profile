import React, { useState } from "react";
import { 
  Network, 
  GitBranch, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Eye, 
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
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#d0d7de] pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#1f2328] flex items-center gap-2 font-sans">
            <Network className="w-5 h-5 text-[#0969da]" /> Enterprise System Architectures
          </h2>
          <p className="text-xs text-[#57606a] mt-1">
            Browse and inspect the structural patterns and technical blueprints designed and maintained by Abdu Tahir Edris.
          </p>
        </div>

        {/* Blueprint Toggle Buttons */}
        <div className="flex flex-wrap bg-[#f6f8fa] border border-[#d0d7de] p-1 rounded-lg">
          <button
            onClick={() => setSelectedDiagram("esb")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all ${
              selectedDiagram === "esb"
                ? "bg-white text-[#0969da] border border-[#d0d7de] shadow-sm"
                : "text-[#57606a] hover:text-[#1f2328] border border-transparent"
            }`}
            id="diagram-btn-esb"
          >
            ESB Integration Flow
          </button>
          <button
            onClick={() => setSelectedDiagram("pipeline")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all ${
              selectedDiagram === "pipeline"
                ? "bg-white text-[#0969da] border border-[#d0d7de] shadow-sm"
                : "text-[#57606a] hover:text-[#1f2328] border border-transparent"
            }`}
            id="diagram-btn-pipeline"
          >
            SRE DevSecOps CI/CD
          </button>
          <button
            onClick={() => setSelectedDiagram("banking")}
            className={`px-3 py-1.5 rounded-md text-xs font-medium font-sans transition-all ${
              selectedDiagram === "banking"
                ? "bg-white text-[#0969da] border border-[#d0d7de] shadow-sm"
                : "text-[#57606a] hover:text-[#1f2328] border border-transparent"
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
        <div className="lg:col-span-8 bg-white border border-[#d0d7de] rounded-lg p-4 md:p-6 shadow-sm flex flex-col justify-between min-h-[440px]">
          {/* Diagrams Render Case */}
          {selectedDiagram === "esb" && (
            <div className="space-y-6" id="diagram-esb-view">
              <div className="flex items-center justify-between border-b border-[#d0d7de] pb-2">
                <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-[#0969da]" />
                  ActiveMatrix TIBCO & API USSD Topology
                </h3>
                <span className="text-[10px] bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/30 px-2 py-0.5 rounded font-mono font-bold">
                  99.99% SLA Match
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Grid / Connection Lines */}
                  <path d="M100 110 h560" stroke="#d0d7de" strokeWidth="2" strokeDasharray="4 4" />
                  
                  {/* Connection Arrows & Pulsing animations */}
                  <path d="M100 110 h60" stroke="#0969da" strokeWidth="2" />
                  <polygon points="160,110 152,106 152,114" fill="#0969da" />
                  
                  <path d="M260 110 h80" stroke="#0969da" strokeWidth="2" />
                  <polygon points="340,110 332,106 332,114" fill="#0969da" />

                  <path d="M480 110 h100" stroke="#0969da" strokeWidth="2" />
                  <polygon points="580,110 572,106 572,114" fill="#0969da" />

                  {/* Node 1: Client Gateway */}
                  <g transform="translate(10, 80)">
                    <rect width="90" height="60" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="45" y="25" fill="#1f2328" textAnchor="middle" fontWeight="bold">USSD / Client</text>
                    <text x="45" y="42" fill="#57606a" textAnchor="middle" fontSize="10">API Channel</text>
                  </g>

                  {/* Node 2: API Gateway */}
                  <g transform="translate(160, 80)">
                    <rect width="100" height="60" rx="6" fill="#ddf4ff" stroke="#0969da" strokeWidth="2" />
                    <text x="50" y="25" fill="#0969da" textAnchor="middle" fontWeight="bold">API Gateway</text>
                    <text x="50" y="42" fill="#57606a" textAnchor="middle" fontSize="10">Auth & Rate Limit</text>
                  </g>

                  {/* Node 3: TIBCO ESB Core */}
                  <g transform="translate(340, 60)">
                    <rect width="140" height="100" rx="8" fill="#fff8f2" stroke="#fd8c73" strokeWidth="2" />
                    <text x="70" y="28" fill="#fd8c73" textAnchor="middle" fontWeight="bold">TIBCO BW Engine</text>
                    <text x="70" y="45" fill="#24292f" textAnchor="middle" fontSize="10">[Transformation ESB]</text>
                    <line x1="15" y1="60" x2="125" y2="60" stroke="#d0d7de" />
                    <text x="70" y="78" fill="#0969da" textAnchor="middle" fontSize="10">JMS Queue EMS</text>
                    <text x="70" y="90" fill="#1a7f37" textAnchor="middle" fontSize="9">Persistent Buffering</text>
                  </g>

                  {/* Node 4: Billing downstreams */}
                  <g transform="translate(580, 45)">
                    <rect width="130" height="50" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="65" y="22" fill="#1f2328" textAnchor="middle" fontWeight="bold">M-Pesa Core</text>
                    <text x="65" y="38" fill="#1a7f37" textAnchor="middle" fontSize="10">Active Transaction</text>
                  </g>

                  {/* Node 5: CRM DB */}
                  <g transform="translate(580, 125)">
                    <rect width="130" height="50" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="65" y="22" fill="#1f2328" textAnchor="middle" fontWeight="bold">CRM & Billing DB</text>
                    <text x="65" y="38" fill="#57606a" textAnchor="middle" fontSize="10">Profile Account Sync</text>
                  </g>

                  {/* Multi paths curves */}
                  <path d="M480 110 q 50 -45 100 -45" stroke="#fd8c73" strokeWidth="1.5" fill="none" />
                  <path d="M480 110 q 50 45 100 45" stroke="#fd8c73" strokeWidth="1.5" fill="none" />

                  {/* Pulsing signal dot animation */}
                  <circle r="4" fill="#fd8c73">
                    <animateMotion dur="4s" repeatCount="indefinite" path="M100 110 h60 M260 110 h80 M480 110 q 50 -45 100 -45" />
                  </circle>
                  <circle r="4" fill="#0969da">
                    <animateMotion dur="3s" repeatCount="indefinite" path="M100 110 h60 M260 110 h80 M480 110 q 50 45 100 45" />
                  </circle>
                </svg>
              </div>
            </div>
          )}

          {selectedDiagram === "pipeline" && (
            <div className="space-y-6" id="diagram-pipeline-view">
              <div className="flex items-center justify-between border-b border-[#d0d7de] pb-2">
                <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4 text-[#1a7f37]" />
                  GitLab CI/CD DevSecOps & SRE Delivery pipeline
                </h3>
                <span className="text-[10px] bg-[#dafbe1] text-[#1a7f37] border border-[#85e89d]/30 px-2 py-0.5 rounded font-mono font-bold">
                  Automated Security Gates
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 180" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Pipeline line */}
                  <path d="M50 90 h660" stroke="#d0d7de" strokeWidth="3" />

                  {/* Pipeline Step 1 */}
                  <g transform="translate(10, 50)">
                    <circle cx="40" cy="40" r="30" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="40" y="44" fill="#1f2328" textAnchor="middle" fontWeight="bold" fontSize="10">GIT PUSH</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Code Commit</text>
                  </g>

                  {/* Pipeline Step 2 */}
                  <g transform="translate(130, 50)">
                    <circle cx="40" cy="40" r="30" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="40" y="44" fill="#24292f" textAnchor="middle" fontWeight="bold" fontSize="10">UNIT TEST</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Maven / JUnit</text>
                  </g>

                  {/* Pipeline Step 3 */}
                  <g transform="translate(250, 50)">
                    <circle cx="40" cy="40" r="30" fill="#ffebe9" stroke="#fd8c73" strokeWidth="2" />
                    <text x="40" y="44" fill="#fd8c73" textAnchor="middle" fontWeight="bold" fontSize="10">SAST SCAN</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Trivy Code Audit</text>
                  </g>

                  {/* Pipeline Step 4 */}
                  <g transform="translate(370, 50)">
                    <circle cx="40" cy="40" r="30" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="40" y="44" fill="#24292f" textAnchor="middle" fontWeight="bold" fontSize="10">BUILD IMG</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Docker Build</text>
                  </g>

                  {/* Pipeline Step 5 */}
                  <g transform="translate(490, 50)">
                    <circle cx="40" cy="40" r="30" fill="#ddf4ff" stroke="#0969da" strokeWidth="2" />
                    <text x="40" y="44" fill="#0969da" textAnchor="middle" fontWeight="bold" fontSize="10">AUDIT IMG</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Image Vulnerability</text>
                  </g>

                  {/* Pipeline Step 6 */}
                  <g transform="translate(610, 50)">
                    <circle cx="40" cy="40" r="30" fill="#dafbe1" stroke="#1f883d" strokeWidth="3" />
                    <text x="40" y="44" fill="#1a7f37" textAnchor="middle" fontWeight="bold" fontSize="10">K8S DEPLOY</text>
                    <text x="40" y="92" fill="#57606a" textAnchor="middle" fontSize="10">Helm / Rollout</text>
                  </g>

                  {/* Animated Signal pulse passing through CI/CD */}
                  <circle r="5" fill="#1a7f37">
                    <animateMotion dur="5s" repeatCount="indefinite" path="M50 90 h660" />
                  </circle>
                </svg>
              </div>
            </div>
          )}

          {selectedDiagram === "banking" && (
            <div className="space-y-6" id="diagram-banking-view">
              <div className="flex items-center justify-between border-b border-[#d0d7de] pb-2">
                <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#1a7f37]" />
                  Hijra Bank secure payment integration gateway
                </h3>
                <span className="text-[10px] bg-[#fff8f2] text-amber-700 border border-[#fd8c73]/30 px-2 py-0.5 rounded font-mono font-bold">
                  Zero Trust Architecture
                </span>
              </div>

              {/* Responsive SVG Flowchart */}
              <div className="relative w-full overflow-x-auto py-2 flex justify-center bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 shadow-inner">
                <svg viewBox="0 0 760 220" className="w-full max-w-2xl text-xs font-mono" fill="none">
                  {/* Connecting lines */}
                  <path d="M120 110 h520" stroke="#d0d7de" strokeWidth="2" />
                  <path d="M380 110 v-60 h200" stroke="#d0d7de" strokeWidth="2" fill="none" />
                  <path d="M380 110 v60 h200" stroke="#d0d7de" strokeWidth="2" fill="none" />

                  {/* Connection Arrows */}
                  <polygon points="170,110 162,106 162,114" fill="#0969da" />
                  <polygon points="320,110 312,106 312,114" fill="#0969da" />
                  <polygon points="580,50 572,46 572,54" fill="#1a7f37" />
                  <polygon points="580,110 572,106 572,114" fill="#1a7f37" />
                  <polygon points="580,170 572,166 572,174" fill="#1a7f37" />

                  {/* Node 1: Core Banking host */}
                  <g transform="translate(10, 80)">
                    <rect width="110" height="60" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="55" y="25" fill="#1f2328" textAnchor="middle" fontWeight="bold">Core Banking</text>
                    <text x="55" y="42" fill="#57606a" textAnchor="middle" fontSize="10">Main System Ledger</text>
                  </g>

                  {/* Node 2: Secure API Interceptor WSO2 */}
                  <g transform="translate(170, 70)">
                    <rect width="150" height="80" rx="6" fill="#ddf4ff" stroke="#0969da" strokeWidth="2" />
                    <text x="75" y="25" fill="#0969da" textAnchor="middle" fontWeight="bold">WSO2 API Manager</text>
                    <text x="75" y="42" fill="#24292f" textAnchor="middle" fontSize="10">Token validation</text>
                    <line x1="15" y1="52" x2="135" y2="52" stroke="#d0d7de" />
                    <text x="75" y="68" fill="#0969da" textAnchor="middle" fontSize="9">SSL Authentication</text>
                  </g>

                  {/* Node 3: Router */}
                  <circle cx="380" cy="110" r="14" fill="#f6f8fa" stroke="#d0d7de" strokeWidth="2" />
                  <text x="380" y="114" fill="#57606a" textAnchor="middle" fontSize="10" fontWeight="bold">R</text>

                  {/* Downstream Channel A: Payment Gateways */}
                  <g transform="translate(580, 20)">
                    <rect width="150" height="50" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="75" y="22" fill="#1f2328" textAnchor="middle" fontWeight="bold">Payment Gateways</text>
                    <text x="75" y="38" fill="#57606a" textAnchor="middle" fontSize="10">EthSwitch, Card, Visa</text>
                  </g>

                  {/* Downstream Channel B: Telecom operators */}
                  <g transform="translate(580, 85)">
                    <rect width="150" height="50" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="75" y="22" fill="#1f2328" textAnchor="middle" fontWeight="bold">Telecom Operators</text>
                    <text x="75" y="38" fill="#57606a" textAnchor="middle" fontSize="10">Safaricom & Ethio tel</text>
                  </g>

                  {/* Downstream Channel C: Financial third-parties */}
                  <g transform="translate(580, 150)">
                    <rect width="150" height="50" rx="6" fill="white" stroke="#d0d7de" strokeWidth="2" />
                    <text x="75" y="22" fill="#1f2328" textAnchor="middle" fontWeight="bold">Partner APIs</text>
                    <text x="75" y="38" fill="#57606a" textAnchor="middle" fontSize="10">External API Integrations</text>
                  </g>

                  {/* Transaction pulse animation */}
                  <circle r="4.5" fill="#0969da">
                    <animateMotion dur="4.2s" repeatCount="indefinite" path="M120 110 h520" />
                  </circle>
                  <circle r="4.5" fill="#1a7f37">
                    <animateMotion dur="3.5s" repeatCount="indefinite" path="M120 110 h260 v-60 h200" />
                  </circle>
                </svg>
              </div>
            </div>
          )}

          {/* SRE Blueprint Footnote */}
          <div className="mt-4 pt-3 border-t border-[#d0d7de] flex items-start gap-2 text-xs text-[#57606a] bg-[#f6f8fa] p-3 rounded-lg border border-[#d0d7de] shadow-inner">
            <Info className="w-4 h-4 text-[#0969da] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Active system nodes map to high-availability targets, incorporating centralized health alerts, automatic queue scaling, and military-grade encryption models built across Safaricom, Hijra Bank, and INSA.
            </p>
          </div>
        </div>

        {/* RIGHT PANEL: Architectural Details & Key Components (4 cols) */}
        <div className="lg:col-span-4 bg-white border border-[#d0d7de] rounded-lg p-5 space-y-5 shadow-sm">
          <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider border-b border-[#d0d7de] pb-2.5">
            Architecture Highlights
          </h3>

          {selectedDiagram === "esb" && (
            <div className="space-y-4" id="esb-inspect-content">
              <div>
                <h4 className="text-xs font-bold font-mono text-[#1f2328] flex items-center gap-1.5 uppercase">
                  <Cpu className="w-3.5 h-3.5 text-[#0969da]" /> Core Middleware Routing
                </h4>
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  The architecture leverages TIBCO BusinessWorks container pipelines to transform raw legacy USSD protocols (XML structures) into optimized JSON payloads for internal microservice billing.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#1a7f37] flex items-center gap-1.5 uppercase">
                  <Database className="w-3.5 h-3.5" /> JMS Queue EMS Buffering
                </h4>
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  By placing a TIBCO Enterprise Message Service (EMS) JMS Queue ahead of the billing and customer databases, we ensure 100% request persistence and buffer traffic spikes during peak USSD transaction hours.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#fd8c73] flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> Channel Integrations
                </h4>
                <ul className="text-xs text-[#57606a] mt-1.5 space-y-1 pl-4 list-disc marker:text-[#fd8c73]">
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
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  SAST scanner checks the application codebase during the commit phase for insecure coding practices, while container scanners evaluate final Docker images prior to push.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#1a7f37] flex items-center gap-1.5 uppercase">
                  <Server className="w-3.5 h-3.5" /> Kubernetes & Helm orchestration
                </h4>
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  Helm charts organize resource deployment parameters, enabling rolling pod rollouts, SLA liveness monitors, and automated scaling based on Prometheus threshold signals.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#0969da] flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> CI/CD Automation Stages
                </h4>
                <ul className="text-xs text-[#57606a] mt-1.5 space-y-1 pl-4 list-disc marker:text-[#0969da]">
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
                <h4 className="text-xs font-bold font-mono text-[#0969da] flex items-center gap-1.5 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> WSO2 API Gateway Security
                </h4>
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  The API gateway enforces end-to-end TLS encryption, verifies security tokens on inbound transactions, and manages strict access rules for all banking endpoints.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#fd8c73] flex items-center gap-1.5 uppercase">
                  <Cpu className="w-3.5 h-3.5" /> Micro-Service Routing Mesh
                </h4>
                <p className="text-xs text-[#57606a] mt-1 leading-relaxed">
                  The internal routing infrastructure distributes requests to downstreams (Safaricom/Ethio Tel SMS, EthSwitch payment clearing channels, credit cards processing) safely.
                </p>
              </div>
              <div>
                <h4 className="text-xs font-bold font-mono text-[#1a7f37] flex items-center gap-1.5 uppercase">
                  <ArrowRight className="w-3.5 h-3.5" /> Core Payment targets
                </h4>
                <ul className="text-xs text-[#57606a] mt-1.5 space-y-1 pl-4 list-disc marker:text-[#1a7f37]">
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
