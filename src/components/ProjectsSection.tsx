import React, { useState } from "react";
import { 
  Briefcase, 
  Terminal, 
  Cpu, 
  Shield, 
  Activity, 
  Clock, 
  Zap, 
  CheckCircle, 
  X, 
  ExternalLink,
  Lock,
  Workflow,
  Sparkles
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: "sre" | "integration" | "security";
  sla: string;
  throughput: string;
  mttr: string;
  status: "active" | "completed";
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: "m-pesa-integration",
    title: "Safaricom M-Pesa & Billing ESB Gateway",
    subtitle: "National-scale telecommunication integration orchestrator",
    category: "integration",
    sla: "99.99%",
    throughput: "12,000+ TPS",
    mttr: "< 10 mins",
    status: "active",
    summary: "High-volume, national-scale enterprise service bus linking CRM, charging systems, national eKYC database, and third-party commercial bank channels to M-Pesa core.",
    challenge: "High latency spikes during payroll cycles when transaction requests exceeded 8,000 TPS, causing timeouts and race conditions between eKYC checks and payment confirmations.",
    solution: "Re-architected the TIBCO BusinessWorks integration layer using parallel async routing queues. Introduced localized Redis cache states for the eKYC validation step and designed backpressure-controlled worker pools in Kubernetes.",
    impact: [
      "Reduced peak-hour response latency by 58% (from 4.2s to 1.7s).",
      "Sustained 100% processing reliability at peaks of 12,000+ TPS.",
      "Successfully met and secured 99.99% operational SLA requirements."
    ],
    techStack: ["TIBCO BusinessWorks", "Spring Boot", "Kubernetes", "Redis", "Prometheus", "GitLab CI"]
  },
  {
    id: "gov-cloud-orchestration",
    title: "INSA Secure Government Cloud Provisioner",
    subtitle: "Military-grade multi-tenant hosting with zero-trust design",
    category: "security",
    sla: "99.999%",
    throughput: "Top-Secret",
    mttr: "Instant Self-Healing",
    status: "completed",
    summary: "Built secure hypervisor orchestration and automated container deployment services for sensitive government nodes, complying with military safety policies.",
    challenge: "The cloud platform required complete logical microsegmentation, audit compliance with rigid cryptographic guidelines, and real-time resistance to privilege escalation attempts.",
    solution: "Developed custom secure virtualization APIs in Python and C++ featuring hardened guest isolation boundaries. Automated container deployment pipelines integrated with real-time OWASP-oriented fuzzers and static vulnerability scanning gates.",
    impact: [
      "Passed exhaustive security audits with 100% compliance.",
      "Achieved sub-second container isolation teardowns on system breaches.",
      "Provided secure workspace hosting for over 15 high-level government agencies."
    ],
    techStack: ["Python", "C++", "Docker", "KVM Hypervisor", "Kali Linux", "OWASP Audits", "mTLS"]
  },
  {
    id: "ekyc-payments-engine",
    title: "Sub-Second eKYC Identity Resolver",
    subtitle: "Federated validation and microservices bridge",
    category: "sre",
    sla: "99.95%",
    throughput: "3,500+ TPS",
    mttr: "< 15 mins",
    status: "active",
    summary: "A central payment-gateways verification portal that facilitates identity matching against national registry bureaus during user registration.",
    challenge: "External identity registry downtime frequently stalled banking and mobile activations, prompting long timeouts and manual retry overhead.",
    solution: "Implemented an event-driven circuit breaker design using Spring Boot and RabbitMQ. Added a high-availability fallback ledger that caches secure cryptographically signed state validation checks locally.",
    impact: [
      "Eliminated system hangs on registry failure, introducing immediate smart offline fallbacks.",
      "Secured safe transaction caching with zero-loss data recovery.",
      "Optimized typical identity resolution times to less than 240 milliseconds."
    ],
    techStack: ["Java", "Spring Boot", "RabbitMQ", "PostgreSQL", "WSO2 API Manager", "Grafana"]
  },
  {
    id: "core-banking-mesh",
    title: "WSO2 High-Availability API Mesh",
    subtitle: "Payment orchestration layer and secure telemetry mesh",
    category: "integration",
    sla: "99.99%",
    throughput: "5,000+ TPS",
    mttr: "< 5 mins",
    status: "active",
    summary: "Designed and configured a cluster of high-availability API gateways handling critical inter-bank clearing transactions.",
    challenge: "Mitigating man-in-the-middle attacks and tracking trace latency across multiple distributed ledger networks.",
    solution: "Enforced mandatory end-to-end mutual TLS (mTLS) and token-level rate limiting on the WSO2 Gateway. Deployed Jaeger distributed tracing and custom Grafana alerting rules to capture anomaly spikes in real-time.",
    impact: [
      "Secured complete PCI-DSS compliance across all API transaction vectors.",
      "Reduced tracing overhead from hours to single-click dashboards.",
      "Enabled instant threat-blocking alerts to trigger automated firewall policies."
    ],
    techStack: ["WSO2 API Manager", "mTLS", "Jaeger Tracing", "Grafana Alerting", "Linux Scripting"]
  }
];

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "sre": return <Cpu className="w-4 h-4 text-emerald-500" />;
      case "security": return <Shield className="w-4 h-4 text-[#cf222e]" />;
      default: return <Workflow className="w-4 h-4 text-[#0969da]" />;
    }
  };

  const getCategoryBadgeColor = (category: string) => {
    switch (category) {
      case "sre": return "bg-emerald-500/10 text-emerald-600 border-emerald-500/20";
      case "security": return "bg-rose-500/10 text-rose-600 border-rose-500/20";
      default: return "bg-sky-500/10 text-sky-600 border-sky-500/20";
    }
  };

  return (
    <div className="space-y-6 pt-4 page-break-avoid" id="projects-section">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gh-border pb-3">
        <h3 className="text-lg font-bold text-gh-text flex items-center gap-2 font-sans">
          <Briefcase className="w-5 h-5 text-gh-accent" /> Featured SRE & Integration Projects
        </h3>
        <span className="text-xs text-gh-muted font-mono">Click a card to launch SRE blueprint telemetry</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project) => (
          <div 
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="group cursor-pointer bg-gh-card border border-gh-border hover:border-gh-accent/60 p-5 rounded-lg shadow-sm transition-all duration-300 relative overflow-hidden flex flex-col justify-between hover:shadow-md"
            id={`project-card-${project.id}`}
          >
            {/* Pulsing state marker */}
            <div className="absolute top-4 right-4 flex items-center space-x-1.5">
              <span className={`w-2 h-2 rounded-full ${project.status === "active" ? "bg-emerald-500 animate-pulse" : "bg-blue-400"}`}></span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-gh-muted">{project.status}</span>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className={`px-2 py-0.5 text-[10px] font-semibold rounded-full border ${getCategoryBadgeColor(project.category)}`}>
                  {project.category.toUpperCase()}
                </span>
                <span className="text-[10px] text-gh-muted font-mono">SLA: {project.sla}</span>
              </div>

              <h4 className="font-bold text-base text-gh-text group-hover:text-gh-accent transition-colors duration-200 line-clamp-1">{project.title}</h4>
              <p className="text-xs text-gh-muted font-mono mt-0.5 mb-3 line-clamp-1">{project.subtitle}</p>
              <p className="text-xs text-gh-text/80 line-clamp-2 leading-relaxed">{project.summary}</p>
            </div>

            <div className="mt-4 pt-3 border-t border-gh-border/60 flex flex-wrap gap-1.5 items-center justify-between">
              <div className="flex flex-wrap gap-1">
                {project.techStack.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-[9px] px-1.5 py-0.5 bg-gh-tag-bg text-gh-text border border-gh-border/60 rounded font-mono">
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 3 && (
                  <span className="text-[9px] px-1.5 py-0.5 text-gh-muted font-mono">+{project.techStack.length - 3}</span>
                )}
              </div>
              <span className="text-[10px] text-gh-accent group-hover:underline flex items-center gap-1 font-mono">
                Inspect SLA <Zap className="w-3 h-3" />
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* SRE Project Inspection Portal - Slidover/Modal overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto no-print" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            {/* Backdrop overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-[#090d13]/70 backdrop-blur-sm transition-opacity"
            />

            {/* Modal positioning */}
            <div className="flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
              <motion.div 
                initial={{ scale: 0.95, opacity: 0, y: 15 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 15 }}
                className="relative transform overflow-hidden rounded-lg bg-gh-card border border-gh-border p-6 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl max-h-[90vh] overflow-y-auto flex flex-col"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-gh-muted hover:text-gh-text p-1 hover:bg-gh-tag-bg rounded-lg transition"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Header info */}
                <div className="border-b border-gh-border pb-4 pr-8">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${getCategoryBadgeColor(selectedProject.category)}`}>
                      {selectedProject.category.toUpperCase()}
                    </span>
                    <span className="flex items-center space-x-1.5 text-xs text-gh-muted">
                      <span className={`w-1.5 h-1.5 rounded-full ${selectedProject.status === "active" ? "bg-emerald-500 animate-pulse" : "bg-blue-400"}`}></span>
                      <span className="font-mono">{selectedProject.status.toUpperCase()} DEPLOYMENT</span>
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gh-text leading-tight">{selectedProject.title}</h3>
                  <p className="text-xs md:text-sm text-gh-muted font-mono">{selectedProject.subtitle}</p>
                </div>

                {/* SRE Telemetry Stats bar */}
                <div className="grid grid-cols-3 gap-3 my-4 bg-gh-bg border border-gh-border rounded-lg p-3">
                  <div className="text-center border-r border-gh-border/60">
                    <span className="text-[9px] text-gh-muted font-mono uppercase block">Target SLA Availability</span>
                    <span className="text-lg font-extrabold text-emerald-500 font-mono flex items-center justify-center gap-1">
                      <Activity className="w-3.5 h-3.5" /> {selectedProject.sla}
                    </span>
                  </div>
                  <div className="text-center border-r border-gh-border/60">
                    <span className="text-[9px] text-gh-muted font-mono uppercase block">Max Sustained Load</span>
                    <span className="text-lg font-extrabold text-gh-accent font-mono flex items-center justify-center gap-1">
                      <Zap className="w-3.5 h-3.5" /> {selectedProject.throughput}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className="text-[9px] text-gh-muted font-mono uppercase block">SRE Incidents MTTR</span>
                    <span className="text-lg font-extrabold text-amber-500 font-mono flex items-center justify-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> {selectedProject.mttr}
                    </span>
                  </div>
                </div>

                {/* Content details */}
                <div className="space-y-4 flex-1 pr-1 text-xs md:text-sm text-gh-text">
                  <div>
                    <h5 className="font-bold text-gh-text mb-1 font-sans text-sm flex items-center gap-1.5">
                      <Terminal className="w-4 h-4 text-gh-accent" /> Project Overview
                    </h5>
                    <p className="leading-relaxed text-gh-text/90 bg-gh-bg/30 p-2.5 rounded border border-gh-border/50">
                      {selectedProject.summary}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-bold text-rose-600 mb-1 font-sans text-sm flex items-center gap-1.5">
                        <Lock className="w-4 h-4" /> Operational Challenge
                      </h5>
                      <p className="leading-relaxed text-gh-text/80 bg-rose-500/5 p-3 rounded border border-rose-500/10 min-h-[100px]">
                        {selectedProject.challenge}
                      </p>
                    </div>

                    <div>
                      <h5 className="font-bold text-emerald-600 mb-1 font-sans text-sm flex items-center gap-1.5">
                        <CheckCircle className="w-4 h-4" /> SRE & Architect Solution
                      </h5>
                      <p className="leading-relaxed text-gh-text/80 bg-emerald-500/5 p-3 rounded border border-emerald-500/10 min-h-[100px]">
                        {selectedProject.solution}
                      </p>
                    </div>
                  </div>

                  <div>
                    <h5 className="font-bold text-gh-text mb-1.5 font-sans text-sm flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-amber-500" /> Business & Technical Impact
                    </h5>
                    <ul className="space-y-1.5 pl-4 list-disc text-gh-text/90 marker:text-gh-accent">
                      {selectedProject.impact.map((imp, idx) => (
                        <li key={idx} className="leading-relaxed">{imp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-bold text-gh-text mb-2 font-sans text-sm">Deployment & Audit Tech Stack</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="text-[11px] px-2.5 py-1 bg-gh-tag-bg text-gh-text border border-gh-border rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gh-border flex justify-end space-x-2">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 text-xs font-semibold bg-gh-tag-bg text-gh-text border border-gh-border hover:bg-gh-card-hover rounded-md transition"
                  >
                    Close Blueprint
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
