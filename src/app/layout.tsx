// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Troy Woldridge • Full Stack Developer",
  description:
    "Full Stack Developer building production-grade e-commerce platforms with Next.js, PostgreSQL, Stripe, and Cloudflare.",
  metadataBase: new URL("https://troywoldridge.com"),
  openGraph: {
    title: "Troy Woldridge • Full Stack Developer",
    description:
      "Full Stack Developer building production-grade e-commerce platforms with Next.js, PostgreSQL, Stripe, and Cloudflare.",
    url: "https://troywoldridge.com",
    siteName: "Troy Woldridge",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="bg" aria-hidden="true" />
        <header className="siteHeader">
          <div className="container headerInner">
            <a className="brand" href="#top" aria-label="Go to top">
              <span className="brandMark" aria-hidden="true">
                T
              </span>
              <span className="brandText">Troy Woldridge</span>
            </a>

            <nav className="nav">
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#experience">Experience</a>
              <a href="#contact" className="navCta">
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main id="top">{children}</main>

        <footer className="siteFooter">
          <div className="container footerInner">
            <p className="muted">
              © {new Date().getFullYear()} Troy Woldridge • Built with Next.js
            </p>
            <div className="footerLinks">
              <a href="#top">Back to top</a>
              <span className="dot" aria-hidden="true">
                •
              </span>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
