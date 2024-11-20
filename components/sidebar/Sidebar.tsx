"use client";
import {faBlog, faNewspaper, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Image from "next/image";
import SiderbarCollapsible from "./SiderbarCollapsible";
import Module from "./Module";
import Link from "next/link";
type SidebarProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({menuOpen, toogleMenu}) => {
  return (
    <>
      <aside
        id="sidebar"
        className={`min-h-svh p-0 absolute left-0 lg:relative bg-foreground z-[10] flex flex-col items-center justify-start
      ${menuOpen ? "w-[70%] lg:w-[25%]" : "collapsed"}`}>
        <div className="flex py-[10px] items-center justify-center text-white relative w-full">
          <Link href={"/dashboard"}>
            <Image
              src={"/images/logoText.png"}
              alt="Logo"
              width={200}
              height={50}
              className="w-[150px]"
            />
          </Link>
          <FontAwesomeIcon icon={faX} onClick={toogleMenu} className="absolute right-5 lg:hidden" />
        </div>

        <div className="divider"></div>

        <div id="areas">
          <SiderbarCollapsible icon={faNewspaper} text="Comunicaciones">
            <SiderbarCollapsible icon={faBlog} text="Noticias">
              <Module text="Blog" link="/dashboard/comunicaciones/noticias/blog" />
            </SiderbarCollapsible>
          </SiderbarCollapsible>
        </div>
      </aside>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="lg:hidden absolute h-svh w-full left-0 top-0 bg-foreground opacity-50 z-[1]"
          onClick={toogleMenu}
        />
      )}
    </>
  );
};

export default Sidebar;
