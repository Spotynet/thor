"use client";
import React, {useState} from "react";
import Zone1Card from "./Zone1Card";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronCircleLeft, faChevronCircleRight} from "@fortawesome/free-solid-svg-icons";

const Zone1Wrapper: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {image: "/images/blogImage.jpg", title: "Noticia 1", date: "Nov 9, 2024", time: "3:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 2", date: "Nov 10, 2024", time: "4:00pm"},
    {image: "/images/blogImage.jpg", title: "Noticia 3", date: "Nov 11, 2024", time: "5:00pm"},
    // add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="zone1Wrapper" className="zone1Wrapper">
      <h1 className="text-xl font-semibold mb-2">Esta semana</h1>
      <div className="carousel" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <Zone1Card
              image={slide.image}
              title={slide.title}
              date={slide.date}
              time={slide.time}
            />
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="arrow arrow-left">
        <FontAwesomeIcon icon={faChevronCircleLeft} />
      </button>
      <button onClick={nextSlide} className="arrow arrow-right">
        <FontAwesomeIcon icon={faChevronCircleRight} />
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`dot ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Zone1Wrapper;
