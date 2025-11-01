export function TrustedBySection() {
  const companies = [
    { name: "Grafana Labs", url: "https://grafana.com", logo: "/grafana-labs-logo.jpg" },
    { name: "GitLab", url: "https://gitlab.com", logo: "/gitlab-logo.png" },
    { name: "Shopify", url: "https://shopify.com", logo: "/shopify-logo.png" },
    { name: "Spotify", url: "https://spotify.com", logo: "/spotify-logo.png" },
    { name: "Cloudflare", url: "https://cloudflare.com", logo: "/cloudflare-logo.jpg" },
    { name: "DigitalOcean", url: "https://digitalocean.com", logo: "/digitalocean-logo.png" },
  ]

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Alert on their SLOs in production using Pyrra
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by teams running mission-critical infrastructure
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12 items-center justify-items-center">
          {companies.map((company) => (
            <a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-all duration-300 hover:scale-110"
              aria-label={`Visit ${company.name}`}
            >
              <img
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                className="h-12 w-auto object-contain opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
              />
            </a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">Join hundreds of teams monitoring their SLOs with Pyrra</p>
        </div>
      </div>
    </section>
  )
}
