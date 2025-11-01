import { Code2, Database, LineChart, Server, Box, Boxes } from "lucide-react"

const steps = [
  {
    icon: Code2,
    title: "Define Your SLOs",
    description:
      "Create ServiceLevelObjective resources in Kubernetes or YAML files. Specify your target, window, and error/total metrics.",
    code: `apiVersion: pyrra.dev/v1alpha1
kind: ServiceLevelObjective
metadata:
  name: api-availability
spec:
  target: "99.9"
  window: 2w
  indicator:
    ratio:
      errors:
        metric: http_requests_total{code=~"5.."}
      total:
        metric: http_requests_total`,
  },
  {
    icon: Database,
    title: "Automatic Recording Rules",
    description:
      "Pyrra watches for SLO objects and generates Prometheus recording rules for burn rates at multiple time windows.",
    code: `# Generated automatically:
http_requests:increase2w
http_requests:burnrate3m
http_requests:burnrate15m
http_requests:burnrate1h
http_requests:burnrate12h
http_requests:burnrate2d`,
  },
  {
    icon: LineChart,
    title: "Monitor & Alert",
    description:
      "View all SLOs in the UI, track error budget consumption, and receive multi-window burn rate alerts when things go wrong.",
    code: `# Multi-window alerts:
- Severity: critical
  Window: 1h, 5m
  Burn: 14.4x
  
- Severity: warning  
  Window: 6h, 30m
  Burn: 6x`,
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">How Pyrra Works</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Three simple steps to production-ready SLO monitoring
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-3">Deploy Anywhere</h3>
            <p className="text-muted-foreground">
              Pyrra adapts to your infrastructure, whether you're running on bare metal, containers, or Kubernetes
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Server className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Bare Metal</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Run Pyrra as a systemd service on your servers for lightweight, direct deployment
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Box className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Docker</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deploy with Docker for easy containerized setup and portability across environments
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Boxes className="w-6 h-6 text-primary" />
              </div>
              <h4 className="text-lg font-semibold mb-2">Kubernetes Operator</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tightly integrated with Prometheus Operator for native Kubernetes SLO management
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-16">
          {steps.map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-sm font-semibold text-primary">Step {index + 1}</div>
                </div>
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl" />
                  <pre className="relative bg-card border border-border rounded-xl p-6 overflow-x-auto">
                    <code className="text-sm font-mono text-foreground">{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
