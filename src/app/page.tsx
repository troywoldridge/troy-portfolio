// src/app/page.tsx
import "server-only";

type Project = {
  title: string;
  subtitle: string;
  bullets: string[];
  stack: string[];
  links: { label: string; href: string }[];
  badge?: string;
};

type Experience = {
  title: string;
  org: string;
  dates: string;
  bullets: string[];
};

const PROJECTS: Project[] = [
  {
    title: "Legendary Collectibles",
    subtitle: "Production e-commerce + collectibles platform (full-stack)",
    badge: "Flagship",
    bullets: [
      "Built a database-driven product catalog, admin tools, and customer storefront with SEO-friendly pages.",
      "Implemented checkout/payments flow with Stripe and modern order handling patterns.",
      "Integrated Cloudflare Images for optimized, variant-based image delivery.",
      "Built API routes and server logic for pricing, listings workflows, and operational tooling.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Drizzle ORM", "Stripe", "Cloudflare", "Linux"],
    links: [
      { label: "Live Site", href: "https://legendary-collectibles.com" },
      { label: "GitHub", href: "https://github.com/troywoldridge" },
    ],
  },
  {
    title: "Catalog + Pricing Sync Pipeline",
    subtitle: "Automation scripts for importing, normalizing, and updating product data",
    bullets: [
      "Built repeatable sync scripts to ingest product/pricing data into Postgres and keep it up to date.",
      "Normalized data for consistent querying (products, options, pricing rules, images, categories).",
      "Added error handling and restart/resume patterns to support long-running jobs.",
    ],
    stack: ["Node.js", "PostgreSQL", "SQL", "ETL", "Logging/Monitoring"],
    links: [{ label: "Contact for details", href: "#contact" }],
  },
  {
    title: "Admin Tools + AI Listing Workflow",
    subtitle: "Internal tooling to generate structured listings and improve catalog quality",
    bullets: [
      "Created admin UI and APIs to generate listing content using structured schemas and validation rules.",
      "Designed guardrails for factual, marketplace-safe output and consistent formatting.",
      "Built apply/review flow to safely publish changes to the catalog.",
    ],
    stack: ["Next.js", "TypeScript", "OpenAI/LLM", "PostgreSQL", "JSON Schema"],
    links: [{ label: "Contact for details", href: "#contact" }],
  },
];

const EXPERIENCE: Experience[] = [
  {
    title: "Founder / Full Stack Developer",
    org: "Legendary Collectibles",
    dates: "2024 — Present",
    bullets: [
      "Designed, built, and deployed a production web platform end-to-end (frontend, backend, database, ops).",
      "Managed integrations, performance, SEO, and reliability improvements for real users.",
    ],
  },
  {
    title: "Owner / Operator",
    org: "Benchmark Enterprises LLC (Construction)",
    dates: "10+ years",
    bullets: [
      "Ran day-to-day operations including AR/AP, payroll, estimating, scheduling, and client management.",
      "Maintained financial records using QuickBooks and Excel/Google Sheets; delivered projects on deadlines.",
      "Sold the business to relocate closer to family for medical support needs.",
    ],
  },
];

