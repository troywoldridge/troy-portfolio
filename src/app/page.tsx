// src/app/page.tsx
import "server-only";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
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

const FEATURED_PROJECTS: Project[] = [
  {
    title: "Benchmark Enterprises LLC",
    image: "/projects/benchmark-enterprises.png",
    subtitle: "Construction company website + digital experience",
    description:
      "A premium, responsive website designed to showcase construction work through strong visual storytelling and a polished customer experience.",
    badge: "Featured",
    bullets: [
      "Designed and developed the site from the ground up.",
      "Built responsive Home, Our Work, and Contact experiences.",
      "Created a visual project gallery focused on craftsmanship and presentation.",
      "Implemented accessible navigation, focus states, reduced-motion support, and SEO foundations.",
    ],
    stack: ["Next.js", "React", "TypeScript", "CSS", "Responsive Design", "Accessibility", "SEO"],
    links: [
      { label: "View Live Demo", href: "https://benchmark.troywoldridge.com" },
      { label: "GitHub", href: "https://github.com/troywoldridge" },
    ],
  },
  {
    title: "Legendary Collectibles",
    image: "/projects/legendary-collectibles.png",
    subtitle: "Production e-commerce + collectibles platform",
    description:
      "A full-stack commerce platform built around a real retail operation, including catalog management, listings, checkout, payments, administration, and operational tooling.",
    badge: "Flagship",
    bullets: [
      "Built a database-driven storefront, catalog, and administrative workflows.",
      "Implemented cart, checkout, order handling, and Stripe payment integrations.",
      "Integrated Cloudflare for optimized image delivery and production infrastructure.",
      "Built server-side APIs and automation for pricing, listings, and operational workflows.",
    ],
    stack: ["Next.js", "React", "Node.js", "PostgreSQL", "Drizzle ORM", "Stripe", "Cloudflare"],
    links: [
      { label: "Visit Live Site", href: "https://legendary-collectibles.com" },
      { label: "GitHub", href: "https://github.com/troywoldridge" },
    ],
  },
];

const PROJECTS: Project[] = [
  {
    title: "Catalog + Pricing Sync Pipeline",
    subtitle: "Data automation + ETL",
    description:
      "Automation infrastructure for importing, normalizing, and maintaining large product and pricing datasets.",
    bullets: [
      "Built repeatable import and synchronization scripts.",
      "Normalized products, options, pricing rules, images, and categories.",
      "Added logging, error handling, and restart/resume patterns for long-running jobs.",
    ],
    stack: ["Node.js", "PostgreSQL", "SQL", "ETL", "Automation"],
    links: [{ label: "Contact for details", href: "#contact" }],
  },
  {
    title: "Admin Tools + AI Listing Workflow",
    subtitle: "Internal tools + structured AI workflows",
    description:
      "Internal tooling designed to generate structured listing content while keeping review and publishing under controlled business workflows.",
    bullets: [
      "Created admin interfaces and APIs for structured listing generation.",
      "Used validation rules and schemas to keep output consistent.",
      "Designed review and apply workflows before changes reach the catalog.",
    ],
    stack: ["Next.js", "TypeScript", "LLM Integration", "PostgreSQL", "JSON Schema"],
    links: [{ label: "Contact for details", href: "#contact" }],
  },
];

const EXPERIENCE: Experience[] = [
  {
    title: "Founder / Full Stack Developer",
    org: "Legendary Collectibles",
    dates: "2024 — Present",
    bullets: [
      "Designed, built, deployed, and operated a production web platform across frontend, backend, database, integrations, and infrastructure.",
      "Built systems around real retail requirements including catalog management, listings, checkout, payments, and administration.",
      "Managed performance, SEO, deployments, data workflows, and ongoing reliability improvements.",
    ],
  },
  {
    title: "Owner / Operator",
    org: "Benchmark Enterprises LLC",
    dates: "10+ years",
    bullets: [
      "Managed day-to-day business operations including estimating, scheduling, AR/AP, payroll, client relationships, and project delivery.",
      "Used QuickBooks, Excel, and Google Sheets to manage financial and operational information.",
      "Built a deep understanding of how technology can solve practical business and workflow problems.",
    ],
  },
];

