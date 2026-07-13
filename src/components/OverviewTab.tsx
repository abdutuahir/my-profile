import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Terminal, 
  ExternalLink, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  ShieldAlert, 
  Clock, 
  CheckCircle,
  Briefcase,
  Award,
  Database,
  Cpu,
  Bookmark,
  Sparkles,
  Phone,
  Linkedin,
  Github,
  MessageSquare,
  Send,
  Printer
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { experienceData, skillCategories } from "../data/experienceData";
import SkillsSection from "./SkillsSection";
import ProjectsSection from "./ProjectsSection";

export default function OverviewTab() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>("safaricom");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [expandAll, setExpandAll] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdutuahir@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const triggerPrint = () => {
    // Expand all items to ensure they are present in the DOM for printing
    setExpandAll(true);
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8" id="overview-grid">
      {/* LEFT COLUMN: Profile and Metrics (4 cols) */}
      <div className="lg:col-span-4 space-y-6" id="profile-column">
        {/* Profile Card */}
        <div className="bg-gh-card border border-gh-border rounded-lg p-6 space-y-5 shadow-sm">
          <div className="flex items-center space-x-4">
            {/* Elegant SVG avatar with glowing SRE badge */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0969da] to-[#fd8c73] flex items-center justify-between p-1 shadow-sm">
                <div className="w-full h-full rounded-full bg-gh-bg flex items-center justify-center text-xl font-bold text-gh-text font-mono">
                  ATE
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-gh-card rounded-full" title="Active SRE Duty"></span>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-gh-text tracking-tight">Abdu Tahir Edris</h2>
              <p className="text-xs text-gh-muted font-mono">@abdutahir</p>
              <p className="text-xs text-gh-accent font-medium mt-0.5">Enterprise Integration & SRE Lead</p>
            </div>
          </div>

          <p className="text-sm text-gh-text leading-relaxed">
            Enterprise SRE & Systems Architect with 10+ years of high-availability experience. Specialized in high-throughput telco-grade ESB integrations (TIBCO, Spring Boot), payment gateways, secure systems design (IEEE/TM Forum), and cybersecurity audits (INSA).
          </p>

          <div className="border-t border-gh-border pt-4 space-y-3 text-xs text-gh-text font-mono">
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <MapPin className="w-4 h-4 text-gh-muted" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted hover:text-gh-accent transition cursor-pointer" onClick={handleCopyEmail}>
              <Mail className="w-4 h-4" />
              <span className="truncate">{copiedEmail ? "Copied to Clipboard!" : "abdutuahir@gmail.com"}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <Clock className="w-4 h-4" />
              <span>UTC+3 (East Africa Time)</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <Award className="w-4 h-4" />
              <span>Safaricom | Hijra Bank | INSA</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <Phone className="w-4 h-4 text-gh-muted" />
              <span>+251940751352 | +251703601494</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <MessageSquare className="w-4 h-4 text-gh-muted" />
              <span>Whatsapp: +251703601494</span>
            </div>
            <div className="flex items-center space-x-2.5 text-gh-muted">
              <Send className="w-4 h-4 text-gh-muted" />
              <span>Telegram: +251940751352 | +251703601494</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/abdu-tahir/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2.5 text-gh-muted hover:text-gh-accent transition"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/abdutahir" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2.5 text-gh-muted hover:text-gh-accent transition"
            >
              <Github className="w-4 h-4" />
              <span>@abdutahir</span>
            </a>
          </div>
        </div>

        {/* Live SRE Metrics */}
        <div className="bg-gh-card border border-gh-border rounded-lg p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-gh-border pb-2.5">
            <h3 className="text-xs font-mono font-semibold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-gh-accent" />
              SRE Operational KPIs
            </h3>
            <span className="text-[10px] bg-gh-alert-bg text-gh-alert-text border border-gh-alert-border px-2 py-0.5 rounded font-mono font-bold animate-pulse">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gh-bg border border-gh-border rounded p-3 text-center">
              <p className="text-[10px] text-gh-muted font-mono uppercase">API Availability</p>
              <p className="text-xl font-bold font-mono text-gh-success mt-1">99.99%</p>
            </div>
            <div className="bg-gh-bg border border-gh-border rounded p-3 text-center">
              <p className="text-[10px] text-gh-muted font-mono uppercase">Avg MTTR</p>
              <p className="text-xl font-bold font-mono text-gh-accent mt-1">&lt; 15m</p>
            </div>
            <div className="bg-gh-bg border border-gh-border rounded p-3 text-center">
              <p className="text-[10px] text-gh-muted font-mono uppercase">OWASP Audits</p>
              <p className="text-xl font-bold font-mono text-[#cf222e] mt-1">100%</p>
            </div>
            <div className="bg-gh-bg border border-gh-border rounded p-3 text-center">
              <p className="text-[10px] text-gh-muted font-mono uppercase">Deployments</p>
              <p className="text-xl font-bold font-mono text-gh-text mt-1">500+</p>
            </div>
          </div>
        </div>

        {/* PDF Export Utility Box */}
        <div className="bg-gh-card border border-gh-border rounded-lg p-5 space-y-3 shadow-sm no-print">
          <h4 className="text-xs font-mono font-semibold text-gh-muted uppercase tracking-wider border-b border-gh-border pb-2">
            Resume Generation
          </h4>
          <p className="text-xs text-gh-text/80 leading-relaxed">
            Need a professional PDF resume? Click below to export this compiled enterprise profile into a clean, single-page resume layout using optimized print styles.
          </p>
          <button
            onClick={triggerPrint}
            className="w-full py-2 px-3 bg-gh-success text-white rounded-md text-xs font-semibold hover:opacity-90 active:scale-[0.98] transition flex items-center justify-center gap-2"
          >
            <Printer className="w-4 h-4" /> Export Professional PDF
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: README markdown file (8 cols) */}
      <div className="lg:col-span-8 space-y-6" id="readme-column">
        {/* Main Readme Card */}
        <div className="bg-gh-card border border-gh-border rounded-lg overflow-hidden shadow-sm">
          {/* Readme Header */}
          <div className="bg-gh-bg border-b border-gh-border px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bookmark className="w-4 h-4 text-gh-muted" />
              <span className="font-mono text-sm font-semibold text-gh-text">README.md</span>
            </div>
            <span className="text-xs text-gh-muted font-mono">Last updated: Today</span>
          </div>

          {/* Readme Content */}
          <div className="p-6 md:p-8 space-y-8 text-sm md:text-base text-gh-text leading-relaxed">
            {/* Title block */}
            <div className="space-y-3 pb-6 border-b border-gh-border">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-gh-accent-light-bg border border-gh-accent-light-border text-gh-accent text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise & SRE Platform Engineer</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-gh-text tracking-tight font-sans">
                Enterprise Integration & Site Reliability Engineering (SRE) Hub
              </h1>
              <p className="text-gh-muted text-sm md:text-base leading-relaxed">
                Welcome to the professional portfolio and technical documentation archive of <strong>Abdu Tahir Edris</strong>. This platform provides an inside look at my enterprise-grade service mesh integrations, zero-trust cybersecurity architectures, and high-availability SRE practices implemented across major telecom networks, central banking channels, and national cyber-defense nodes.
              </p>
            </div>

            {/* Core Specialties - Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gh-text flex items-center gap-2 font-sans">
                <Briefcase className="w-5 h-5 text-gh-accent" /> Core Focus Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gh-bg border border-gh-border rounded-lg p-4 hover:border-gh-accent/40 transition group">
                  <h4 className="font-bold text-gh-text mb-1 group-hover:text-gh-accent transition">Enterprise Orchestration & ESB</h4>
                  <p className="text-xs text-gh-muted leading-relaxed">
                    Connecting CRM, Billing, Mobile Money (M-Pesa), eKYC, and USSD gateways. Architecting microservices and leveraging TIBCO and Spring Boot architectures.
                  </p>
                </div>
                <div className="bg-gh-bg border border-gh-border rounded-lg p-4 hover:border-emerald-500/40 transition group">
                  <h4 className="font-bold text-gh-text mb-1 group-hover:text-emerald-500 transition">SRE & High Availability</h4>
                  <p className="text-xs text-gh-muted leading-relaxed">
                    Automating container deployments on Kubernetes, monitoring SLA targets (99.99%), managing logging with ELK, and triaging alerts under SLA pressure.
                  </p>
                </div>
                <div className="bg-gh-bg border border-gh-border rounded-lg p-4 hover:border-rose-500/40 transition group">
                  <h4 className="font-bold text-gh-text mb-1 group-hover:text-rose-600 transition">Military-Grade Cybersecurity</h4>
                  <p className="text-xs text-gh-muted leading-relaxed">
                    Executing comprehensive API, web, and infrastructure penetration tests following OWASP. Auditing secure source code and implementing secure SDLC mechanisms.
                  </p>
                </div>
                <div className="bg-gh-bg border border-gh-border rounded-lg p-4 hover:border-amber-500/40 transition group">
                  <h4 className="font-bold text-gh-text mb-1 group-hover:text-amber-600 transition">Architectural Governance</h4>
                  <p className="text-xs text-gh-muted leading-relaxed">
                    Formulating rigorous UML models, SRS, and SDD documentations for government-level architectures compliant with IEEE and TM Forum standards.
                  </p>
                </div>
              </div>
            </div>

            {/* INTERACTIVE PROJECTS GRID COMPONENT */}
            <ProjectsSection />

            {/* INTERACTIVE SKILLS CHART & MATRIX COMPONENT */}
            <SkillsSection />

            {/* INTERACTIVE CAREER TIMELINE */}
            <div className="space-y-6 pt-4 page-break-avoid">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gh-border pb-3">
                <h3 className="text-lg font-bold text-gh-text flex items-center gap-2 font-sans">
                  <Layers className="w-5 h-5 text-[#fd8c73]" /> Professional Experience Timeline
                </h3>
                <div className="flex items-center space-x-3">
                  <button 
                    onClick={() => setExpandAll(!expandAll)}
                    className="text-xs text-gh-accent hover:underline font-mono no-print"
                  >
                    {expandAll ? "Collapse All" : "Expand All"}
                  </button>
                  <span className="text-xs text-gh-muted font-mono hidden sm:inline">Click a card to expand responsibilities</span>
                </div>
              </div>

              {/* Vertical timeline line container */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-gh-border space-y-6 ml-2 md:ml-4">
                {experienceData.map((exp) => {
                  const isSelected = selectedJobId === exp.id || expandAll;

                  return (
                    <div key={exp.id} className="relative group page-break-avoid">
                      {/* Timeline dot marker */}
                      <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isSelected 
                          ? "bg-[#fd8c73] border-white scale-125 ring-4 ring-[#fd8c73]/30" 
                          : "bg-gh-bg border-gh-border group-hover:border-[#afb8c1]"
                      }`}></span>

                      {/* Timeline card block */}
                      <div 
                        onClick={() => setSelectedJobId(isSelected && !expandAll ? null : exp.id)}
                        className={`cursor-pointer transition-all duration-300 rounded-lg border p-4 md:p-5 timeline-card ${
                          isSelected 
                            ? "bg-gh-card-selected border-[#fd8c73]/50 shadow-sm" 
                            : "bg-gh-card hover:bg-gh-card-hover border-gh-border"
                        }`}
                        id={`job-card-${exp.id}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-bold text-base md:text-lg text-gh-text">{exp.role}</h4>
                              {exp.isCurrent && (
                                <span className="text-[10px] bg-gh-alert-bg text-gh-alert-text border border-gh-alert-border px-2 py-0.5 rounded font-mono font-semibold">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gh-accent font-medium font-sans">
                              {exp.company} <span className="text-gh-muted font-normal">• {exp.location}</span>
                            </p>
                          </div>
                          <span className="text-xs font-mono text-gh-muted bg-gh-tag-bg border border-gh-border px-2.5 py-1 rounded-full self-start md:self-center">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-gh-text mt-3 leading-relaxed font-sans italic border-l-2 border-[#fd8c73]/40 pl-3">
                          {exp.summary}
                        </p>

                        {/* Expandable Section */}
                        <AnimatePresence initial={false}>
                          {isSelected && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden mt-4 pt-4 border-t border-gh-border timeline-details"
                            >
                              <div className="space-y-4">
                                <div>
                                  <h5 className="text-xs font-bold font-mono text-gh-muted uppercase tracking-wider mb-2">Key Responsibilities & Impact:</h5>
                                  <ul className="space-y-2 text-xs md:text-sm text-gh-text pl-4 list-disc marker:text-[#fd8c73]">
                                    {exp.responsibilities.map((resp, i) => (
                                      <li key={i} className="leading-relaxed">{resp}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="text-xs font-bold font-mono text-gh-muted uppercase tracking-wider mb-2">Engaged Technology Stack:</h5>
                                  <div className="flex flex-wrap gap-1.5">
                                    {exp.techStack.map((tech) => (
                                      <span key={tech} className="text-xs px-2.5 py-1 bg-gh-accent-light-bg text-gh-accent border border-gh-accent-light-border rounded font-mono">
                                        {tech}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>

                        {/* Bottom toggle prompt */}
                        <div className="flex justify-end mt-3 text-xs text-gh-muted hover:text-gh-text font-mono select-none no-print">
                          <span className="flex items-center gap-1">
                            {isSelected ? (
                              <>Collapse Details <ChevronUp className="w-3.5 h-3.5" /></>
                            ) : (
                              <>View Scope & Tech <ChevronDown className="w-3.5 h-3.5" /></>
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Standards Compliance Footnote */}
            <div className="bg-gh-bg border border-gh-border rounded-lg p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm page-break-avoid">
              <div>
                <h4 className="font-bold text-gh-text flex items-center gap-2 text-sm md:text-base font-sans">
                  <CheckCircle className="w-5 h-5 text-gh-success" /> Architectural & Security Standards Compliance
                </h4>
                <p className="text-xs text-gh-muted mt-1">
                  All enterprise designs and systems audits strictly adhere to TM Forum Standards, IEEE Software Specifications (SRS/SDD), and full-spectrum OWASP vulnerability auditing standards.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] bg-gh-alert-bg text-gh-alert-text border border-gh-alert-border px-2 py-1 rounded font-mono font-bold">TM Forum</span>
                <span className="text-[10px] bg-gh-accent-light-bg text-gh-accent border border-gh-accent-light-border px-2 py-1 rounded font-mono font-bold">IEEE Standard</span>
                <span className="text-[10px] bg-rose-500/10 text-rose-600 border border-rose-500/20 px-2 py-1 rounded font-mono font-bold">OWASP Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
