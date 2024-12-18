"use client";
import Header from "@/components/header/Header";
import Sidebar from "@/components/sidebar/Sidebar";
<<<<<<< HEAD
import { useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(true);
=======
import {useState} from "react";

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
  const toogleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
<<<<<<< HEAD
    <section id="dashboard" className="flex w-full overflow-hidden h-screen">
      <Sidebar menuOpen={menuOpen} toogleMenu={toogleMenu} />
      <main className="flex-grow overflow-y-auto">
        <Header toogleMenu={toogleMenu} menuOpen={menuOpen} />
        <div className="p-5 mt-10">{children}</div>
=======
    <section id="dashboard">
      <Sidebar menuOpen={menuOpen} toogleMenu={toogleMenu} />
      <main className="flex-grow">
        <Header toogleMenu={toogleMenu} menuOpen={menuOpen} />
        <div className="p-5">
          {children}
        </div>
        
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
      </main>
    </section>
  );
};

export default DashboardLayout;
