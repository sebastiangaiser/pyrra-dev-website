import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">P</span>
          </div>
          <span className="font-bold text-xl">Pyrra</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
            How It Works
          </Link>
          <Link href="https://demo.pyrra.dev" className="text-sm font-medium hover:text-primary transition-colors">
            Demo
          </Link>
          <Link
            href="https://github.com/pyrra-dev/pyrra"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Docs
          </Link>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/pyrra-dev/pyrra" target="_blank">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="https://demo.pyrra.dev">Try Demo</Link>
          </Button>
        </div>
      </div>
    </nav>
  )
}
