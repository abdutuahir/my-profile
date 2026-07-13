import React from "react";
import { 
  BookOpen, 
  Code, 
  Terminal, 
  Network, 
  Star, 
  GitFork, 
  Eye, 
  Folder, 
  Github, 
  CircleDot, 
  CloudLightning,
  AlertCircle,
  Clock,
  Briefcase,
  Shield,
  Award
} from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "overview", name: "Code", icon: Code },
    { id: "docs", name: "Documentation", icon: BookOpen, badge: "Docs" },
    { id: "terminal", name: "SRE Terminal", icon: Terminal, badge: "Shell" },
    { id: "architecture", name: "Architecture Diagrams", icon: Network }
  ];

  return (
    <header className="bg-[#f6f8fa] border-b border-[#d0d7de]" id="github-header">
      {/* Top navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex items-center space-x-3">
          <Github className="w-8 h-8 text-[#1f2328]" />
          <div className="flex items-center space-x-1 text-sm md:text-base">
            <span className="text-[#0969da] hover:underline cursor-pointer font-semibold">
              abdutahir
            </span>
            <span className="text-[#636c76]">/</span>
            <span className="text-[#1f2328] font-bold hover:underline cursor-pointer">
              my-profile
            </span>
            <span className="ml-2 px-2.5 py-0.5 text-xs text-[#57606a] bg-white border border-[#d0d7de] rounded-full font-medium">
              Public
            </span>
          </div>
        </div>

        {/* Right stats & action badges */}
        <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm">
          {/* SRE Health status */}
          <div className="hidden lg:flex items-center space-x-2 mr-2 px-3 py-1 bg-[#dafbe1] border border-[#85e89d]/60 rounded-full text-[#1a7f37]">
            <CircleDot className="w-3.5 h-3.5 animate-pulse text-[#1f883d]" />
            <span className="font-mono text-[11px] font-bold">SLA: 99.99% (ONLINE)</span>
          </div>

          <div className="flex items-center bg-white border border-[#d0d7de] rounded-md overflow-hidden shadow-sm hover:bg-[#f6f8fa] transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-[#1f2328]">
              <Clock className="w-3.5 h-3.5 text-[#0969da]" />
              <span className="font-medium text-xs">Experience</span>
            </div>
            <span className="px-2.5 py-1.5 bg-[#f6f8fa] text-[#1f2328] border-l border-[#d0d7de] font-mono font-medium text-xs">
              10+ Years
            </span>
          </div>

          <div className="flex items-center bg-white border border-[#d0d7de] rounded-md overflow-hidden shadow-sm hover:bg-[#f6f8fa] transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-[#1f2328]">
              <Briefcase className="w-3.5 h-3.5 text-[#1f883d]" />
              <span className="font-medium text-xs">Lead Track</span>
            </div>
            <span className="px-2.5 py-1.5 bg-[#f6f8fa] text-[#1f2328] border-l border-[#d0d7de] font-mono font-medium text-xs">
              Safaricom
            </span>
          </div>

          <div className="flex items-center bg-white border border-[#d0d7de] rounded-md overflow-hidden shadow-sm hover:bg-[#f6f8fa] transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-[#1f2328]">
              <Shield className="w-3.5 h-3.5 text-[#cf222e]" />
              <span className="font-medium text-xs">Security</span>
            </div>
            <span className="px-2.5 py-1.5 bg-[#f6f8fa] text-[#1f2328] border-l border-[#d0d7de] font-mono font-medium text-xs">
              Gov / INSA
            </span>
          </div>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-1 overflow-x-auto scrollbar-none" aria-label="Repository navigation">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap outline-none relative ${
                  isActive
                    ? "border-[#fd8c73] text-[#1f2328] font-semibold"
                    : "border-transparent text-[#57606a] hover:text-[#1f2328] hover:border-[#afb8c1]"
                }`}
                id={`tab-btn-${tab.id}`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#fd8c73]" : "text-[#57606a]"}`} />
                <span>{tab.name}</span>
                {tab.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isActive 
                      ? "bg-[#ddf4ff] text-[#0969da] border border-[#54aeff]/30" 
                      : "bg-[#eff1f3] text-[#57606a] border border-[#d0d7de]"
                  }`}>
                    {tab.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
