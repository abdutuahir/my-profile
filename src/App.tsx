import React, { useState } from "react";
import Header from "./components/Header";
import OverviewTab from "./components/OverviewTab";
import DocumentationTab from "./components/DocumentationTab";
import TerminalTab from "./components/TerminalTab";
import ArchitectureTab from "./components/ArchitectureTab";
import { AlertCircle, Terminal, HelpCircle } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");

  return (
    <div className="min-h-screen bg-[#f6f8fa] text-[#1f2328] flex flex-col justify-between selection:bg-[#0969da]/20" id="github-app-root">
      {/* Top Banner & Header */}
      <div className="w-full">
        {/* GitHub Repository Header Section */}
        <Header activeTab={activeTab} setActiveTab={setActiveTab} />
        
        {/* Primary Page Layout Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex-1">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "docs" && <DocumentationTab />}
          {activeTab === "terminal" && <TerminalTab />}
          {activeTab === "architecture" && <ArchitectureTab />}
        </main>
      </div>

      {/* GitHub Repository Style Footer */}
      <footer className="bg-[#f6f8fa] border-t border-[#d0d7de] py-6 mt-12 text-xs text-[#57606a]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-[#1f2328]">abdutahiredris</span>
            <span>© 2026</span>
            <span>•</span>
            <span className="hover:text-[#0969da] cursor-pointer">SRE & Enterprise Integration Portal</span>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a 
              href="mailto:abdutahiredris@gmail.com" 
              className="hover:text-[#0969da] transition flex items-center gap-1"
            >
              Contact Support
            </a>
            <span className="text-[#d0d7de] hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-[#1f883d]" />
              SLA Compliance: 99.99% Guaranteed
            </span>
            <span className="text-[#d0d7de] hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <Terminal className="w-3.5 h-3.5 text-amber-600" />
              Built on React + Tailwind CSS
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

