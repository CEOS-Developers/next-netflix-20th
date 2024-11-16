import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Netflix Assignment",
  description: "Netflix Assignment",
  icons: {
    icon: '/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className="overflow-y-auto">
        {children}
      </body>
    </html>
  );
}
