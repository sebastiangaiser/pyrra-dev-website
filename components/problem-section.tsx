import { AlertTriangle, Code2, Bell } from "lucide-react"

const problems = [
  {
    icon: Code2,
    title: "SLOs require deep PromQL expertise",
    description:
      "Calculating error budgets and burn rates means writing and maintaining dozens of recording rules by hand. One typo and your SLO data is wrong.",
  },
  {
    icon: Bell,
    title: "Alert fatigue drowns out real incidents",
    description:
      "Without multi-window burn rate alerts, teams either get paged for every blip or miss slow-burning problems until the error budget is gone.",
  },
  {
    icon: AlertTriangle,
    title: "Every team reinvents the wheel",
    description:
      "There's no standard way to define SLOs with Prometheus. Each team builds its own dashboards and alerting, none of it portable or consistent.",
  },
]

export function ProblemSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">SLO monitoring shouldn't be this painful</h2>
          <p className="text-xl text-muted-foreground text-balance">
            Prometheus gives you the metrics. But turning them into actionable SLOs still takes too much manual work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative bg-card border border-border rounded-xl p-6"
            >
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
