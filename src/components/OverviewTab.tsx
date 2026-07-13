import React, { useState } from "react";
import { 
  Mail, 
  MapPin, 
  Terminal, 
  ExternalLink, 
  ChevronRight, 
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
  Send
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { experienceData, skillCategories } from "../data/experienceData";

export default function OverviewTab() {
  const [selectedJobId, setSelectedJobId] = useState<string | null>("safaricom");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("abdutuahir@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8" id="overview-grid">
      {/* LEFT COLUMN: Profile and Metrics (4 cols) */}
      <div className="lg:col-span-4 space-y-6" id="profile-column">
        {/* Profile Card */}
        <div className="bg-white border border-[#d0d7de] rounded-lg p-6 space-y-5 shadow-sm">
          <div className="flex items-center space-x-4">
            {/* Elegant SVG avatar with glowing SRE badge */}
            <div className="relative">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#0969da] to-[#fd8c73] flex items-center justify-between p-1 shadow-sm">
                <div className="w-full h-full rounded-full bg-[#f6f8fa] flex items-center justify-center text-xl font-bold text-[#1f2328] font-mono">
                  ATE
                </div>
              </div>
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full" title="Active SRE Duty"></span>
            </div>
            <div>
              <h2 className="text-lg md:text-xl font-bold text-[#1f2328] tracking-tight">Abdu Tahir Edris</h2>
              <p className="text-xs text-[#57606a] font-mono">@abdutahir</p>
              <p className="text-xs text-[#0969da] font-medium mt-0.5">Enterprise Integration & SRE Lead</p>
            </div>
          </div>

          <p className="text-sm text-[#24292f] leading-relaxed">
            Enterprise SRE & Systems Architect with 10+ years of high-availability experience. Specialized in high-throughput telco-grade ESB integrations (TIBCO, Spring Boot), payment gateways, secure systems design (IEEE/TM Forum), and cybersecurity audits (INSA).
          </p>

          <div className="border-t border-[#d0d7de] pt-4 space-y-3 text-xs text-[#24292f] font-mono">
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <MapPin className="w-4 h-4 text-[#57606a]" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a] hover:text-[#0969da] transition cursor-pointer" onClick={handleCopyEmail}>
              <Mail className="w-4 h-4" />
              <span className="truncate">{copiedEmail ? "Copied to Clipboard!" : "abdutuahir@gmail.com"}</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <Clock className="w-4 h-4" />
              <span>UTC+3 (East Africa Time)</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <Award className="w-4 h-4" />
              <span>Safaricom | Hijra Bank | INSA</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <Phone className="w-4 h-4 text-[#57606a]" />
              <span>+251940751352 | +251703601494</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <MessageSquare className="w-4 h-4 text-[#57606a]" />
              <span>Whatsapp: +251703601494</span>
            </div>
            <div className="flex items-center space-x-2.5 text-[#57606a]">
              <Send className="w-4 h-4 text-[#57606a]" />
              <span>Telegram: +251940751352 | +251703601494</span>
            </div>
            <a 
              href="https://www.linkedin.com/in/abdu-tahir/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2.5 text-[#57606a] hover:text-[#0969da] transition"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn Profile</span>
            </a>
            <a 
              href="https://github.com/abdutahir" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center space-x-2.5 text-[#57606a] hover:text-[#0969da] transition"
            >
              <Github className="w-4 h-4" />
              <span>@abdutahir</span>
            </a>
          </div>
        </div>

        {/* Live SRE Metrics */}
        <div className="bg-white border border-[#d0d7de] rounded-lg p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#d0d7de] pb-2.5">
            <h3 className="text-xs font-mono font-semibold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#0969da]" />
              SRE Operational KPIs
            </h3>
            <span className="text-[10px] bg-[#dafbe1] text-[#1a7f37] border border-[#85e89d]/60 px-2 py-0.5 rounded font-mono font-bold animate-pulse">
              LIVE
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded p-3 text-center">
              <p className="text-[10px] text-[#57606a] font-mono uppercase">API Availability</p>
              <p className="text-xl font-bold font-mono text-[#1f883d] mt-1">99.99%</p>
            </div>
            <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded p-3 text-center">
              <p className="text-[10px] text-[#57606a] font-mono uppercase">Avg MTTR</p>
              <p className="text-xl font-bold font-mono text-[#0969da] mt-1">&lt; 15m</p>
            </div>
            <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded p-3 text-center">
              <p className="text-[10px] text-[#57606a] font-mono uppercase">OWASP Audits</p>
              <p className="text-xl font-bold font-mono text-[#cf222e] mt-1">100%</p>
            </div>
            <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded p-3 text-center">
              <p className="text-[10px] text-[#57606a] font-mono uppercase">Deployments</p>
              <p className="text-xl font-bold font-mono text-[#1f2328] mt-1">500+</p>
            </div>
          </div>
        </div>

        {/* Technical Skill Capsules */}
        <div className="bg-white border border-[#d0d7de] rounded-lg p-5 space-y-4 shadow-sm">
          <h3 className="text-xs font-mono font-semibold text-[#57606a] uppercase tracking-wider border-b border-[#d0d7de] pb-2.5">
            Technical Competencies
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-xs font-semibold text-[#1f2328] mb-2 font-mono flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#0969da]" /> Enterprise Integration
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.integration.map((skill) => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 bg-[#f6f8fa] text-[#24292f] border border-[#d0d7de] rounded font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#1f2328] mb-2 font-mono flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#1f883d]" /> SRE & Operations
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.sre.map((skill) => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 bg-[#f6f8fa] text-[#24292f] border border-[#d0d7de] rounded font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#1f2328] mb-2 font-mono flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5 text-[#d93f21]" /> Cybersecurity (INSA)
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.security.map((skill) => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 bg-[#f6f8fa] text-[#24292f] border border-[#d0d7de] rounded font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold text-[#1f2328] mb-2 font-mono flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#b25900]" /> Systems Languages
              </p>
              <div className="flex flex-wrap gap-1.5">
                {skillCategories.languages.map((skill) => (
                  <span key={skill} className="text-[11px] px-2 py-0.5 bg-[#f6f8fa] text-[#24292f] border border-[#d0d7de] rounded font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: README markdown file (8 cols) */}
      <div className="lg:col-span-8 space-y-6" id="readme-column">
        {/* Main Readme Card */}
        <div className="bg-white border border-[#d0d7de] rounded-lg overflow-hidden shadow-sm">
          {/* Readme Header */}
          <div className="bg-[#f6f8fa] border-b border-[#d0d7de] px-5 py-3.5 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Bookmark className="w-4 h-4 text-[#57606a]" />
              <span className="font-mono text-sm font-semibold text-[#1f2328]">README.md</span>
            </div>
            <span className="text-xs text-[#57606a] font-mono">Last updated: Today</span>
          </div>

          {/* Readme Content */}
          <div className="p-6 md:p-8 space-y-8 text-sm md:text-base text-[#24292f] leading-relaxed">
            {/* Title block */}
            <div className="space-y-3 pb-6 border-b border-[#d0d7de]">
              <div className="inline-flex items-center space-x-2 px-2.5 py-1 rounded bg-[#ddf4ff] border border-[#54aeff]/30 text-[#0969da] text-xs font-mono font-medium">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Enterprise & SRE Platform Engineer</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-[#1f2328] tracking-tight font-sans">
                Enterprise Integration & Site Reliability Engineering (SRE) Hub
              </h1>
              <p className="text-[#57606a] text-sm md:text-base leading-relaxed">
                Welcome to the professional portfolio and technical documentation archive of <strong>Abdu Tahir Edris</strong>. This platform provides an inside look at my enterprise-grade service mesh integrations, zero-trust cybersecurity architectures, and high-availability SRE practices implemented across major telecom networks, central banking channels, and national cyber-defense nodes.
              </p>
            </div>

            {/* Core Specialties - Grid */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-[#1f2328] flex items-center gap-2 font-sans">
                <Briefcase className="w-5 h-5 text-[#0969da]" /> Core Focus Areas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 hover:border-[#0969da]/40 transition group">
                  <h4 className="font-bold text-[#1f2328] mb-1 group-hover:text-[#0969da] transition">Enterprise Orchestration & ESB</h4>
                  <p className="text-xs text-[#57606a] leading-relaxed">
                    Connecting CRM, Billing, Mobile Money (M-Pesa), eKYC, and USSD gateways. Architecting microservices and leveraging TIBCO and Spring Boot architectures.
                  </p>
                </div>
                <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 hover:border-emerald-500/40 transition group">
                  <h4 className="font-bold text-[#1f2328] mb-1 group-hover:text-[#1f883d] transition">SRE & High Availability</h4>
                  <p className="text-xs text-[#57606a] leading-relaxed">
                    Automating container deployments on Kubernetes, monitoring SLA targets (99.99%), managing logging with ELK, and triaging alerts under SLA pressure.
                  </p>
                </div>
                <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 hover:border-[#cf222e]/40 transition group">
                  <h4 className="font-bold text-[#1f2328] mb-1 group-hover:text-[#cf222e] transition">Military-Grade Cybersecurity</h4>
                  <p className="text-xs text-[#57606a] leading-relaxed">
                    Executing comprehensive API, web, and infrastructure penetration tests following OWASP. Auditing secure source code and implementing secure SDLC mechanisms.
                  </p>
                </div>
                <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 hover:border-amber-500/40 transition group">
                  <h4 className="font-bold text-[#1f2328] mb-1 group-hover:text-amber-600 transition">Architectural Governance</h4>
                  <p className="text-xs text-[#57606a] leading-relaxed">
                    Formulating rigorous UML models, SRS, and SDD documentations for government-level architectures compliant with IEEE and TM Forum standards.
                  </p>
                </div>
              </div>
            </div>

            {/* INTERACTIVE CAREER TIMELINE */}
            <div className="space-y-6 pt-4">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d0d7de] pb-3">
                <h3 className="text-lg font-bold text-[#1f2328] flex items-center gap-2 font-sans">
                  <Layers className="w-5 h-5 text-[#fd8c73]" /> Professional Experience Timeline
                </h3>
                <span className="text-xs text-[#57606a] font-mono">Click a card to expand responsibilities & tech stack</span>
              </div>

              {/* Vertical timeline line container */}
              <div className="relative pl-6 md:pl-8 border-l-2 border-[#d0d7de] space-y-6 ml-2 md:ml-4">
                {experienceData.map((exp, index) => {
                  const isSelected = selectedJobId === exp.id;

                  return (
                    <div key={exp.id} className="relative group">
                      {/* Timeline dot marker */}
                      <span className={`absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                        isSelected 
                          ? "bg-[#fd8c73] border-white scale-125 ring-4 ring-[#fd8c73]/30" 
                          : "bg-[#f6f8fa] border-[#d0d7de] group-hover:border-[#afb8c1]"
                      }`}></span>

                      {/* Timeline card block */}
                      <div 
                        onClick={() => setSelectedJobId(isSelected ? null : exp.id)}
                        className={`cursor-pointer transition-all duration-300 rounded-lg border p-4 md:p-5 ${
                          isSelected 
                            ? "bg-[#fff8f2] border-[#fd8c73]/50 shadow-sm" 
                            : "bg-white hover:bg-[#f6f8fa] border-[#d0d7de]"
                        }`}
                        id={`job-card-${exp.id}`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h4 className="font-bold text-base md:text-lg text-[#1f2328]">{exp.role}</h4>
                              {exp.isCurrent && (
                                <span className="text-[10px] bg-[#dafbe1] text-[#1a7f37] border border-[#85e89d]/60 px-2 py-0.5 rounded font-mono font-semibold">
                                  Current
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-[#0969da] font-medium font-sans">
                              {exp.company} <span className="text-[#57606a] font-normal">• {exp.location}</span>
                            </p>
                          </div>
                          <span className="text-xs font-mono text-[#57606a] bg-[#eff1f3] border border-[#d0d7de] px-2.5 py-1 rounded-full self-start md:self-center">
                            {exp.period}
                          </span>
                        </div>

                        <p className="text-xs md:text-sm text-[#24292f] mt-3 leading-relaxed font-sans italic border-l-2 border-[#fd8c73]/40 pl-3">
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
                              className="overflow-hidden mt-4 pt-4 border-t border-[#d0d7de]"
                            >
                              <div className="space-y-4">
                                <div>
                                  <h5 className="text-xs font-bold font-mono text-[#57606a] uppercase tracking-wider mb-2">Key Responsibilities & Impact:</h5>
                                  <ul className="space-y-2 text-xs md:text-sm text-[#24292f] pl-4 list-disc marker:text-[#fd8c73]">
                                    {exp.responsibilities.map((resp, i) => (
                                      <li key={i} className="leading-relaxed">{resp}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div>
                                  <h5 className="text-xs font-bold font-mono text-[#57606a] uppercase tracking-wider mb-2">Engaged Technology Stack:</h5>
                                  <div className="flex flex-wrap gap-1.5">
                                    {exp.techStack.map((tech) => (
                                      <span key={tech} className="text-xs px-2.5 py-1 bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/30 rounded font-mono">
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
                        <div className="flex justify-end mt-3 text-xs text-[#57606a] hover:text-[#1f2328] font-mono select-none">
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
            <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-sm">
              <div>
                <h4 className="font-bold text-[#1f2328] flex items-center gap-2 text-sm md:text-base font-sans">
                  <CheckCircle className="w-5 h-5 text-[#1f883d]" /> Architectural & Security Standards Compliance
                </h4>
                <p className="text-xs text-[#57606a] mt-1">
                  All enterprise designs and systems audits strictly adhere to TM Forum Standards, IEEE Software Specifications (SRS/SDD), and full-spectrum OWASP vulnerability auditing standards.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="text-[10px] bg-[#dafbe1] text-[#1a7f37] border border-[#85e89d]/40 px-2 py-1 rounded font-mono font-bold">TM Forum</span>
                <span className="text-[10px] bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/30 px-2 py-1 rounded font-mono font-bold">IEEE Standard</span>
                <span className="text-[10px] bg-[#ffebe9] text-[#cf222e] border border-[#ffc4c0]/40 px-2 py-1 rounded font-mono font-bold">OWASP Secure</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
