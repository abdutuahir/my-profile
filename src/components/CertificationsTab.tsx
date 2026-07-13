import React, { useState, useEffect, useRef } from "react";
import { 
  Award, 
  ShieldCheck, 
  ExternalLink, 
  Calendar, 
  Lock, 
  Upload, 
  FileText, 
  Trash2, 
  CheckCircle2, 
  BadgeCheck, 
  Plus, 
  RotateCcw, 
  FilePlus, 
  AlertCircle, 
  Search, 
  Filter, 
  Download,
  Check,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { Certification, initialCertifications } from "../data/certsData";

export default function CertificationsTab() {
  const [certs, setCerts] = useState<Certification[]>([]);
  const [selectedCertId, setSelectedCertId] = useState<string>("cka");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterIssuer, setFilterIssuer] = useState("all");
  
  // Admin Mode Verification State
  const [isAdminVerified, setIsAdminVerified] = useState(false);
  const [adminPasscode, setAdminPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState("");

  // File Upload State
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [newCertTitle, setNewCertTitle] = useState("");
  const [newCertIssuer, setNewCertIssuer] = useState("");
  const [newCertId, setNewCertId] = useState("");
  const [newCertSkills, setNewCertSkills] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadError, setUploadError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load from localStorage & sessionStorage admin state
  useEffect(() => {
    const isVerified = sessionStorage.getItem("is_admin_verified") === "true";
    if (isVerified) {
      setIsAdminVerified(true);
    }

    const stored = localStorage.getItem("abdutahir_certs");
    if (stored) {
      try {
        setCerts(JSON.parse(stored));
      } catch (e) {
        setCerts(initialCertifications);
      }
    } else {
      setCerts(initialCertifications);
    }
  }, []);

  const handleVerifyAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    const expected = (import.meta as any).env.VITE_ADMIN_PASSCODE || "abukulsumtahir";
    if (adminPasscode === expected) {
      setIsAdminVerified(true);
      sessionStorage.setItem("is_admin_verified", "true");
      setPasscodeError("");
    } else {
      setPasscodeError("Incorrect passcode. Access is restricted to Abdu Tahir Edris.");
    }
  };

  const handleLockAdmin = () => {
    setIsAdminVerified(false);
    sessionStorage.removeItem("is_admin_verified");
    setAdminPasscode("");
  };

  // Save to localStorage
  const saveCerts = (updatedCerts: Certification[]) => {
    setCerts(updatedCerts);
    localStorage.setItem("abdutahir_certs", JSON.stringify(updatedCerts));
  };

  const handleResetCerts = () => {
    if (window.confirm("Are you sure you want to reset to the original professional credentials list?")) {
      saveCerts(initialCertifications);
      setSelectedCertId("cka");
    }
  };

  // Drag and Drop Handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      validateAndSetFile(file);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      validateAndSetFile(file);
    }
  };

  const validateAndSetFile = (file: File) => {
    if (file.type !== "application/pdf" && !file.type.startsWith("image/")) {
      setUploadError("Invalid file type. Please upload a PDF certificate or image.");
      setUploadedFile(null);
      return;
    }
    setUploadError("");
    setUploadedFile(file);
    
    // Auto fill fields from file name
    const baseName = file.name.replace(/\.[^/.]+$/, "").replace(/[_-]/g, " ");
    setNewCertTitle(baseName.replace(/\b\w/g, c => c.toUpperCase()));
    setNewCertIssuer("Self-Uploaded Credentials");
  };

  const handleRegisterCert = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCertTitle.trim()) {
      setUploadError("Please provide a certification title.");
      return;
    }

    const uniqueId = `uploaded-${Date.now()}`;
    const skillsArray = newCertSkills
      ? newCertSkills.split(",").map(s => s.trim()).filter(s => s.length > 0)
      : ["SRE", "Cloud Native", "Verification Pending"];

    const newCertification: Certification = {
      id: uniqueId,
      title: newCertTitle,
      issuer: newCertIssuer || "Self-Uploaded",
      issueDate: new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" }),
      credentialId: newCertId || `REG-UP-${Math.floor(Math.random() * 90000) + 10000}`,
      skills: skillsArray,
      logoType: "pdf",
      status: "Uploaded",
      description: `User-uploaded credential verified locally on system workspace. File: ${uploadedFile?.name || "Uploaded document"}.`,
      pdfName: uploadedFile?.name || "Credential.pdf",
      pdfSize: uploadedFile ? `${(uploadedFile.size / 1024 / 1024).toFixed(2)} MB` : "1.2 MB"
    };

    const updated = [...certs, newCertification];
    saveCerts(updated);
    setSelectedCertId(uniqueId);
    
    // Reset inputs
    setUploadedFile(null);
    setNewCertTitle("");
    setNewCertIssuer("");
    setNewCertId("");
    setNewCertSkills("");
    setUploadSuccess(true);
    setTimeout(() => setUploadSuccess(false), 3000);
  };

  const handleDeleteCert = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    if (window.confirm("Are you sure you want to delete this certificate?")) {
      const updated = certs.filter(c => c.id !== id);
      saveCerts(updated);
      if (selectedCertId === id && updated.length > 0) {
        setSelectedCertId(updated[0].id);
      }
    }
  };

  const triggerBrowse = () => {
    fileInputRef.current?.click();
  };

  // Filtered lists
  const filteredCerts = certs.filter(c => {
    const matchesSearch = c.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          c.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          c.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    
    if (filterIssuer === "all") return matchesSearch;
    if (filterIssuer === "uploaded") return matchesSearch && c.status === "Uploaded";
    if (filterIssuer === "verified") return matchesSearch && c.status !== "Uploaded";
    return matchesSearch;
  });

  const selectedCert = certs.find(c => c.id === selectedCertId) || certs[0];

  // Render Certificate Icon Badge
  const renderLogoBadge = (type: string) => {
    switch (type) {
      case "kubernetes":
        return (
          <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400">
            <Award className="w-5 h-5" />
          </div>
        );
      case "tibco":
        return (
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
        );
      case "security":
        return (
          <div className="w-10 h-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-600 dark:text-rose-400">
            <Lock className="w-5 h-5" />
          </div>
        );
      case "spring":
        return (
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <BadgeCheck className="w-5 h-5" />
          </div>
        );
      case "wso2":
        return (
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <Award className="w-5 h-5" />
          </div>
        );
      default:
        return (
          <div className="w-10 h-10 rounded-lg bg-gh-accent-light-bg border border-gh-accent-light-border flex items-center justify-center text-gh-accent">
            <FileText className="w-5 h-5" />
          </div>
        );
    }
  };

  return (
    <div className="py-6 space-y-6" id="certifications-container">
      {/* Intro details */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gh-border pb-4">
        <div>
          <h2 className="text-xl font-bold text-gh-text flex items-center gap-2 font-sans">
            <Award className="w-5 h-5 text-amber-500" /> SRE & Cybersecurity Certifications Hub
          </h2>
          <p className="text-xs text-gh-muted mt-1">
            Explore and audit Abdu's technical credentials, or drag and drop your own PDF certificates to verify and include them dynamically in the live sandbox.
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={handleResetCerts}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-gh-card border border-gh-border rounded-md text-xs font-mono font-bold text-gh-muted hover:text-gh-text hover:bg-gh-card-hover hover:border-gh-muted transition shadow-sm cursor-pointer"
            id="reset-certs-btn"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Credentials
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3" id="certs-filter-bar">
        <div className="md:col-span-8 relative">
          <Search className="w-4 h-4 text-gh-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search certifications by title, issuer, or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-gh-card border border-gh-border rounded-md text-xs md:text-sm text-gh-text placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-gh-accent focus:border-gh-accent"
            id="certs-search-input"
          />
        </div>
        <div className="md:col-span-4 flex items-center gap-2">
          <Filter className="w-4 h-4 text-gh-muted shrink-0" />
          <select
            value={filterIssuer}
            onChange={(e) => setFilterIssuer(e.target.value)}
            className="w-full py-2 px-3 bg-gh-card border border-gh-border rounded-md text-xs md:text-sm text-gh-text focus:outline-none focus:ring-1 focus:ring-gh-accent"
            id="certs-filter-select"
          >
            <option value="all">All Issuers</option>
            <option value="verified">Verified Official</option>
            <option value="uploaded">Uploaded by User</option>
          </select>
        </div>
      </div>

      {/* Main Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" id="certs-workspace-grid">
        {/* LEFT COLUMN: List of Certifications (5 cols) */}
        <div className="lg:col-span-5 space-y-3 max-h-[640px] overflow-y-auto pr-1" id="certs-list-column">
          {filteredCerts.length === 0 ? (
            <div className="text-center py-12 bg-gh-card border border-gh-border rounded-lg text-gh-muted space-y-2">
              <AlertCircle className="w-8 h-8 text-gh-muted mx-auto" />
              <p className="text-sm font-medium">No credentials matching filter</p>
              <p className="text-xs">Try cleaning your search query or reset credentials.</p>
            </div>
          ) : (
            filteredCerts.map((cert) => {
              const isSelected = cert.id === selectedCertId;
              const isUploaded = cert.status === "Uploaded";
              return (
                <div
                  key={cert.id}
                  onClick={() => setSelectedCertId(cert.id)}
                  className={`flex items-start gap-3.5 p-3.5 border rounded-lg cursor-pointer transition duration-200 ${
                    isSelected
                      ? "bg-gh-card-selected border-gh-tab-active-border/50 shadow-sm"
                      : "bg-gh-card border-gh-border hover:bg-gh-card-hover"
                  }`}
                  id={`cert-card-${cert.id}`}
                >
                  {renderLogoBadge(cert.logoType)}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-bold text-xs md:text-sm text-gh-text truncate">
                        {cert.title}
                      </h4>
                      {isUploaded && (
                        <button
                          onClick={(e) => handleDeleteCert(cert.id, e)}
                          className="p-1 text-gh-muted hover:text-red-500 hover:bg-gh-bg rounded transition cursor-pointer"
                          title="Delete Uploaded Credential"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="text-xs text-gh-muted truncate mt-0.5">{cert.issuer}</p>
                    
                    <div className="flex items-center gap-2 mt-2 flex-wrap">
                      <span className="text-[10px] text-gh-muted font-mono flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-gh-muted" /> {cert.issueDate}
                      </span>
                      <span className="text-[10px] font-mono">• ID: {cert.credentialId.slice(0, 14)}...</span>
                      
                      <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded border ${
                        cert.status === "Active"
                          ? "bg-gh-alert-bg text-gh-alert-text border-gh-alert-border"
                          : cert.status === "Lifetime"
                          ? "bg-gh-accent-light-bg text-gh-accent border-gh-accent-light-border"
                          : "bg-amber-500/10 text-amber-600 border-amber-500/20"
                      }`}>
                        {cert.status}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* RIGHT COLUMN: Detail Viewer / interactive form (7 cols) */}
        <div className="lg:col-span-7 space-y-6" id="certs-viewer-column">
          {/* Certificate Detail Panel */}
          {selectedCert && (
            <div className="bg-gh-card border border-gh-border rounded-lg p-5 md:p-6 space-y-5 shadow-sm" id="certs-detail-panel">
              {/* Certificate visual model */}
              <div className="relative border-4 border-double border-gh-border rounded-lg bg-gh-bg p-6 text-center select-none overflow-hidden" id="certificate-visual-card">
                {/* Background watermarks */}
                <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center pointer-events-none">
                  <Award className="w-[300px] h-[300px] text-gh-text" />
                </div>
                
                {/* Seal */}
                <div className="absolute top-4 right-4 text-amber-500 opacity-80">
                  <ShieldCheck className="w-12 h-12" />
                </div>

                <span className="text-[9px] font-mono tracking-widest text-gh-muted uppercase font-bold">Official Verification Certificate</span>
                
                <h3 className="text-base md:text-xl font-bold font-sans text-gh-text mt-3 tracking-tight">
                  {selectedCert.title}
                </h3>
                
                <p className="text-xs text-gh-muted mt-1.5 font-sans">
                  This technical credential is officially registered to
                </p>
                
                <p className="text-sm md:text-base font-bold font-mono text-gh-accent mt-1 uppercase tracking-wide">
                  Abdu Tahir Edris
                </p>

                <p className="text-[10px] md:text-xs text-gh-text/90 max-w-md mx-auto mt-2 leading-relaxed">
                  Who has successfully demonstrated military-grade competence and complied with the necessary engineering evaluation gates as authorized by the issuing entity.
                </p>

                <div className="border-t border-gh-border/60 max-w-xs mx-auto mt-4 pt-3 flex items-center justify-between text-[10px] text-gh-muted font-mono">
                  <div>
                    <p className="font-bold">ISSUER</p>
                    <p className="truncate max-w-[120px]">{selectedCert.issuer}</p>
                  </div>
                  <div>
                    <p className="font-bold">STATUS</p>
                    <p className="text-gh-success font-bold uppercase">{selectedCert.status}</p>
                  </div>
                  <div>
                    <p className="font-bold">ID</p>
                    <p className="truncate max-w-[100px]">{selectedCert.credentialId}</p>
                  </div>
                </div>

                {/* Local PDF download simulator badge */}
                {selectedCert.status === "Uploaded" && (
                  <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-gh-muted bg-gh-card border border-gh-border px-3 py-1 rounded w-fit mx-auto shadow-sm">
                    <FileText className="w-3.5 h-3.5 text-rose-500" />
                    <span>{selectedCert.pdfName} ({selectedCert.pdfSize})</span>
                  </div>
                )}
              </div>

              {/* Detailed descriptive metadata */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 border-b border-gh-border pb-2">
                  <h4 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider">
                    Credential Scope Description
                  </h4>
                  {selectedCert.verificationUrl && (
                    <a
                      href={selectedCert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gh-accent hover:underline flex items-center gap-1"
                    >
                      Verify Credential <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
                
                <p className="text-xs md:text-sm text-gh-text leading-relaxed">
                  {selectedCert.description}
                </p>

                <div className="space-y-2">
                  <h5 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider">
                    Skills Verified on Core Topology:
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedCert.skills.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 bg-gh-accent-light-bg text-gh-accent border border-gh-accent-light-border rounded font-mono font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DRAG & DROP PDF REGISTRATION BLOCK */}
          <div className="bg-gh-card border border-gh-border rounded-lg p-5 space-y-4 shadow-sm" id="certs-upload-block">
            <div className="border-b border-gh-border pb-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <FilePlus className="w-4 h-4 text-[#fd8c73]" />
                <h4 className="text-xs font-mono font-bold text-gh-muted uppercase tracking-wider">
                  Register New PDF Certification
                </h4>
              </div>
              {isAdminVerified && (
                <button
                  onClick={handleLockAdmin}
                  className="text-[10px] font-mono text-red-500 hover:underline flex items-center gap-1 cursor-pointer"
                  id="lock-uploads-btn"
                >
                  <Lock className="w-3 h-3" /> Lock Uploads
                </button>
              )}
            </div>

            {!isAdminVerified ? (
              <form onSubmit={handleVerifyAdmin} className="space-y-4 py-2 animate-fadeIn" id="admin-verification-form">
                <div className="flex flex-col items-center text-center space-y-2 max-w-sm mx-auto">
                  <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h5 className="text-xs font-mono font-bold text-gh-text uppercase">Restricted Access</h5>
                  <p className="text-[11px] text-gh-muted leading-relaxed">
                    This upload capability is restricted to Abdu Tahir Edris to prevent unauthorized certification injections. Please enter your administrator passcode to proceed.
                  </p>
                </div>
                
                <div className="space-y-2 max-w-xs mx-auto">
                  <input
                    type="password"
                    placeholder="Enter Admin Passcode"
                    value={adminPasscode}
                    onChange={(e) => setAdminPasscode(e.target.value)}
                    className="w-full p-2 text-center bg-gh-bg border border-gh-border rounded text-xs text-gh-text placeholder-zinc-500 font-mono focus:outline-none focus:ring-1 focus:ring-gh-accent focus:border-gh-accent"
                    id="admin-passcode-input"
                  />
                  {passcodeError && (
                    <p className="text-[10px] text-center text-red-500 font-medium" id="passcode-error-msg">
                      {passcodeError}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="w-full py-2 bg-gh-accent text-white rounded font-sans font-bold text-xs hover:opacity-90 active:scale-[0.99] transition cursor-pointer"
                    id="verify-passcode-btn"
                  >
                    Verify &amp; Unlock
                  </button>
                </div>
                
                <p className="text-[9px] text-center text-gh-muted font-mono pt-1">
                  Default passcode matches profile username. Set VITE_ADMIN_PASSCODE in .env to customize.
                </p>
              </form>
            ) : (
              <form onSubmit={handleRegisterCert} className="space-y-4">
                {/* Drag and Drop Zone */}
                <div
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  onClick={triggerBrowse}
                  className={`border-2 border-dashed rounded-lg p-5 text-center cursor-pointer transition ${
                    dragActive 
                      ? "border-gh-accent bg-gh-card-selected" 
                      : "border-gh-border bg-gh-bg hover:bg-gh-card-hover"
                  }`}
                  id="drag-drop-zone"
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    onChange={handleFileChange}
                    accept=".pdf,image/*"
                    className="hidden"
                    id="pdf-certificate-input"
                  />
                  
                  {uploadedFile ? (
                    <div className="space-y-2">
                      <CheckCircle2 className="w-8 h-8 text-gh-success mx-auto animate-bounce" />
                      <p className="text-xs font-semibold text-gh-text">{uploadedFile.name}</p>
                      <p className="text-[10px] text-gh-muted">
                        {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB • File loaded successfully
                      </p>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setUploadedFile(null);
                        }}
                        className="px-2 py-1 bg-gh-card border border-gh-border rounded text-[10px] text-red-500 hover:bg-red-50 hover:border-red-200 transition"
                      >
                        Remove File
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Upload className="w-8 h-8 text-gh-muted mx-auto" />
                      <p className="text-xs font-semibold text-gh-text">
                        Drag and drop your certification PDF here
                      </p>
                      <p className="text-[10px] text-gh-muted">
                        Or click to browse storage (PDF/PNG/JPG up to 10MB)
                      </p>
                    </div>
                  )}
                </div>

                {uploadError && (
                  <div className="flex items-center gap-1.5 text-xs text-[#cf222e] bg-[#ffebe9] border border-[#ffc4c0]/50 p-2.5 rounded">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{uploadError}</span>
                  </div>
                )}

                {uploadSuccess && (
                  <div className="flex items-center gap-1.5 text-xs text-gh-success bg-emerald-500/10 border border-emerald-500/20 p-2.5 rounded">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Credential registered and added to telemetry stream successfully!</span>
                  </div>
                )}

                {/* Form elements (shown only when file is selected) */}
                {uploadedFile && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 animate-fadeIn" id="upload-form-fields">
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-gh-muted uppercase">Certification Title *</label>
                      <input
                        type="text"
                        required
                        value={newCertTitle}
                        onChange={(e) => setNewCertTitle(e.target.value)}
                        placeholder="e.g. Certified SRE Specialist"
                        className="w-full p-2 bg-gh-bg border border-gh-border rounded text-xs text-gh-text focus:outline-none focus:ring-1 focus:ring-gh-accent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-gh-muted uppercase">Issuing Entity</label>
                      <input
                        type="text"
                        value={newCertIssuer}
                        onChange={(e) => setNewCertIssuer(e.target.value)}
                        placeholder="e.g. Red Hat / AWS"
                        className="w-full p-2 bg-gh-bg border border-gh-border rounded text-xs text-gh-text focus:outline-none focus:ring-1 focus:ring-gh-accent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-gh-muted uppercase">Credential License ID</label>
                      <input
                        type="text"
                        value={newCertId}
                        onChange={(e) => setNewCertId(e.target.value)}
                        placeholder="e.g. LIC-923-83921"
                        className="w-full p-2 bg-gh-bg border border-gh-border rounded text-xs text-gh-text focus:outline-none focus:ring-1 focus:ring-gh-accent"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[10px] font-mono font-bold text-gh-muted uppercase">Skills Verified (comma-separated)</label>
                      <input
                        type="text"
                        value={newCertSkills}
                        onChange={(e) => setNewCertSkills(e.target.value)}
                        placeholder="e.g. Helm, Docker, Logging"
                        className="w-full p-2 bg-gh-bg border border-gh-border rounded text-xs text-gh-text focus:outline-none focus:ring-1 focus:ring-gh-accent"
                      />
                    </div>
                    
                    <div className="md:col-span-2 pt-2">
                      <button
                        type="submit"
                        className="w-full py-2 bg-gh-success text-white rounded font-sans font-bold text-xs hover:opacity-90 active:scale-[0.99] transition flex items-center justify-center gap-1.5 cursor-pointer"
                        id="register-credential-submit"
                      >
                        <Plus className="w-4 h-4" /> Register Credential
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
