"use client";
import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown, faWifi, IconDefinition} from "@fortawesome/free-solid-svg-icons";

type sidebarCollapsibleProps = {
  icon: IconDefinition;
  text: string;
  children?: React.ReactNode;
};

const SiderbarCollapsible: React.FC<sidebarCollapsibleProps> = ({icon, text, children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="sidebarCollapsible cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className={`flex items-center gap-2`}>
          <FontAwesomeIcon icon={icon} width={25} />
          <p>{text}</p>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faChevronDown}
            className={`text-xs cursor-pointer ${
              isOpen ? "rotate-[-180deg]" : " "
            }  transition-all`}
          />
        </div>
      </div>
      {isOpen && (
        <div
          className={`ps-5 transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}>
          {children}
        </div>
      )}
    </>
  );
};

export default SiderbarCollapsible;
