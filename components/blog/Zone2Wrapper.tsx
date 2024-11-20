import React from "react";
import Zone2Card from "./Zone2Card";

const Zone2Wrapper = () => {
  const cards = [
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Nov 9, 2024", time: "3:00 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Nov 10, 2024", time: "4:30 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Nov 11, 2024", time: "5:15 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 4", date: "Nov 12, 2024", time: "6:45 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 5", date: "Nov 9, 2024", time: "3:00 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 6", date: "Nov 10, 2024", time: "4:30 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 7", date: "Nov 11, 2024", time: "5:15 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 8", date: "Nov 12, 2024", time: "6:45 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 9", date: "Nov 9, 2024", time: "3:00 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 10", date: "Nov 10, 2024", time: "4:30 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 11", date: "Nov 11, 2024", time: "5:15 PM"},
    {image: "/images/blogImage.jpg", title: "Noticia 12", date: "Nov 12, 2024", time: "6:45 PM"},
    // add more items as needed
  ];

  return (
    <section id="zone2Wrapper" className="zone2Wrapper">
      <h1 className="sectionTitle text-xl font-semibold mb-2">Este mes</h1>
      <div className="cardContainer">
        {cards.map((card, index) => (
          <Zone2Card
            key={index}
            image={card.image}
            title={card.title}
            date={card.date}
            time={card.time}
          />
        ))}
      </div>
    </section>
  );
};

export default Zone2Wrapper;
