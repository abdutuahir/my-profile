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
        className="lg:hidden flex items-center justify-center gap-2 px-4 py-2 bg-gh-card border border-gh-border rounded-md text-sm text-gh-text font-medium hover:bg-gh-card-hover transition self-start shadow-sm cursor-pointer"
        id="mobile-sidebar-toggle"
      >
        {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        <span>Technical Guides Menu</span>
      </button>

      {/* LEFT SIDEBAR: Categories & Document Links */}
      <aside 
        className={`fixed lg:sticky top-0 lg:top-4 z-40 lg:z-0 w-64 h-[calc(100vh-120px)] lg:h-auto bg-gh-bg lg:bg-transparent border-r lg:border-r-0 border-gh-border p-4 lg:p-0 transition-transform duration-300 transform lg:transform-none ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
        id="docs-sidebar"
      >
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-gh-border pb-3">
            <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-gh-accent" />
              Documentation Portals
            </h3>
            <button className="lg:hidden text-gh-muted hover:text-gh-text cursor-pointer" onClick={() => setSidebarOpen(false)}>
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="space-y-5">
            {categories.map((category) => (
              <div key={category} className="space-y-2">
                <h4 className="text-xs font-bold text-gh-text font-sans tracking-wide">
                  {category}
                </h4>
                <div className="space-y-1 border-l border-gh-border ml-1.5 pl-3">
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
                          className={`block w-full text-left py-1.5 px-2 text-xs rounded transition-all truncate cursor-pointer ${
                            isCurrent
                              ? "bg-gh-accent-light-bg text-gh-accent font-semibold border-l-2 border-gh-accent -ml-[13px] pl-3.5"
                              : "text-gh-muted hover:text-gh-text"
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
      <main className="flex-1 min-w-0 bg-gh-card border border-gh-border rounded-lg p-5 md:p-8 space-y-6 shadow-sm" id="docs-viewer-panel">
        {/* Breadcrumbs path */}
        <div className="flex items-center space-x-1.5 text-xs font-mono text-gh-muted">
          <span className="hover:text-gh-accent cursor-pointer">guides</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="hover:text-gh-accent cursor-pointer">{selectedDoc.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}</span>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-gh-text font-medium">{selectedDoc.id}</span>
        </div>

        {/* Title and description */}
        <div className="space-y-3 border-b border-gh-border pb-6">
          <h1 className="text-xl md:text-2xl font-bold text-gh-text tracking-tight font-sans">
            {selectedDoc.title}
          </h1>
          <p className="text-sm text-gh-text leading-relaxed opacity-95">
            {selectedDoc.overview}
          </p>
          <div className="flex flex-wrap items-center gap-1.5 pt-1.5">
            {selectedDoc.tags.map(tag => (
              <span key={tag} className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 bg-gh-bg text-gh-muted border border-gh-border rounded">
                <Tag className="w-2.5 h-2.5 text-gh-accent" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Visualized Architecture Box (if present) */}
        {selectedDoc.architectureDescription && (
          <div className="bg-gh-bg border border-gh-border rounded-lg p-4 space-y-2.5 shadow-inner">
            <h3 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider flex items-center gap-1.5">
              <GitBranch className="w-3.5 h-3.5 text-[#fd8c73]" />
              System Topology Flow
            </h3>
            <div className="bg-gh-card border border-gh-border p-3 rounded font-mono text-xs text-gh-accent leading-relaxed overflow-x-auto whitespace-pre-wrap select-all">
              {selectedDoc.architectureDescription}
            </div>
            <p className="text-[11px] text-gh-muted italic leading-relaxed">
              This flowchart illustrates how the requests interface with downstream channels, secure networks, and central databases.
            </p>
          </div>
        )}

        {/* Core SRE Guidelines & Best Practices */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-gh-text flex items-center gap-1.5 font-sans">
            <Sliders className="w-4 h-4 text-gh-success" /> Architectural Principles & Safeguards
          </h3>
          <ul className="space-y-2 text-xs md:text-sm text-gh-text">
            {selectedDoc.bestPractices.map((bp, idx) => (
              <li key={idx} className="flex items-start gap-2.5 leading-relaxed bg-gh-bg border border-gh-border p-3 rounded shadow-sm">
                <div className="mt-0.5 p-0.5 bg-gh-alert-bg border border-gh-alert-border rounded text-gh-alert-text">
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
            <div className="flex items-center justify-between bg-gh-bg border border-gh-border px-4 py-2.5 rounded-t-lg">
              <div className="flex items-center space-x-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono text-gh-text pl-2 font-semibold">
                  {selectedDoc.codeTitle || "implementation_snippet"}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-[10px] font-mono font-bold uppercase bg-gh-card border border-gh-border text-gh-muted px-2 py-0.5 rounded">
                  {selectedDoc.codeLanguage}
                </span>
                <button 
                  onClick={() => handleCopyCode(selectedDoc.codeSnippet!)}
                  className="p-1 hover:bg-gh-tag-bg rounded text-gh-muted hover:text-gh-text transition cursor-pointer"
                  title="Copy Code"
                >
                  {copiedCode ? <Check className="w-4 h-4 text-gh-success" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>
            <div className="bg-[#161b22] border-x border-b border-[#30363d] rounded-b-lg p-4 overflow-x-auto text-xs md:text-sm font-mono text-[#f0f6fc] leading-relaxed max-h-[400px]">
              <pre><code>{selectedDoc.codeSnippet}</code></pre>
            </div>
          </div>
        )}

        {/* SRE Documentation disclaimer */}
        <div className="border-t border-gh-border pt-5 flex items-start gap-2.5 text-xs text-gh-muted">
          <Info className="w-4 h-4 text-gh-accent shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            Note: All diagrams and pseudocode fragments represented inside this portal correspond directly to standard reference architectures used by Abdu Tahir Edris under strict architectural compliance regulations. System identifiers and credentials have been omitted for compliance.
          </p>
        </div>
      </main>
    </div>
  );
}
