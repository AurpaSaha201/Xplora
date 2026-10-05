import "./globals.css";

export const metadata = {
  title: "Xplora — Extreme Adventure Travel",
  description: "Discover breathtaking mountains, forests, islands, and waterfalls with immersive animations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#090D16] text-white">
        {children}
      </body>
    </html>
  );
}