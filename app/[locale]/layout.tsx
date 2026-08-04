import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "@/i18n";
import "@/app/[locale]/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { CartProvider } from "@/lib/cart/CartContext";
import { FlyProvider } from "@/lib/cart/FlyContext";
import { CartDrawer } from "@/components/layout/CartDrawer";
import { FloatingCart } from "@/components/layout/FloatingCart";
import { FlyingItem } from "@/components/layout/FlyingItem";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html lang={locale}>
        <head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </head>
        <body className="min-h-screen flex flex-col">
          <CartProvider>
            <FlyProvider>
              <Header />
              <main className="flex-1">{children}</main>
              <Footer />
              <WhatsAppButton />
              <FloatingCart />
              <CartDrawer />
              <FlyingItem />
            </FlyProvider>
          </CartProvider>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}