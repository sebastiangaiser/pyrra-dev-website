import Link from "next/link"
import { Github, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">P</span>
              </div>
              <span className="font-bold text-xl">Pyrra</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Making SLOs with Prometheus manageable, accessible, and easy to use for everyone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="https://demo.pyrra.dev"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  href="https://demo.pyrra.dev/grafana"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Grafana Dashboards
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra#readme"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/tree/main/examples"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/discussions"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Discussions
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/issues"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Issues
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/pyrra-dev/pyrra/blob/main/CONTRIBUTING.md"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contributing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Pyrra. Open source under Apache 2.0 License.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/pyrra-dev/pyrra"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/pyrradev"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
