import React from "react";
import Footer from "../footer/Footer";
import NavBar from "../navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <main className="py-32 px-16 bg-gray-100">{children}</main>
      <Footer />
    </>
  );
}
