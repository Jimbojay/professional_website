// src/app/layout.js
import './globals.css'; // Import global CSS for styling

// Metadata for the entire site
// Define the metadata object for this page
export const metadata = {
  title: "ID Data Solutions | T-shaped Data Professional",
  description: "With 15 years of experience I combine sound business acumen, excellent analytical- and cross-functional communication skills in Data Management, Data Governance, Project Management, Web3 & Blockchain and more.",
  keywords: ["Data Management", "Data Governance", "Project Management", "Web3", "Programming", "Blockchain development", "Business Intelligence", "Analytics", "Product Data Expert", "Imre Dekker", "ID Data Solutions", "IDDataSolutions"],
  openGraph: {
    title: "ID Data Solutions | Next-Gen Data Lead",
    description: "All things data; Management, Governance, Project Managment Blockchain/Web3, BI & Analytics and Product Data.",
    url: "https://www.iddatasolutions.nl",
    images: [
      {
        url: "https://www.iddataolutions.nl/public/assets/images/Banner.png",
        width: 800,
        height: 600,
        alt: "Banner ID Data Solutions",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Dynamic metadata handled automatically by Next.js */}
      </head>
      <body>
        {children} {/* Render the content of the specific page here */}
      </body>
    </html>
  );
}
