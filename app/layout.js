import '../styles/globals.css';

export const metadata = {
  title: "Your Site Title",
  description: "Your site description",
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