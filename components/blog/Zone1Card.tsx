import Image from "next/image";
import React from "react";

type Zone1CardProps = {
  image: string;
  title: string;
  date?: string;
  time?: string;
};

const Zone1Card: React.FC<Zone1CardProps> = ({image, title, date, time}) => {
  return (
    <div className="zone1Card">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
      <div className="overlay">
        <p className="title">{title}</p>
        <p className="date">{date}</p>
        <p className="time">{time}</p>
      </div>
    </div>
  );
};

export default Zone1Card;
