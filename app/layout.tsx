import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cerita Meramuda — Artisan Tea, Kopi & Hampers",
  description:
    "Cerita Meramuda (CMM) menghadirkan teh artisan, kopi, minuman dingin, dan hampers dari kekayaan rasa Nusantara.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}