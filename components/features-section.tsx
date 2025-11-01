import { Activity, AlertTriangle, BarChart3, Clock, Filter, Gauge } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "Multi Burn Rate Alerts",
    description:
      "Automatically generates 4 severity levels of alerts based on error budget burn rates to catch issues early.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Dashboards",
    description: "Visualize SLOs, error budgets, and burn rates with beautiful Grafana dashboards out of the box.",
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description:
      "Track availability, error budget consumption, and service health metrics in real-time with Prometheus.",
  },
  {
    icon: Filter,
    title: "Advanced Filtering",
    description:
      "Search and filter SLOs by name, labels, and error budget status. Click labels to drill down instantly.",
  },
  {
    icon: Clock,
    title: "Time Range Analysis",
    description: "Analyze SLO performance over custom time ranges with absolute and relative chart scales.",
  },
  {
    icon: AlertTriangle,
    title: "Error Budget Tracking",
    description: "See remaining error budget at a glance. Sort by worst performers to prioritize reliability work.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Everything you need for SLO monitoring</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Built for DevOps and SRE teams who want to make reliability measurable and actionable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
