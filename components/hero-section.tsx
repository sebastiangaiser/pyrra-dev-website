"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [availability, setAvailability] = useState(100)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrolled = window.scrollY
      const progress = Math.min(scrolled / heroHeight, 1)
      setScrollProgress(progress)

      // Animate availability from 100% to 99% based on scroll
      const newAvailability = 100 - progress * 1
      setAvailability(Math.max(99, newAvailability))
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const getAvailabilityColor = () => {
    if (availability >= 99.5) return "text-accent"
    if (availability >= 99) return "text-warning"
    return "text-destructive"
  }

  // Calculate error budget using Pyrra's algorithm
  // Based on: https://github.com/pyrra-dev/pyrra/blob/main/ui/src/components/tiles/ErrorBudgetTile.tsx#L36-L38
  const objectiveTarget = 0.995 // 99.5% as decimal
  const budget = 1 - objectiveTarget // 0.005 = 0.5% error budget
  const availabilityDecimal = availability / 100 // Convert percentage to decimal
  const unavailability = 1 - availabilityDecimal // Actual unavailability
  const availableBudget = (budget - unavailability) / budget // Percentage of error budget remaining
  const errorBudgetRemaining = availableBudget * 100 // Convert to percentage

  const getErrorBudgetColor = () => {
    if (errorBudgetRemaining >= 80) return "text-accent"
    if (errorBudgetRemaining >= 50) return "text-warning"
    return "text-destructive"
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 md:pt-40 pb-32 md:pb-40">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            Stop hand-rolling SLOs for <span className="text-primary">Prometheus</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 text-balance max-w-3xl mx-auto">
            Define your objectives in YAML. Pyrra generates the recording rules, multi-window burn rate alerts, and dashboards. You ship reliability, not PromQL.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 mb-12">
            <span className="text-sm text-muted-foreground">Supports out of the box:</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <img
                src="/prometheus-logo.svg"
                alt="Prometheus"
                title="Prometheus"
                className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/thanos-logo.svg"
                alt="Thanos"
                title="Thanos"
                className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <img
                src="/mimir-logo.svg"
                alt="Mimir"
                title="Mimir"
                className="h-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            {/* Objective Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  SLO Objective
                </div>
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2 break-words">99.5%</div>
                <div className="text-sm text-muted-foreground">Target Availability</div>
              </div>
            </div>

            {/* Availability Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Current Availability
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 break-words ${getAvailabilityColor()}`}
                >
                  {availability.toFixed(2)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {availability >= 99.5 ? "Excellent" : availability >= 99 ? "Good" : "At Risk"}
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative bg-card border border-border rounded-2xl p-8 backdrop-blur-sm">
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Error Budget
                </div>
                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 transition-colors duration-300 break-words ${getErrorBudgetColor()}`}
                >
                  {errorBudgetRemaining.toFixed(1)}%
                </div>
                <div className="text-sm text-muted-foreground">
                  {errorBudgetRemaining >= 80 ? "Healthy" : errorBudgetRemaining >= 50 ? "Moderate" : "Critical"}
                </div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8" asChild>
              <Link href="https://github.com/pyrra-dev/pyrra#readme">
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 bg-transparent" asChild>
              <Link href="https://demo.pyrra.dev">
                Try Live Demo
              </Link>
            </Button>
          </div>

          <div className="mt-16">
            <p className="text-sm text-muted-foreground mb-6">Used in production by</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <a
                href="https://www.polarsignals.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="Visit Polar Signals"
              >
                <img
                  src="/polarsignals.svg"
                  alt="Polar Signals logo"
                  className="h-8 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
              <a
                href="https://www.hetzner.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group transition-all duration-300 hover:scale-110"
                aria-label="Visit Hetzner"
              >
                <img
                  src="/hetzner-logo-slogan_white_space-red.svg"
                  alt="Hetzner logo"
                  className="h-8 w-auto object-contain opacity-40 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
