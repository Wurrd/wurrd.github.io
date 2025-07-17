import '../styles/globals.css';

export const metadata = {
  title: "Howard's Personal Website",
  description: 'A Next.js 14 + Tailwind site',
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