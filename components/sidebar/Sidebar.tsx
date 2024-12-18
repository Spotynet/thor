"use client";
<<<<<<< HEAD
import { faBlog, faX, faEarth } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
=======
import {faBlog, faNewspaper, faX} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
import Image from "next/image";
import SiderbarCollapsible from "./SiderbarCollapsible";
import Module from "./Module";
import Link from "next/link";
type SidebarProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

<<<<<<< HEAD
const Sidebar: React.FC<SidebarProps> = ({ menuOpen, toogleMenu }) => {
=======
const Sidebar: React.FC<SidebarProps> = ({menuOpen, toogleMenu}) => {
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
  return (
    <>
      <aside
        id="sidebar"
        className={`min-h-svh p-0 absolute left-0 lg:relative bg-secondary z-[10] flex flex-col items-center justify-start
<<<<<<< HEAD
      ${menuOpen ? "w-[70%] lg:w-[17%]" : "collapsed"}`}
      >
=======
      ${menuOpen ? "w-[70%] lg:w-[17%]" : "collapsed"}`}>
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
        <div className="flex py-[10px] items-center justify-center text-white relative w-full">
          <Link href={"/dashboard"}>
            <Image
              src={"/images/logoText.png"}
              alt="Logo"
              width={220}
              height={60}
              className="w-[175px]"
            />
          </Link>
<<<<<<< HEAD
          <FontAwesomeIcon
            icon={faX}
            onClick={toogleMenu}
            className="absolute right-5 lg:hidden"
          />
=======
          <FontAwesomeIcon icon={faX} onClick={toogleMenu} className="absolute right-5 lg:hidden" />
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
        </div>

        <div className="divider"></div>

        <div id="areas">
<<<<<<< HEAD
          <SiderbarCollapsible
            icon="/images/RRHH_icon.png"
            text="Recursos Humanos"
          >
            <SiderbarCollapsible icon={faBlog} text="Comunicaciones">
              <Module
                text="Newsletter"
                link="/dashboard/recursos_humanos/comunicaciones/newsletter"
              />
              <Module
                text="Gaceta"
                link="/dashboard/recursos_humanos/comunicaciones/newsletter"
              />
              <Module
                text="Directorio"
                link="/dashboard/recursos_humanos/comunicaciones/newsletter"
              />
              <Module
                text="Materiales Corporativos"
                link="/dashboard/recursos_humanos/comunicaciones/newsletter"
              />
            </SiderbarCollapsible>
            <SiderbarCollapsible icon={faEarth} text="Reclutamiento">
              <Module
                text="Colaboradores"
                link="/dashboard/recursos_humanos/reclutamiento/colaboradores"
              />
            </SiderbarCollapsible>
          </SiderbarCollapsible>
        </div>
        <p className="absolute left-auto right-auto bottom-5 text-xs">
          Powered by Spotynet
        </p>
=======
          <SiderbarCollapsible icon={faNewspaper} text="Comunicaciones">
            <SiderbarCollapsible icon={faBlog} text="Noticias">
              <Module text="Blog" link="/dashboard/comunicaciones/noticias/blog" />
            </SiderbarCollapsible>
          </SiderbarCollapsible>
        </div>
        <p className="absolute left-auto right-auto bottom-5 text-xs">Powered by Spotynet</p>
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
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