const SKILLS: { group: string; description: string; items: string[] }[] = [
  {
    group: "Frontend",
    description: "Interfaces built for clarity, performance, and real users.",
    items: ["Next.js", "React", "TypeScript", "HTML", "CSS", "Responsive UI", "SEO"],
  },
  {
    group: "Backend",
    description: "Server-side systems and integrations that keep applications moving.",
    items: ["Node.js", "REST APIs", "Server Rendering", "Authentication", "Integrations"],
  },
  {
    group: "Data",
    description: "Structured data systems designed around real business requirements.",
    items: ["PostgreSQL", "SQL", "Drizzle ORM", "Schema Design", "Data Modeling"],
  },
  {
    group: "Cloud & Ops",
    description: "Deployment and infrastructure experience beyond the code itself.",
    items: ["Linux", "PM2", "Cloudflare", "Deployments", "Logging", "Production Ops"],
  },
  {
    group: "E-commerce",
    description: "Commerce systems built around an actual operating business.",
    items: ["Stripe", "Catalogs", "Listings", "Cart Systems", "Checkout", "Order Workflows"],
  },
  {
    group: "Automation & AI",
    description: "Automation that reduces repetitive work and improves data quality.",
    items: ["ETL", "Scripting", "LLM Integration", "JSON Schema", "Data Pipelines"],
  },
];

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="tagRow" aria-label="Technology stack">
      {tags.map((tag) => (
        <span key={tag} className="tag">
          {tag}
        </span>
      ))}
    </div>
  );
}

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container heroInner">
          <div className="heroContent">
            <div className="eyebrow">
              <span className="statusDot" />
              Available for opportunities
            </div>

            <p className="heroKicker">
              FULL-STACK DEVELOPER · E-COMMERCE · AUTOMATION
            </p>

            <h1 className="headline">
              I build software that
              <span> solves real business problems.</span>
            </h1>

            <p className="subhead">
              I’m Troy Woldridge, a full-stack developer who builds and operates
              production web applications, e-commerce platforms, data systems,
              and business automation.
            </p>

            <div className="heroActions">
              <a className="btn primary" href="#projects">
                Explore My Work
                <span aria-hidden="true">↗</span>
              </a>

              <a className="btn" href="#contact">
                Let’s Connect
              </a>
            </div>

            <div className="heroTech">
              <span>Currently building with</span>
              <strong>Next.js</strong>
              <span>·</span>
              <strong>PostgreSQL</strong>
              <span>·</span>
              <strong>TypeScript</strong>
            </div>
          </div>

          <div className="heroAside">
            <div className="heroPanel">
              <div className="panelLabel">What I bring</div>

              <div className="heroFeature">
                <span className="featureNumber">01</span>
                <div>
                  <strong>Full-stack ownership</strong>
                  <p>From interface to database, deployment, and production.</p>
                </div>
              </div>

              <div className="heroFeature">
                <span className="featureNumber">02</span>
                <div>
                  <strong>Business perspective</strong>
                  <p>I understand the operational problems behind the software.</p>
                </div>
              </div>

              <div className="heroFeature">
                <span className="featureNumber">03</span>
                <div>
                  <strong>Real production experience</strong>
                  <p>Built for actual customers, transactions, and workflows.</p>
                </div>
              </div>

              <div className="panelFooter">
                <span>Based in the U.S.</span>
                <span>Remote-ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section id="projects" className="section featuredSection">
        <div className="container">
          <div className="sectionIntro">
            <div>
              <p className="sectionEyebrow">Selected work</p>
              <h2>Featured Projects</h2>
            </div>
            <p>
              Real websites and production systems built from the ground up.
            </p>
          </div>

          <div className="featuredProjects">
            {FEATURED_PROJECTS.map((project, index) => (
              <article key={project.title} className="featuredProject">
                <div className="featuredImageWrap">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} project preview`}
                      className="featuredImage"
                    />
                  ) : null}

                  <span className="projectIndex">
                    0{index + 1}
                  </span>
                </div>

                <div className="featuredContent">
                  <div className="projectHeading">
                    <div>
                      <p className="projectEyebrow">{project.badge}</p>
                      <h3>{project.title}</h3>
                      <p className="projectSubtitle">{project.subtitle}</p>
                    </div>
                  </div>

                  <p className="projectDescription">
                    {project.description}
                  </p>

                  <ul className="bullets">
                    {project.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>

                  <TagRow tags={project.stack} />

                  <div className="projectLinks">
                    {project.links.map((link) => (
                      <ExternalLink
                        key={link.href + link.label}
                        href={link.href}
                        className="projectLink"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </ExternalLink>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="section capabilitiesSection">
        <div className="container">
          <div className="sectionIntro centered">
            <p className="sectionEyebrow">Capabilities</p>
            <h2>What I Build</h2>
            <p>
              I enjoy working where software meets real-world operations,
              especially systems that need to be reliable, maintainable, and
              useful to a business.
            </p>
          </div>

          <div className="capabilityGrid">
            <div className="capabilityCard">
              <span className="capabilityIcon">01</span>
              <h3>E-commerce Platforms</h3>
              <p>
                Catalogs, listings, carts, checkout, payments, orders, and
                merchant workflows.
              </p>
            </div>

            <div className="capabilityCard">
              <span className="capabilityIcon">02</span>
              <h3>Business Applications</h3>
              <p>
                Admin systems, dashboards, APIs, integrations, and tools built
                around practical business needs.
              </p>
            </div>

            <div className="capabilityCard">
              <span className="capabilityIcon">03</span>
              <h3>Data & Automation</h3>
              <p>
                Import pipelines, synchronization, normalization, scripting,
                and repetitive-work automation.
              </p>
            </div>

            <div className="capabilityCard">
              <span className="capabilityIcon">04</span>
              <h3>Production Infrastructure</h3>
              <p>
                Linux environments, deployments, Cloudflare, process
                management, monitoring, and reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OTHER PROJECTS */}
      <section className="section">
        <div className="container">
          <div className="sectionIntro">
            <div>
              <p className="sectionEyebrow">Behind the scenes</p>
              <h2>Systems & Automation</h2>
            </div>
            <p>
              Supporting systems that make larger applications work.
            </p>
          </div>

          <div className="systemGrid">
            {PROJECTS.map((project) => (
              <article key={project.title} className="systemCard">
                <div className="systemNumber">↳</div>
                <h3>{project.title}</h3>
                <p className="systemSubtitle">{project.subtitle}</p>
                <p className="systemDescription">{project.description}</p>

                <ul className="bullets">
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <TagRow tags={project.stack} />

                <div className="projectLinks">
                  {project.links.map((link) => (
                    <a key={link.href} href={link.href} className="projectLink">
                      {link.label} <span aria-hidden="true">→</span>
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skillsSection">
        <div className="container">
          <div className="sectionIntro centered">
            <p className="sectionEyebrow">Technology</p>
            <h2>Technical Skills</h2>
            <p>
              A practical stack focused on building, shipping, and maintaining
              production systems.
            </p>
          </div>

          <div className="skillsGrid">
            {SKILLS.map((skill) => (
              <article key={skill.group} className="skillCard">
                <h3>{skill.group}</h3>
                <p>{skill.description}</p>
                <TagRow tags={skill.items} />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experienceSection">
        <div className="container">
          <div className="sectionIntro">
            <div>
              <p className="sectionEyebrow">Background</p>
              <h2>Experience</h2>
            </div>
            <p>
              Technology experience backed by years of real business
              responsibility.
            </p>
          </div>

          <div className="experienceList">
            {EXPERIENCE.map((experience, index) => (
              <article
                key={experience.title + experience.org}
                className="experienceItem"
              >
                <div className="experienceNumber">
                  0{index + 1}
                </div>

                <div className="experienceMain">
                  <div className="experienceHeading">
                    <div>
                      <h3>{experience.title}</h3>
                      <p>{experience.org}</p>
                    </div>
                    <span>{experience.dates}</span>
                  </div>

                  <ul className="bullets">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* RESUME CTA */}
      <section className="resumeCta">
        <div className="container resumeCtaInner">
          <div>
            <p className="sectionEyebrow">Want the details?</p>
            <h2>Take a closer look at my experience.</h2>
            <p>
              Download my resume or reach out directly to talk about an
              opportunity.
            </p>
          </div>

          <div className="resumeActions">
            <a className="btn primary" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume <span aria-hidden="true">↗</span>
            </a>
            <a className="btn" href="/resume-full.pdf" target="_blank" rel="noreferrer">
              Full Resume
            </a>
            <a className="btn" href="/cover-letter.pdf" target="_blank" rel="noreferrer">
              Cover Letter
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contactSection">
        <div className="container">
          <div className="contactPanel">
            <div className="contactMain">
              <p className="sectionEyebrow">Get in touch</p>
              <h2>Let’s build something useful.</h2>
              <p>
                If you're looking for someone who can understand the business
                problem, build the software, and help get it into production,
                I’d love to hear from you.
              </p>

              <a
                className="contactEmail"
                href="mailto:troy.woldridge.1@gmail.com"
              >
                troy.woldridge.1@gmail.com
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="contactLinks">
              <ExternalLink
                href="https://www.linkedin.com/in/troy-woldridge-9b7b49b1"
                className="contactLink"
              >
                <span>LinkedIn</span>
                <span aria-hidden="true">↗</span>
              </ExternalLink>

              <ExternalLink
                href="https://github.com/troywoldridge"
                className="contactLink"
              >
                <span>GitHub</span>
                <span aria-hidden="true">↗</span>
              </ExternalLink>

              <ExternalLink
                href="https://legendary-collectibles.com"
                className="contactLink"
              >
                <span>Legendary Collectibles</span>
                <span aria-hidden="true">↗</span>
              </ExternalLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
