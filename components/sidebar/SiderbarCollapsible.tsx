"use client";
<<<<<<< HEAD
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type SidebarCollapsibleProps = {
  icon: IconDefinition | string; // Can be either FontAwesome icon or an image path
=======
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faWifi, IconDefinition} from "@fortawesome/free-solid-svg-icons";

type sidebarCollapsibleProps = {
  icon: IconDefinition;
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
  text: string;
  children?: React.ReactNode;
};

<<<<<<< HEAD
const SidebarCollapsible: React.FC<SidebarCollapsibleProps> = ({
  icon,
  text,
  children,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderIcon = () => {
    if (typeof icon === "string") {
      // Render as an image if `icon` is a string
      return <Image src={icon} alt={text} width={48} height={48} />;
    }
    // Render as a FontAwesomeIcon if `icon` is an IconDefinition
    return <FontAwesomeIcon icon={icon} width={25} />;
  };

  return (
    <>
      <div
        className="sidebarCollapsible cursor-pointer mt-3"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className={`flex items-center gap-2`}>
          {renderIcon()}
=======
const SiderbarCollapsible: React.FC<sidebarCollapsibleProps> = ({icon, text, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sidebarCollapsible cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className={`flex items-center gap-2`}>
          <FontAwesomeIcon icon={icon} width={25} />
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
          <p>{text}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xs cursor-pointer ${
<<<<<<< HEAD
              isOpen ? "rotate-[-180deg]" : ""
            } transition-all`}
=======
              isOpen ? "rotate-[-180deg]" : " "
            }  transition-all`}
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`ps-5 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
<<<<<<< HEAD
          }`}
        >
=======
          }`}>
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
          {children}
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
export default SidebarCollapsible;
=======
export default SiderbarCollapsible;
>>>>>>> 66ef66e249fac2124b93adf0e903de9264f4525c
