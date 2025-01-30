import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.scss";
import Head from 'next/head';

export const metadata = {
  title: "TeklifimGelsin Assignment",
  description: "TeklifimGelsin Assignment",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
    <Head>
    </Head>
      <body className={inter.className}>
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NQ6HJXNP"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
          <Toaster position="top-center" />
              <nav>
             <Navbar />
          </nav>
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
