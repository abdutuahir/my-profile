import React, { useState } from "react";
import { 
  Menu, 
  X, 
  ChevronRight, 
  Check, 
  Copy, 
  BookOpen, 
  Tag, 
  GitBranch, 
  Sliders, 
  Zap, 
  Info 
} from "lucide-react";
import { docsData } from "../data/docsData";

export default function DocumentationTab() {
  const [selectedDocId, setSelectedDocId] = useState<string>("tibco-bw");
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const selectedDoc = docsData.find(d => d.id === selectedDocId) || docsData[0];

  // Group docs by category
  const categories = Array.from(new Set(docsData.map(d => d.category)));

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="relative min-h-[600px] py-6 flex flex-col lg:flex-row gap-6" id="docs-tab-container">
      {/* Mobile Sidebar Toggle Button */}
      <button 
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-white border border-[#d0d7de] rounded-md text-sm text-[#1f2328] font-medium hover:bg-[#f6f8fa] transition self-start shadow-sm"
        id="mobile-sidebar-toggle"
      >
        {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        <span>Technical Guides Menu</span>
      </button>

      {/* LEFT SIDEBAR: Categories & Document Links */}
      <aside 
        className={`fixed lg:sticky top-0 lg:top-4 z-40 lg:z-0 w-64 h-[calc(100vh-120px)] lg:h-auto bg-[#f6f8fa] lg:bg-transparent border-r border-[#d0d7de] lg:border-none p-4 lg:p-0 transition-transform duration-300 transform lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        id="docs-sidebar"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-[#d0d7de] pb-3">
            <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-[#0969da]" />
              Documentation Portals
            </h3>
            <button className="lg:hidden text-[#57606a] hover:text-[#1f2328]" onClick={() => setSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="space-y-5">
            {categories.map((category) => (
              <div key={category} className="space-y-2">
                <h4 className="text-xs font-bold text-[#1f2328] font-sans tracking-wide">
                  {category}
                </h4>
                <div className="space-y-1 border-l border-[#d0d7de] ml-1.5 pl-3">
                  {docsData
                    .filter(doc => doc.category === category)
                    .map(doc => {
                      const isCurrent = doc.id === selectedDoc.id;
                      return (
                        <button
                          key={doc.id}
                          onClick={() => {
                            setSelectedDocId(doc.id);
                            setSidebarOpen(false);
                          }}
                          className={`block w-full text-left py-1.5 px-2 text-xs rounded transition-all truncate ${
                            isCurrent
                              ? "bg-[#ddf4ff] text-[#0969da] font-semibold border-l-2 border-[#0969da] -ml-[13px] pl-3.5"
                              : "text-[#57606a] hover:text-[#1f2328]"
                          }`}
                          id={`doc-link-${doc.id}`}
                        >
                          {doc.title}
                        </button>
                      );
                    })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          id="sidebar-overlay"
        />
      )}

      {/* RIGHT PANEL: Documentation Viewer */}
      <main className="flex-1 min-w-0 bg-white border border-[#d0d7de] rounded-lg p-5 md:p-8 space-y-6 shadow-sm" id="docs-viewer-panel">
        {/* Breadcrumbs path */}
        <div className="flex items-center space-x-1.5 text-xs font-mono text-[#57606a]">
          <span className="hover:text-[#0969da] cursor-pointer">guides</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-[#0969da] cursor-pointer">{selectedDoc.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#1f2328] font-medium">{selectedDoc.id}</span>
        </div>

        {/* Title and description */}
        <div className="space-y-3 border-b border-[#d0d7de] pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-[#1f2328] tracking-tight font-sans">
            {selectedDoc.title}
          </h1>
          <p className="text-sm text-[#24292f] leading-relaxed">
            {selectedDoc.overview}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
            {selectedDoc.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-[#f6f8fa] text-[#57606a] border border-[#d0d7de] rounded">
                <Tag className="w-2.5 h-2.5 text-[#0969da]" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visualized Architecture Box (if present) */}
        {selectedDoc.architectureDescription && (
          <div className="bg-[#f6f8fa] border border-[#d0d7de] rounded-lg p-4 space-y-2.5 shadow-inner">
            <h3 className="text-xs font-mono font-bold text-[#57606a] uppercase tracking-wider flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-[#fd8c73]" />
              System Topology Flow
            </h3>
            <div className="bg-white border border-[#d0d7de] p-3 rounded font-mono text-xs text-[#0969da] leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
              {selectedDoc.architectureDescription}
            </div>
            <p className="text-[11px] text-[#57606a] italic leading-relaxed">
              This flowchart illustrates how the requests interface with downstream channels, secure networks, and central databases.
            </p>
          </div>
        )}

        {/* Core SRE Guidelines & Best Practices */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#1f2328] flex items-center gap-1.5 font-sans">
            <Sliders className="w-4 h-4 text-[#1f883d]" /> Architectural Principles & Safeguards
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-[#24292f]">
            {selectedDoc.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed bg-[#f6f8fa] border border-[#d0d7de] p-3 rounded shadow-sm">
                <div className="mt-0.5 p-0.5 bg-[#dafbe1] border border-[#85e89d]/60 rounded text-[#1a7f37]">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <span>{bp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Code Snippet Box (if present) */}
        {selectedDoc.codeSnippet && (
          <div className="space-y-2.5 pt-2" id="docs-code-snippet-box">
            <div className="flex items-center justify-between bg-[#f6f8fa] border border-[#d0d7de] px-4 py-2.5 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono text-[#1f2328] pl-2 font-semibold">
                  {selectedDoc.codeTitle || "implementation_snippet"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono font-bold uppercase bg-white border border-[#d0d7de] text-[#57606a] px-2 py-0.5 rounded">
                  {selectedDoc.codeLanguage}
                </span>
                <button 
                  onClick={() => handleCopyCode(selectedDoc.codeSnippet!)}
                  className="p-1 hover:bg-[#eff1f3] rounded text-[#57606a] hover:text-[#1f2328] transition"
                  title="Copy Code"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-[#1f883d]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="bg-[#24292f] border-x border-b border-[#d0d7de] rounded-b-lg p-4 overflow-x-auto text-xs md:text-sm font-mono text-[#f6f8fa] leading-relaxed max-h-[400px]">
              <pre><code>{selectedDoc.codeSnippet}</code></pre>
            </div>
          </div>
        )}

        {/* SRE Documentation disclaimer */}
        <div className="border-t border-[#d0d7de] pt-5 flex items-start gap-2.5 text-xs text-[#57606a]">
          <Info className="w-4 h-4 text-[#0969da] shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Note: All diagrams and pseudocode fragments represented inside this portal correspond directly to standard reference architectures used by Abdu Tahir Edris under strict architectural compliance regulations. System identifiers and credentials have been omitted for compliance.
          </p>
        </div>
      </main>
    </div>
  );
}
