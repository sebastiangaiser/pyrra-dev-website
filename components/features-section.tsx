import { Activity, AlertTriangle, BarChart3, Clock, Filter, Gauge } from "lucide-react"

const features = [
  {
    icon: Gauge,
    title: "End alert fatigue",
    description:
      "Pyrra generates multi-window, multi-burn-rate alerts at 4 severity levels. You get paged for real incidents, not noise.",
  },
  {
    icon: BarChart3,
    title: "Dashboards without the YAML maze",
    description: "Get Grafana dashboards for every SLO out of the box. No hand-crafted JSON, no copy-paste errors.",
  },
  {
    icon: Activity,
    title: "See error budgets in real time",
    description:
      "Know exactly how much budget remains and how fast you're burning it, before an incident eats it all.",
  },
  {
    icon: Filter,
    title: "Find the SLOs that matter",
    description:
      "Filter by name, labels, or error budget status. Click any label to drill down instantly across services.",
  },
  {
    icon: Clock,
    title: "Spot trends before they bite",
    description: "Analyze SLO performance over custom time ranges to catch slow degradation before users notice.",
  },
  {
    icon: AlertTriangle,
    title: "Prioritize what to fix first",
    description: "Sort SLOs by remaining error budget. The worst performers surface to the top, so you focus where it counts.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">What Pyrra handles for you</h2>
          <p className="text-xl text-muted-foreground text-balance">
            You define the objective. Pyrra generates the recording rules, alerts, and dashboards automatically.
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
