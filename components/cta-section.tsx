import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Github, Play } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-2xl p-12 text-center relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Deploy Pyrra in minutes, not sprints
              </h2>
              <p className="text-xl text-muted-foreground mb-10 text-balance max-w-2xl mx-auto">
                Open source under Apache 2.0. Works with Prometheus, Thanos, and Mimir. Run it on bare metal, Docker, or Kubernetes.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button size="lg" className="text-base px-8" asChild>
                  <Link href="https://github.com/pyrra-dev/pyrra#readme">
                    <BookOpen className="mr-2 w-4 h-4" />
                    Read the Docs
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
                  <Link href="https://demo.pyrra.dev">
                    <Play className="mr-2 w-4 h-4" />
                    Try Live Demo
                  </Link>
                </Button>
              </div>

              <div className="grid sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <Link
                  href="https://github.com/pyrra-dev/pyrra#readme"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <BookOpen className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Documentation</span>
                </Link>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/tree/main/examples"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <Code2 className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Examples</span>
                </Link>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/discussions"
                  className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-secondary/50 transition-colors group"
                >
                  <ArrowRight className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium">Community</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Code2({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}
