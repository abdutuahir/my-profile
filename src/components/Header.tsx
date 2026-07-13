import React from "react";
import { 
  Code, 
  BookOpen, 
  Terminal, 
  Network, 
  Github, 
  CircleDot, 
  Clock, 
  Briefcase, 
  Shield,
  Sun,
  Moon,
  Award
} from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export default function Header({ activeTab, setActiveTab, darkMode, toggleDarkMode }: HeaderProps) {
  const tabs = [
    { id: "overview", name: "Code", icon: Code },
    { id: "docs", name: "Documentation", icon: BookOpen, badge: "Docs" },
    { id: "terminal", name: "SRE Terminal", icon: Terminal, badge: "Shell" },
    { id: "architecture", name: "Architecture Diagrams", icon: Network },
    { id: "certifications", name: "Certifications", icon: Award, badge: "Certs" }
  ];

  return (
    <header className="bg-gh-bg border-b border-gh-border transition-colors duration-200" id="github-header">
      {/* Top navbar */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Left branding */}
        <div className="flex items-center space-x-3">
          <Github className="w-8 h-8 text-gh-text" />
          <div className="flex items-center space-x-1 text-sm md:text-base">
            <span className="text-gh-accent hover:underline cursor-pointer font-semibold">
              abdutahir
            </span>
            <span className="text-gh-muted">/</span>
            <span className="text-gh-text font-bold hover:underline cursor-pointer">
              my-profile
            </span>
            <span className="ml-2 px-2.5 py-0.5 text-xs text-gh-muted bg-gh-card border border-gh-border rounded-full font-medium">
              Public
            </span>
          </div>
        </div>

        {/* Right stats & action badges */}
        <div className="flex items-center flex-wrap gap-2 text-xs md:text-sm">
          {/* SRE Health status */}
          <div className="hidden lg:flex items-center space-x-2 mr-2 px-3 py-1 bg-gh-alert-bg border border-gh-alert-border rounded-full text-gh-alert-text">
            <CircleDot className="w-3.5 h-3.5 animate-pulse text-gh-success" />
            <span className="font-mono text-[11px] font-bold">SLA: 99.99% (ONLINE)</span>
          </div>

          <div className="flex items-center bg-gh-card border border-gh-border rounded-md overflow-hidden shadow-sm hover:bg-gh-card-hover transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-gh-text">
              <Clock className="w-3.5 h-3.5 text-gh-accent" />
              <span className="font-medium text-xs">Experience</span>
            </div>
            <span className="px-2.5 py-1.5 bg-gh-bg text-gh-text border-l border-gh-border font-mono font-medium text-xs">
              10+ Years
            </span>
          </div>

          <div className="flex items-center bg-gh-card border border-gh-border rounded-md overflow-hidden shadow-sm hover:bg-gh-card-hover transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-gh-text">
              <Briefcase className="w-3.5 h-3.5 text-gh-success" />
              <span className="font-medium text-xs">Lead Track</span>
            </div>
            <span className="px-2.5 py-1.5 bg-gh-bg text-gh-text border-l border-gh-border font-mono font-medium text-xs">
              Safaricom
            </span>
          </div>

          <div className="flex items-center bg-gh-card border border-gh-border rounded-md overflow-hidden shadow-sm hover:bg-gh-card-hover transition">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 text-gh-text">
              <Shield className="w-3.5 h-3.5 text-[#cf222e]" />
              <span className="font-medium text-xs">Security</span>
            </div>
            <span className="px-2.5 py-1.5 bg-gh-bg text-gh-text border-l border-gh-border font-mono font-medium text-xs">
              Gov / INSA
            </span>
          </div>

          {/* Theme Toggle Button */}
          <button 
            onClick={toggleDarkMode}
            className="theme-toggle flex items-center justify-center p-1.5 bg-gh-card border border-gh-border rounded-md shadow-sm hover:bg-gh-card-hover transition text-gh-text focus:outline-none cursor-pointer"
            title={darkMode ? "Switch to light theme" : "Switch to high-contrast dark theme"}
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-500 animate-spin-slow" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex space-x-1 overflow-x-auto scrollbar-none" aria-label="Repository navigation" role="tablist">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-3 px-4 text-sm font-medium border-b-2 transition-all whitespace-nowrap outline-none relative cursor-pointer ${
                  isActive
                    ? "border-gh-tab-active-border text-gh-text font-semibold"
                    : "border-transparent text-gh-muted hover:text-gh-text hover:border-gh-muted"
                }`}
                id={`tab-btn-${tab.id}`}
                role="tab"
                aria-selected={isActive}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-gh-tab-active-border" : "text-gh-muted"}`} />
                <span>{tab.name}</span>
                {tab.badge && (
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                    isActive 
                      ? "bg-gh-accent-light-bg text-gh-accent border border-gh-accent-light-border" 
                      : "bg-gh-tag-bg text-gh-muted border border-gh-border"
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
