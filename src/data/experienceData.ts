import { ExperienceItem } from "../types";

export const experienceData: ExperienceItem[] = [
  {
    id: "safaricom",
    role: "Enterprise Integration Engineer / SRE Lead",
    company: "Safaricom Ethiopia",
    location: "Addis Ababa, Ethiopia",
    period: "November 2022 – Present",
    isCurrent: true,
    category: "sre",
    summary: "Leading the SRE team and designing enterprise integrations linking Billing, Mobile Money (M-Pesa), CRM, eKYC, and partner ecosystems under stringent SLA requirements.",
    responsibilities: [
      "Design, develop, and maintain enterprise integration solutions connecting internal and external business systems.",
      "Develop RESTful and SOAP web services using Java and Spring Boot to support enterprise applications.",
      "Build and maintain integration services using TIBCO Enterprise Administration (TEA), and TIBCO BusinessWorks.",
      "Design and implement APIs for CRM, Billing, Mobile Money, eKYC, USSD, ESB, and third-party partner systems.",
      "Lead the Site Reliability Engineering (SRE) team responsible for production stability, service reliability, and operational excellence.",
      "Build and maintain CI/CD pipelines using GitLab CI/CD, Docker, Kubernetes, and automation tools.",
      "Implement DevSecOps best practices including automated testing, code quality analysis, vulnerability scanning, and secure deployments.",
      "Monitor enterprise applications using centralized logging and monitoring platforms, ensuring high availability and rapid incident response.",
      "Perform root cause analysis (RCA) for production incidents and implement permanent corrective actions.",
      "Collaborate with solution architects, developers, infrastructure teams, and vendors to deliver enterprise integration projects.",
      "Prepare technical documentation, architecture diagrams, API specifications, and deployment guides.",
      "Review application designs and ensure compliance with enterprise architecture, security, and integration standards.",
      "Mentor junior engineers and conduct technical reviews and knowledge-sharing sessions.",
      "Participate in production deployments, release planning, change management, and post-implementation support."
    ],
    techStack: ["Java", "Spring Boot", "TIBCO BW", "TIBCO TEA", "GitLab CI", "Docker", "Kubernetes", "USSD", "eKYC", "REST/SOAP", "Prometheus", "Grafana", "ELK Stack"]
  },
  {
    id: "hijra",
    role: "Senior Software Engineer",
    company: "Hijra Bank S.C.",
    location: "Addis Ababa, Ethiopia",
    period: "April 2022 – November 2022",
    category: "integration",
    summary: "Integrated core banking services with telecommunication providers and third-party payment gateways using WSO2 API Manager.",
    responsibilities: [
      "Designed and developed enterprise integration services for core banking and external payment systems.",
      "Integrated banking applications with payment gateways, telecom operators, and third-party financial institutions.",
      "Developed secure REST and SOAP APIs using WSO2 API Manager.",
      "Performed exhaustive API testing using Postman and SOAP UI.",
      "Collaborated with business analysts and stakeholders to gather and implement business requirements.",
      "Supported production systems, investigated incidents, and resolved application issues.",
      "Participated in system design, code reviews, and deployment activities."
    ],
    techStack: ["WSO2 API Manager", "SOAP UI", "Postman", "Core Banking API", "REST/SOAP", "Payment Gateways", "XML/JSON"]
  },
  {
    id: "insa-devsec",
    role: "Software Developer / Penetration Tester",
    company: "Information Network Security Agency (INSA)",
    location: "Addis Ababa, Ethiopia",
    period: "July 2017 – April 2022",
    category: "security",
    summary: "Built military-grade secure government applications and conducted full-scope mobile, web, API, and network penetration testing.",
    responsibilities: [
      "Developed confidential Military Grade Systems for critical security objectives.",
      "Developed secure enterprise applications using Java, PHP, C++, Python, and other advanced technologies.",
      "Conducted thorough web, mobile, desktop, and API penetration testing following OWASP methodologies.",
      "Performed source code security reviews and automated vulnerability assessments.",
      "Developed custom automation tools for virtual machine provisioning and secure infrastructure management.",
      "Participated in high-stakes cybersecurity audits for government systems and critical infrastructure.",
      "Implemented secure coding standards (SSDLC) and security controls throughout the software development lifecycle.",
      "Assisted software development teams in diagnosing and remediating secure-code vulnerabilities.",
      "Prepared comprehensive technical reports, security assessment documents, and actionable remediation guidelines.",
      "Participated in national security awareness programs and technical training initiatives for engineering staff."
    ],
    techStack: ["Java", "Python", "C++", "PHP", "OWASP", "Penetration Testing", "Source Code Auditing", "Infrastructure Automation", "SSDLC", "VM Provisioning", "Kali Linux", "Burp Suite"]
  },
  {
    id: "insa-architect",
    role: "System Architect and Designer",
    company: "Information Network Security Agency (INSA)",
    location: "Addis Ababa, Ethiopia",
    period: "July 2016 – July 2017",
    category: "architecture",
    summary: "Formulated rigorous software architectures, technical designs, and requirement specifications adhering to IEEE and TM Forum standards.",
    responsibilities: [
      "Performed comprehensive system analysis and gathered multi-stakeholder functional and non-functional requirements.",
      "Designed enterprise software architectures and structural technical solutions for vital government projects.",
      "Produced extensive Software Requirement Specifications (SRS), Software Design Documents (SDD), UML diagrams, and physical architecture documentation.",
      "Applied IEEE standards and TM Forum frameworks during architectural solution design.",
      "Worked closely with active software development teams to ensure architectural compliance and code pattern alignment.",
      "Conducted formalized design reviews and provided technical guidance throughout project execution phases.",
      "Participated in high-level solution planning, resource estimation, and platform/technology selection."
    ],
    techStack: ["UML", "Software Architecture Design", "IEEE Standards", "TM Forum Frameworks", "SRS / SDD Authoring", "System Analysis", "Design Patterns"]
  },
  {
    id: "polytech",
    role: "Android Developer",
    company: "PolyTech PLC",
    location: "Addis Ababa, Ethiopia",
    period: "March 2016 – July 2016",
    category: "mobile",
    summary: "Designed and developed native Android mobile applications including ride-hailing platforms and investment portals.",
    responsibilities: [
      "Designed and developed native Android mobile applications using Java.",
      "Developed the Investor Directory application and the BajajX ride-hailing mobile application.",
      "Built custom backend services supporting mobile application operations and data syncing.",
      "Developed background SMS automation services and integrated external location-based APIs.",
      "Performed comprehensive mobile testing, debugging, and application maintenance.",
      "Collaborated closely with UI/UX designers and backend developers to deliver highly responsive mobile experiences."
    ],
    techStack: ["Java (Android SDK)", "Android Studio", "SMS Automation", "API Integration", "Mobile Backend", "JSON/REST"]
  },
  {
    id: "insa-intern",
    role: "Intern Software Developer & Cybersecurity Auditor",
    company: "Information Network Security Agency (INSA)",
    location: "Addis Ababa, Ethiopia",
    period: "October 2015 – March 2016",
    category: "security",
    summary: "Assisted in enterprise software building and security reviews while completing cybersecurity audits and behavioral training.",
    responsibilities: [
      "Assisted in developing Java-based enterprise web applications.",
      "Participated in cybersecurity assessments and introductory vulnerability analysis exercises.",
      "Supported software quality assurance, testing activities, and test case creation.",
      "Learned secure software development practices and fundamental cybersecurity frameworks.",
      "Assisted senior SREs and engineers in system analysis, documentation, and operational technical support.",
      "Participated in behavioral intelligence and security awareness training programs."
    ],
    techStack: ["Java SE", "Cybersecurity Auditing", "QA Testing", "Technical Documentation", "Vulnerability Analysis", "Security Frameworks"]
  }
];

export const skillCategories = {
  integration: ["TIBCO BW / TEA", "Spring Boot", "WSO2 API Manager", "RESTful / SOAP Web Services", "ESB & USSD Gateways", "eKYC Protocols", "CRM & Billing Systems"],
  sre: ["Kubernetes", "Docker", "GitLab CI/CD", "Prometheus & Grafana", "ELK / Centralized Logging", "Incident Remediation (RCA)", "SLA Assurance (99.99%)"],
  security: ["API Penetration Testing", "OWASP Top 10", "Source Code Audit", "SSDLC Integration", "Remediation Guidance", "Confidential Military Systems"],
  languages: ["Java", "Python", "C++", "PHP", "Bash Scripting", "XML / JSON", "SQL / DDL / DML"]
};
