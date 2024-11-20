import React from "react";
import Zone3Card from "./Zone3Card";

type Zone3WrapperProps = {
  month: string;
};

const Zone3Wrapper: React.FC<Zone3WrapperProps> = ({month}) => {
  const cardsData = [
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Oct 1, 2024", time: "10:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Oct 5, 2024", time: "11:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Oct 15, 2024", time: "12:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Oct 1, 2024", time: "10:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Oct 5, 2024", time: "11:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Oct 15, 2024", time: "12:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Oct 1, 2024", time: "10:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Oct 5, 2024", time: "11:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Oct 15, 2024", time: "12:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Oct 1, 2024", time: "10:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Oct 5, 2024", time: "11:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Oct 15, 2024", time: "12:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Oct 1, 2024", time: "10:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Oct 5, 2024", time: "11:00am"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Oct 15, 2024", time: "12:00pm"},
    // Add more cards as needed
  ];

  return (
    <section id="zone3Wrapper" className="mt-6">
      <h1 className="text-xl font-semibold mb-2">{month} 2024</h1>
      <div className="cardContainer">
        {cardsData.map((card, index) => (
          <Zone3Card
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

export default Zone3Wrapper;
