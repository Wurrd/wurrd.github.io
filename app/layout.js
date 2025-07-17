import '../styles/globals.css';

export const metadata = {
  title: "Wurrd's Personal Website",
  description: "Next.js and Tailwindcss",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}