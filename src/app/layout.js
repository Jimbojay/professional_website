// src/app/layout.js
import './globals.css'; // Import global CSS for styling

// Metadata for the entire site
export const metadata = {
  title: "ID Data Solutions | T-shaped Data Professional",
  description:
    "With 15 years of experience I combine sound business acumen, excellent analytical and cross-functional communication skills in Data Management, Data Governance, Project Management, Web3 & Blockchain, and more.",
  keywords: [
    "Data Management",
    "Data Governance",
    "Project Management",
    "Web3",
    "Programming",
    "Blockchain development",
    "Business Intelligence",
    "Analytics",
    "Product Data Expert",
    "Imre Dekker",
    "ID Data Solutions",
    "IDDataSolutions",
  ],
  icons: {
    icon: '/assets/images/Logo.png', // Use absolute path
  },
  openGraph: {
    title: "ID Data Solutions | Next-Gen Data Lead",
    description: "All things data; Management, Governance, Project Management, Blockchain/Web3, BI & Analytics, and Product Data.",
    url: "https://www.iddatasolutions.nl",
    images: [
      {
        url: "https://www.iddatasolutions.nl/public/assets/images/Banner.png",
        width: 800,
        height: 600,
        alt: "Banner ID Data Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NextGenDataLead",
    title: "ID Data Solutions",
    description: "Specializing in Data Management, Governance, and Web3 Development.",
    images: [
      "https://yourwebsite.com/assets/images/Logo.png",
    ],
  },
  alternates: {
    canonical: "https://www.iddatasolutions.nl",
  },
  // Structured data
  additionalMetaTags: [
    {
      name: "application/ld+json",
      content: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "ID Data Solutions",
        url: "https://www.iddatasolutions.nl",
        logo: "https://www.iddatasolutions.nl/assets/images/Logo.png",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+31613454378",
          contactType: "Customer Support",
          areaServed: ["NL", "BE", "DE"],
          availableLanguage: ["English", "Dutch"],
        },
        sameAs: [
          "https://www.linkedin.com/in/imredekker/",
          "https://x.com/NextGenDataLead",
          "https://github.com/NextGenDataLead",
        ],
      }),
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children} {/* Render the content of the specific page here */}
      </body>
    </html>
  );
}
