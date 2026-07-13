import { DocSection } from "../types";

export const docsData: DocSection[] = [
  {
    id: "tibco-bw",
    title: "TIBCO BusinessWorks Enterprise Integration Patterns",
    category: "Enterprise Integration",
    tags: ["TIBCO BW", "ESB", "TIBCO TEA", "XML Schema"],
    overview: "TIBCO ActiveMatrix BusinessWorks is the backbone for connecting complex enterprise systems like CRM, Billing, USSD, and third-party payment channels. Standard integration patterns use SOAP/REST interfaces and XML transformation schemas (XSD/XSLT) inside a centralized Enterprise Service Bus (ESB) topology.",
    architectureDescription: "CLIENT -> USSD / HTTP API -> [Load Balancer] -> [TIBCO BusinessWorks Process Container] -> XML/JSON Mapper -> CRM / Billing DB / M-Pesa API.",
    bestPractices: [
      "Keep payload sizes optimized by pre-filtering non-essential data at the USSD/API Gateway level.",
      "Always set precise HTTP Connection Timeout, Read Timeout, and Circuit Breakers in TIBCO BW HTTP Client Resource configurations.",
      "Utilize TIBCO Enterprise Message Service (EMS) JMS Queues for asynchronous persistent messaging to guarantee delivery to billing gateways."
    ],
    codeTitle: "Example TIBCO BW SOAP to REST Payload Transformation Model (Spring Boot Proxy)",
    codeSnippet: `// Spring Boot adapter transforming legacy SOAP USSD XML payload to internal microservice JSON
@RestController
@RequestMapping("/api/v1/integration")
public class IntegrationController {

    private final BillingService billingService;

    public IntegrationController(BillingService billingService) {
        this.billingService = billingService;
    }

    @PostMapping(value = "/ussd-callback", consumes = MediaType.APPLICATION_XML_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<UssdResponse> processUssdRequest(@RequestBody UssdXmlRequest request) {
        // Logging for audit trail and SRE visibility
        logger.info("Received USSD request for MSISDN: {}", request.getMsisdn());
        
        // Transform and process
        BillingDetails details = new BillingDetails(
            request.getTransactionId(), 
            request.getAmount(), 
            request.getMsisdn()
        );
        
        UssdResponse response = billingService.chargeAccount(details);
        return ResponseEntity.ok(response);
    }
}`,
    codeLanguage: "java"
  },
  {
    id: "sre-incident-management",
    title: "SRE Incident Management, Monitoring, and SLA Remediation Workflow",
    category: "SRE & Operations",
    tags: ["SRE", "SLA 99.99%", "Prometheus", "Grafana", "Alertmanager"],
    overview: "SRE operations focus on maintaining a 99.99% system availability SLA. Production environments are monitored using Prometheus and Grafana for metrics collection and Alertmanager for real-time alerts. This standard guide details the incident triage and Root Cause Analysis (RCA) pipeline.",
    architectureDescription: "System Metrics -> Prometheus Agent -> Alertmanager -> On-Call SRE Pager -> Visual Grafana Dashboard Triage -> Automated Log Trace (ELK) -> Incident Resolution.",
    bestPractices: [
      "Define Service Level Indicators (SLIs) for Latency, Traffic, Errors, and Saturation (The 4 Golden Signals).",
      "Draft standard operating runbooks for rapid database failovers and TIBCO process restarts.",
      "Conduct post-mortem reviews without finger-pointing (Blameless Post-Mortems) to guarantee robust systemic corrections."
    ],
    codeTitle: "Prometheus Alerting Rules Definition for ESB Core Latency & Failures",
    codeSnippet: `groups:
  - name: esb_integration_alerts
    rules:
      - alert: CoreIntegrationHighLatency
        expr: histogram_quantile(0.95, sum(rate(http_request_duration_seconds_bucket{job="tibco-bw"}[5m])) by (le)) > 2.5
        for: 2m
        labels:
          severity: critical
          tier: integration
        annotations:
          summary: "95th percentile latency exceeds 2.5s on TIBCO ESB"
          description: "TIBCO integration adapter latency has exceeded 2.5 seconds for over 2 minutes. High risk of USSD session timeouts."

      - alert: CoreIntegrationErrorRateSpike
        expr: sum(rate(http_requests_total{status=~"5.."}[5m])) / sum(rate(http_requests_total[5m])) * 100 > 5
        for: 1m
        labels:
          severity: critical
        annotations:
          summary: "API 5xx Gateway error rate above 5%"
          description: "Integration endpoints are failing with 5xx Server Error status. Current error fraction is higher than 5%."`,
    codeLanguage: "yaml"
  },
  {
    id: "owasp-remediation",
    title: "OWASP API Vulnerability Review & SSDLC Security Controls",
    category: "Cybersecurity",
    tags: ["OWASP API", "SSDLC", "Penetration Testing", "Security Review"],
    overview: "With a background in the Information Network Security Agency (INSA), implementing secure coding standards throughout the software development lifecycle (SSDLC) is paramount. Protecting core microservices against OWASP API Top 10 vulnerabilities (such as Broken Object Level Authorization (BOLA), SQL Injection, and Rate Limiting failures) is integrated directly into deployment checkpoints.",
    architectureDescription: "External Request -> WAF Firewall -> API Gateway (Auth & Rate Limit check) -> Microservice Secure Auth Interceptor -> Sanitized DB SQL.",
    bestPractices: [
      "Never rely on client-side constraints. Always perform input validation, payload sanitization, and output encoding on the server.",
      "Implement robust parameter binding (Prepared Statements) for all SQL and NoSQL lookups to prevent injection attacks.",
      "Incorporate static application security testing (SAST) and software composition analysis (SCA) directly into CI/CD pipelines."
    ],
    codeTitle: "Remediating SQL Injection & Insecure Deserialization in Java REST Controller",
    codeSnippet: `// ❌ INSECURE: vulnerable to SQL injection and unvalidated input parameters
public User queryUserUnsafe(String username) {
    String sql = "SELECT * FROM users WHERE username = '" + username + "'"; // VULNERABLE
    return jdbcTemplate.queryForObject(sql, new UserRowMapper());
}

//  SECURE: Parameterized query binding with explicit regex input sanitation
private static final Pattern USERNAME_PATTERN = Pattern.compile("^[a-zA-Z0-9_]{3,30}$");

public User queryUserSecure(String username) {
    if (username == null || !USERNAME_PATTERN.matcher(username).matches()) {
        throw new IllegalArgumentException("Invalid and unsafe username format provided");
    }
    
    String sql = "SELECT id, username, email, role FROM users WHERE username = ?";
    return jdbcTemplate.queryForObject(sql, new Object[]{username}, new UserRowMapper());
}`,
    codeLanguage: "java"
  },
  {
    id: "devsecops-pipeline",
    title: "Automated GitLab CI/CD DevSecOps & Orchestration Pipeline",
    category: "SRE & Operations",
    tags: ["GitLab CI", "Docker", "Kubernetes", "DevSecOps", "Helm"],
    overview: "Modern application delivery requires automated, continuous security checks (DevSecOps) prior to Kubernetes orchestration. Code quality gates, container vulnerability scanning (using Trivy or Clair), and automated Helm charts deployment streamline production delivery while protecting infrastructure.",
    architectureDescription: "Git Push -> Code Lint -> Unit Tests -> SAST Scan -> Docker Build -> Container Vulnerability Check -> Deployment to Kubernetes (Staging/Production).",
    bestPractices: [
      "Cache dependencies (like maven repository or node_modules) across GitLab CI runner jobs to improve pipeline speeds by up to 60%.",
      "Do not hardcode secrets or passwords in docker files or codebases; always map secret tokens using Kubernetes Secrets or Vault.",
      "Deploy with rolling updates and perform standard liveness and readiness health checks before routing external ingress traffic to new pods."
    ],
    codeTitle: "Comprehensive .gitlab-ci.yml Pipeline Definition for Spring Boot Kubernetes Microservices",
    codeSnippet: `stages:
  - test
  - security
  - build
  - deploy

run_tests:
  stage: test
  image: maven:3.8-openjdk-17-slim
  script:
    - mvn clean test
  artifacts:
    reports:
      junit: target/surefire-reports/*.xml

sast_security_scan:
  stage: security
  image: aquasec/trivy:latest
  script:
    - trivy fs --exit-code 1 --severity HIGH,CRITICAL .
  allow_failure: false

build_docker_image:
  stage: build
  image: docker:20.10.16
  services:
    - docker:20.10.16-dind
  script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA -t $CI_REGISTRY_IMAGE:latest .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - docker push $CI_REGISTRY_IMAGE:latest

deploy_to_kubernetes:
  stage: deploy
  image: dtzar/helm-kubectl:latest
  script:
    - kubectl config set-cluster k8s-prod --server=$K8S_SERVER --insecure-skip-tls-verify=true
    - kubectl config set-credentials gitlab-admin --token=$K8S_TOKEN
    - kubectl config set-context prod-context --cluster=k8s-prod --user=gitlab-admin
    - kubectl config use-context prod-context
    - helm upgrade --install integration-service ./charts/integration-service 
        --set image.tag=$CI_COMMIT_SHA 
        --values ./charts/integration-service/values-prod.yaml`,
    codeLanguage: "yaml"
  }
];
