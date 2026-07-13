export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  verificationUrl?: string;
  skills: string[];
  logoType: "tibco" | "kubernetes" | "security" | "spring" | "wso2" | "pdf";
  status: "Active" | "Lifetime" | "Uploaded";
  description: string;
  pdfName?: string;
  pdfSize?: string;
}

export const initialCertifications: Certification[] = [
  {
    id: "cka",
    title: "CKA: Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation (CNCF)",
    issueDate: "March 2023",
    expiryDate: "March 2026",
    credentialId: "CKA-9038-2918-9921",
    verificationUrl: "https://www.credly.com/org/the-linux-foundation",
    skills: ["Kubernetes", "Container Orchestration", "Cluster Maintenance", "SLA Assurance", "Troubleshooting"],
    logoType: "kubernetes",
    status: "Active",
    description: "Demonstrates deep proficiency in establishing and maintaining Kubernetes clusters, covering core architecture, scheduling, logging, monitoring, networking, and security configurations in telco-grade environments."
  },
  {
    id: "tibco-cp",
    title: "TIBCO Certified Professional: ActiveMatrix BusinessWorks™ 6",
    issuer: "TIBCO Software Inc.",
    issueDate: "January 2021",
    expiryDate: "January 2026",
    credentialId: "TCP-BW6-84321-SRE",
    verificationUrl: "https://www.tibco.com",
    skills: ["TIBCO BW 6", "Enterprise Service Bus", "Data Transformation", "JMS Queuing", "API Orchestration"],
    logoType: "tibco",
    status: "Active",
    description: "Validates technical mastery in designing, developing, testing, deploying, and managing complex service integration workflows and high-throughput transformations (XML to JSON) within enterprise service buses."
  },
  {
    id: "ceh",
    title: "CEH: Certified Ethical Hacker",
    issuer: "EC-Council",
    issueDate: "August 2019",
    expiryDate: "August 2024",
    credentialId: "ECC-CEH-92384-INSA",
    verificationUrl: "https://www.eccouncil.org",
    skills: ["Penetration Testing", "OWASP Top 10", "Vulnerability Auditing", "Secure Source Code Review"],
    logoType: "security",
    status: "Active",
    description: "Certifies competence in ethical hacking, vulnerability scanning, and cybersecurity defense procedures, with a focus on testing complex web structures, API routers, and secure SDLC integrations."
  },
  {
    id: "spring-cp",
    title: "Spring Certified Professional",
    issuer: "VMware Tanzu",
    issueDate: "November 2020",
    credentialId: "SCP-SPRING-58392",
    skills: ["Spring Boot", "Spring Web Services", "Java EE", "RESTful Interfaces", "Secure Design Principles"],
    logoType: "spring",
    status: "Lifetime",
    description: "Validates thorough understanding of the core Spring framework, dependency injection, container lifecycle, data persistence, REST API security filters, and microservices design."
  },
  {
    id: "wso2-cei",
    title: "WSO2 Certified Enterprise Integrator",
    issuer: "WSO2",
    issueDate: "June 2022",
    expiryDate: "June 2025",
    credentialId: "WCEI-WSO2-73849",
    verificationUrl: "https://wso2.com",
    skills: ["WSO2 API Manager", "WSO2 ESB", "API Gateways", "TLS Enforcements", "Throttling Policies"],
    logoType: "wso2",
    status: "Active",
    description: "Certifies advanced capabilities in configuring routing nodes, applying API gateway traffic throttle policies, enforcing transport-layer security protocols, and wrapping legacy channels in secure services."
  }
];