const SKILLS: { group: string; items: string[] }[] = [
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "SEO"] },
  { group: "Backend", items: ["Node.js", "REST APIs", "Auth patterns", "Server rendering", "Integrations"] },
  { group: "Database", items: ["PostgreSQL", "SQL", "Drizzle ORM", "Schema design", "Performance-minded querying"] },
  { group: "Cloud & Ops", items: ["Linux", "PM2", "Deployments", "Logging", "Cloudflare (Images/CDN)"] },
  { group: "E-commerce", items: ["Stripe", "Catalog systems", "Checkout flows", "Merchant-ready product thinking"] },
  { group: "Automation / AI", items: ["ETL pipelines", "Scripting", "LLM integration", "Schema-driven output"] },
];

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="tagRow" aria-label="Technology stack">
      {tags.map((t) => (
        <span key={t} className="tag">
          {t}
        </span>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="container heroInner">
          <div className="heroLeft">
            <p className="kicker">Full Stack Developer • E-commerce Systems • Automation</p>
            <h1 className="headline">I build production-grade web apps that power catalogs, checkout, and admin workflows.</h1>
            <p className="subhead">
              I’ve built and deployed real systems with <strong>Next.js</strong>, <strong>PostgreSQL</strong>,{" "}
              <strong>Stripe</strong>, and <strong>Cloudflare</strong> — focused on clean UX, strong data models, and
              reliable operations.
            </p>

            <div className="ctaRow">
              <a className="btn primary" href="#projects">
                View Projects
              </a>
              <a className="btn" href="#contact">
                Contact
              </a>
              <a className="btn ghost" href="/resume.pdf" target="_blank" rel="noreferrer">
                Resume (1 page)
              </a>
              <a className="btn ghost" href="/resume-full.pdf" target="_blank" rel="noreferrer">
                Full Resume
              </a>
              <a className="btn ghost" href="/cover-letter.pdf" target="_blank" rel="noreferrer">
                Cover Letter
              </a>
            </div>

            <div className="heroMeta">
              <div className="metaCard">
                <div className="metaLabel">Primary Stack</div>
                <div className="metaValue">Next.js • Node.js • PostgreSQL</div>
              </div>
              <div className="metaCard">
                <div className="metaLabel">Strengths</div>
                <div className="metaValue">E-commerce • Integrations • Automation</div>
              </div>
              <div className="metaCard">
                <div className="metaLabel">Location</div>
                <div className="metaValue">US (Remote-ready)</div>
              </div>
            </div>
          </div>

          <div className="heroRight">
            <div className="card proof">
              <div className="proofHeader">
                <div className="proofTitle">What I can help with</div>
                <div className="proofBadge">Ready now</div>
              </div>
              <ul className="checklist">
                <li>Full stack features from idea → production</li>
                <li>E-commerce checkout + Stripe integration</li>
                <li>Database-driven product catalogs + admin tools</li>
                <li>Shipping/cart estimation + operational endpoints</li>
                <li>SEO + merchant-ready product feed thinking</li>
                <li>Automation scripts + data pipelines</li>
              </ul>

              <div className="miniLinks">
                <a href="https://legendary-collectibles.com" target="_blank" rel="noreferrer">
                  legendary-collectibles.com
                </a>
                <span className="dot" aria-hidden="true">
                  •
                </span>
                <a href="https://github.com/troywoldridge" target="_blank" rel="noreferrer">
                  github.com/troywoldridge
                </a>
              </div>
            </div>

            <div className="card note">
              <div className="noteTitle">Quick note</div>
              <p className="noteText">
                I’m especially strong in roles where the company needs someone who can build <strong>and</strong> operate
                real systems (deployment, data, integrations, and reliability).
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Projects</h2>
          </div>

          <div className="grid">
            {PROJECTS.map((p) => (
              <article key={p.title} className="card project">
                <div className="projectTop">
                  <div>
                    <div className="projectTitleRow">
                      <h3>{p.title}</h3>
                      {p.badge ? <span className="pill">{p.badge}</span> : null}
                    </div>
                    <p className="projectSubtitle">{p.subtitle}</p>
                  </div>
                </div>

                <ul className="bullets">
                  {p.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <TagRow tags={p.stack} />

                <div className="linkRow">
                  {p.links.map((l) => (
                    <a
                      key={l.href + l.label}
                      className="link"
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {l.label} →
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section alt">
        <div className="container">
          <div className="sectionHeader">
            <h2>Skills</h2>
          </div>

          <div className="skillsGrid">
            {SKILLS.map((g) => (
              <div key={g.group} className="card skillCard">
                <h3 className="skillTitle">{g.group}</h3>
                <div className="tagRow">
                  {g.items.map((i) => (
                    <span key={i} className="tag">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section">
        <div className="container">
          <div className="sectionHeader">
            <h2>Experience</h2>
            <p className="muted">A mix of technical delivery and real business operations.</p>
          </div>

          <div className="timeline">
            {EXPERIENCE.map((e) => (
              <div key={e.title + e.org} className="card timelineItem">
                <div className="timelineTop">
                  <div className="timelineTitle">
                    <h3>{e.title}</h3>
                    <p className="muted">{e.org}</p>
                  </div>
                  <div className="timelineDates">{e.dates}</div>
                </div>

                <ul className="bullets">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="section alt">
        <div className="container">
          <div className="sectionHeader">
            <h2>Contact</h2>
            <p className="muted">Let’s connect — I reply quickly.</p>
          </div>

          <div className="contactGrid">
            <div className="card contactCard">
              <h3>Fastest way</h3>
              <p className="muted">Email me and I’ll reply quickly.</p>

              <div className="contactRow">
                <span className="contactLabel">Email</span>
                <a className="contactValue" href="mailto:troy.woldridge.1@gmail.com">
                  troy.woldridge.1@gmail.com
                </a>
              </div>

              <div className="contactRow">
                <span className="contactLabel">LinkedIn</span>
                <a
                  className="contactValue"
                  href="https://www.linkedin.com/in/troy-woldridge-9b7b49b1"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/troy-woldridge-9b7b49b1
                </a>
              </div>

              <div className="contactRow">
                <span className="contactLabel">GitHub</span>
                <a className="contactValue" href="https://github.com/troywoldridge" target="_blank" rel="noreferrer">
                  github.com/troywoldridge
                </a>
              </div>

              <div className="contactRow">
                <span className="contactLabel">Portfolio</span>
                <a className="contactValue" href="https://troywoldridge.com" target="_blank" rel="noreferrer">
                  troywoldridge.com
                </a>
              </div>

              <div className="contactRow">
                <span className="contactLabel">Downloads</span>
                <div className="contactValue contactValueLinks">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    Resume (1-page)
                  </a>
                  <span className="dot" aria-hidden="true">
                    •
                  </span>
                  <a href="/resume-full.pdf" target="_blank" rel="noreferrer">
                    Full Resume
                  </a>
                  <span className="dot" aria-hidden="true">
                    •
                  </span>
                  <a href="/cover-letter.pdf" target="_blank" rel="noreferrer">
                    Cover Letter
                  </a>
                </div>
              </div>
            </div>

            <div className="card contactCard">
              <h3>Quick message</h3>

              <div className="copyBox" role="group" aria-label="Quick outreach message">
                <p>
                  Hi — I’m Troy Woldridge, a Full Stack Developer focused on e-commerce systems (Next.js, PostgreSQL,
                  Stripe, Cloudflare). I built and deployed Legendary Collectibles end-to-end, including catalog/admin
                  workflows and integrations. I’m interested in the [Role] at [Company] and would love to connect.
                </p>
              </div>

              <div className="miniLinks">
                <a href="https://legendary-collectibles.com" target="_blank" rel="noreferrer">
                  View Legendary Collectibles →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
