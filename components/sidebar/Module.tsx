import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDiamond} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

type ModuleProps = {
  text: string;
  link: string;
};

const Module: React.FC<ModuleProps> = ({text, link}) => {
  return (
    <div className="text-white flex items-center gap-2 mt-1">
      <FontAwesomeIcon icon={faDiamond} className="text-[0.5rem]" />
      <Link href={link}> {text} </Link>
    </div>
  );
};

export default Module;
