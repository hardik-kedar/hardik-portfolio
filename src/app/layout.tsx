import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "../components/providers/SmoothScroll"; 
export const metadata: Metadata = {
  title: "Hardik Kedar",
  description: "Premium Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

  <SmoothScroll>
    {children}
  </SmoothScroll>

</body>
    </html>
  );
}