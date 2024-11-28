import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./component/header";
import Footer from "./component/footer";
import Script from "next/script";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "eclaw",
  description: "Generated by create next app",
};

export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Ensure that the incoming `locale` is valid
 
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale || 'mn'}>
      
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div id="wrap">
            <Header/>
            {children}
            <Footer />
          </div>
          <Script src="/static/js/scripts.js" />
          {/* Optional additional scripts */}
          <Script src="/static/js/redactor/fontcolor.js" />
          <Script src="/static/js/redactor/fontsize.js" />
          <Script src="/static/js/redactor/fullscreen.js" />
          <Script src="/static/js/redactor/table.js" />
          <Script src="/static/js/redactor/fontfamily.js" />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}



