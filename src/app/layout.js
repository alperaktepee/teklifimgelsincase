import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/context/AuthContext";
const inter = Inter({ subsets: ["latin"] });
import "@/styles/globals.scss";

export const metadata = {
  title: "TeklifimGelsin Assignment",
  description: "TeklifimGelsin Assignment",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <html lang="en">
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQ6HJXNP');</script>
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
