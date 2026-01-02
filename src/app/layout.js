"use client";
import { useState, useEffect } from "react";
import "../styles/global.css";
import SplashScreen from "../components/SplashScreen.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { LanguageProvider } from "./lib/i18n";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {loading ? <SplashScreen /> : (
            <>
              <Navbar />
              {children}
              <Footer />
            </>
          )}
        </LanguageProvider>
      </body>
    </html>
  );
}
