"use client";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section id="dashboard" className="flex w-full overflow-hidden h-screen">
      <Sidebar menuOpen={menuOpen} toogleMenu={toogleMenu} />
      <main className="flex-grow overflow-y-auto">
        <Header toogleMenu={toogleMenu} menuOpen={menuOpen} />
        <div className="p-5 mt-10">{children}</div>
      </main>
    </section>
  );
};

export default DashboardLayout;
