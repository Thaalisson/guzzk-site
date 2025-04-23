"use client";
import { useState, useEffect } from "react";
import SplashScreen from "../components/SplashScreen.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000);
  }, []);

  return (
    <html lang="en">
      <body>
        {loading ? <SplashScreen /> : <>
          <Navbar />
          {children}
          <Footer />
        </>}
      </body>
    </html>
  );
}
