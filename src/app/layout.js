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
        <body className={inter.className}>
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
