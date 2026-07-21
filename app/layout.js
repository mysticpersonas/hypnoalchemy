import './globals.css';

export const metadata = {
  title: 'HypnoAlchemy® — Identity-Level Reintegration & Trauma Care',
  description:
    'Trauma doesn’t heal in isolation. It heals when you are safely supported. Steady, 1:1 identity-level reintegration with Dr. Travis Fox and Michelle Fox.',
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080d14',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
