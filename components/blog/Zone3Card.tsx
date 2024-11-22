import React from "react";
import Image from "next/image";

type Zone3CardProps = {
  image: string;
  title: string;
  date: string;
  time: string;
};

const Zone3Card: React.FC<Zone3CardProps> = ({image, title, date, time}) => {
  return (
    <div className="zone3Card">
      <Image src={image} alt={title} layout="fill" objectFit="cover" className="cardImage" />
      <div className="overlay">
        <h2 className="cardTitle">{title}</h2>
        <p className="cardDate">{date}</p>
        <p className="cardTime">{time}</p>
      </div>
    </div>
  );
};

export default Zone3Card;
