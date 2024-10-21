// src/app/layout.js
import './globals.css'; // Import global CSS for styling

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Your Website</title>
      </head>
      <body>
        {children} {/* Render the content of the specific page here */}
      </body>
    </html>
  );
}
