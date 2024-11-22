"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

type SidebarCollapsibleProps = {
  icon: IconDefinition | string; // Can be either FontAwesome icon or an image path
  text: string;
  children?: React.ReactNode;
};

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
          <p>{text}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xs cursor-pointer ${
              isOpen ? "rotate-[-180deg]" : ""
            } transition-all`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`ps-5 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          {children}
        </div>
      )}
    </>
  );
};

export default SidebarCollapsible;
