import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product",
  description: "PT Catur Utama Sejahtera Product",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
