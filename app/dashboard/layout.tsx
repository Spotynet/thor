"use client";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
import {useState} from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <section id="dashboard">
      <Sidebar menuOpen={menuOpen} toogleMenu={toogleMenu} />
      <main className="flex-grow">
        <Header toogleMenu={toogleMenu} menuOpen={menuOpen} />
        {children}
      </main>
    </section>
  );
};

export default DashboardLayout;
