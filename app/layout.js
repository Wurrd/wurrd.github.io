import '../styles/globals.css';

export const metadata = {
  title: 'Your Site Title',
  description: 'A Next.js 14 + Tailwind site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
