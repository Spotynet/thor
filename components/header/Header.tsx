<<<<<<< HEAD
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCog,
  faEnvelope,
  faBars,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import HeaderSelect from "./HeaderSelect";
import { grupos, entidades } from "@/lib/constants/constants";
import { useState } from "react";
import { useRouter } from "next/navigation";
=======
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faCog, faEnvelope, faBars, faChevronLeft} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons/faChevronDown";
import HeaderSelect from "./HeaderSelect";
import {grupos, entidades} from "@/lib/constants/constants";
import {useState} from "react";
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c

type HeaderProps = {
  menuOpen: boolean;
  toogleMenu: () => void;
};

<<<<<<< HEAD
const Header: React.FC<HeaderProps> = ({ toogleMenu, menuOpen }) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);
  const router = useRouter();

  return (
    <nav
      id="header"
      className={`w-full ${menuOpen ? "lg:w-[83%]" : "lg:w-full"}`}
    >
      <div className="flex gap-[15px] items-center justify-center">
        <div
          className="cursor-pointer rounded-full bg-opacity-35 bg-white/20 w-[40px] h-[40px] flex items-center justify-center"
          onClick={toogleMenu}
        >
          <FontAwesomeIcon
            icon={menuOpen ? faChevronLeft : faBars}
            width={25}
          />
        </div>
        <div className="hidden md:flex gap-[15px]">
          <HeaderSelect selectOptions={grupos} />
          <HeaderSelect selectOptions={entidades} />
        </div>
      </div>
=======
const Header: React.FC<HeaderProps> = ({toogleMenu, menuOpen}) => {
  const [openSelect, setOpenSelect] = useState<boolean>(false);

  return (
    <nav id="header">
      <div className="flex gap-[15px] items-center justify-center">      
        <div
        className="cursor-pointer rounded-full bg-opacity-35 bg-white/20 w-[40px] h-[40px] flex items-center justify-center"
        onClick={toogleMenu}>
        <FontAwesomeIcon icon={menuOpen ? faChevronLeft : faBars} width={25} />
      </div>
      <div className="hidden md:flex gap-[15px]">
            <HeaderSelect selectOptions={grupos} />
            <HeaderSelect selectOptions={entidades} />
          </div></div>
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c

      <ul>
        <li>
          <div className={`grid md:hidden icon relative`}>
            <FontAwesomeIcon
              className={`${openSelect ? "rotate-[-180deg]" : " "}
            transition-all`}
              icon={faChevronDown}
              width={25}
              onClick={() => setOpenSelect(!openSelect)}
            />

            <div
              className={`absolute top-[50px] left-[-10px] bg-primary px-5 py-3 gap-2  justify-center items-center
<<<<<<< HEAD
              ${openSelect ? "flex flex-col" : "hidden"}`}
            >
=======
              ${openSelect ? "flex flex-col" : "hidden"}`}>
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
              <HeaderSelect selectOptions={grupos} />
              <HeaderSelect selectOptions={entidades} />
            </div>
          </div>
<<<<<<< HEAD
=======

          
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faBell} width={25} />
        </li>
        <li className="icon">
          <FontAwesomeIcon icon={faEnvelope} width={25} />
        </li>
        <li className="userInfo">
<<<<<<< HEAD
          <Image
            src={"/images/userIcon.png"}
            width={40}
            height={40}
            alt="Profile Image"
          />
=======
          <Image src={"/images/userIcon.png"} width={40} height={40} alt="Profile Image" />
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
          <div className="hidden md:block">
            <p className="text-[0.65rem] p-0 m-0">Admin</p>
            <p className="text-xs font-medium p-0 m-0 flex items-center gap-1">
              Jhon Doe
              <span className="text-[0.55rem] font-bold">
                <FontAwesomeIcon icon={faChevronDown} />
              </span>
            </p>
          </div>
        </li>
<<<<<<< HEAD
        <li className="icon" onClick={() => router.push("/login")}>
=======
        <li className="icon">
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
          <FontAwesomeIcon icon={faCog} width={25} />
        </li>
      </ul>
    </nav>
  );
};

export default Header;
