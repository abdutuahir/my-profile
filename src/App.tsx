import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import OverviewTab from "./components/OverviewTab";
import DocumentationTab from "./components/DocumentationTab";
import TerminalTab from "./components/TerminalTab";
import ArchitectureTab from "./components/ArchitectureTab";
import CertificationsTab from "./components/CertificationsTab";
import { AlertCircle, Terminal } from "lucide-react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        return savedTheme === "dark";
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches;
    }
    return false;
  });

  // Apply dark class to html document element
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="min-h-screen bg-gh-bg text-gh-text flex flex-col justify-between selection:bg-gh-accent/20 transition-colors duration-200" id="github-app-root">
      {/* Top Banner & Header */}
      <div className="w-full">
        {/* GitHub Repository Header Section */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
        
        {/* Primary Page Layout Grid */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex-1">
          {activeTab === "overview" && <OverviewTab />}
          {activeTab === "docs" && <DocumentationTab />}
          {activeTab === "terminal" && <TerminalTab />}
          {activeTab === "architecture" && <ArchitectureTab />}
          {activeTab === "certifications" && <CertificationsTab />}
        </main>
      </div>

      {/* GitHub Repository Style Footer */}
      <footer className="bg-gh-bg border-t border-gh-border py-6 mt-12 text-xs text-gh-muted transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 font-mono">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-gh-text">abdutahir</span>
            <span>© 2026</span>
            <span>•</span>
            <span className="hover:text-gh-accent cursor-pointer">SRE & Enterprise Integration Portal</span>
          </div>
          
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <a 
              href="mailto:abdutuahir@gmail.com" 
              className="hover:text-gh-accent transition flex items-center gap-1"
            >
              Contact Support
            </a>
            <span className="text-gh-border hidden sm:inline">|</span>
            <span className="flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 text-gh-success" />
              SLA Compliance: 99.99% Guaranteed
            </span>
            <span className="text-gh-border hidden sm:inline">|</span>
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
