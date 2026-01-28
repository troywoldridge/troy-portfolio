// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://troywoldridge.com";
const SITE_NAME = "Troy Woldridge";
const TITLE = "Troy Woldridge • Full Stack Developer";
const DESCRIPTION =
  "Full Stack Developer building production-grade e-commerce platforms with Next.js, PostgreSQL, Stripe, and Cloudflare.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: TITLE,
    template: "%s • Troy Woldridge",
  },

  description: DESCRIPTION,

  applicationName: SITE_NAME,

  authors: [{ name: "Troy Woldridge", url: SITE_URL }],

  generator: "Next.js",

  keywords: [
    "Troy Woldridge",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Stripe",
    "Cloudflare",
    "E-commerce",
    "Web Developer",
    "Software Developer",
    "ETL",
    "Automation",
  ],

  alternates: {
    canonical: SITE_URL,
  },

  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },

  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Troy Woldridge • Full Stack Developer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b1220",
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
