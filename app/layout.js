import '../styles/globals.css';

<title> Howard's Site </title>
export const metadata = {
  title: "Howard's Site",
  description: 'A Next.js 14 + Tailwind site',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
