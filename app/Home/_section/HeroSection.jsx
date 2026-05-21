"use client";

import { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";

const slides = [
  {
    title: (
      <>
        Engineering Trust.
        <br />
        Powering Mobility
        <br />
        Since 1985.
      </>
    ),

    description: (
      <>
        40 years of OE-grade innovation, now serving Aftermarkets globally.
      </>
    ),

    button: "Explore Our Products",

    image: "/media/img1.png",
  },

  {
    title: (
      <>
        Welcome to UCAL
        <br />
        Polymer
      </>
    ),

    description: (
      <>
        We are a specialized rubber and plastic products manufacturer
        <br />
        for precision products using specialty polymers.
      </>
    ),

    button: "View Polymer Website",

    image: "/media/h1.png",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={styles.section}
      style={{
        backgroundImage: `url(${slides[currentSlide].image})`,
      }}
    >
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          {slides[currentSlide].title}
        </h1>

        <p className={styles.description}>
          {slides[currentSlide].description}
        </p>

        <button className={`custom-btn ${styles.button}`}>
          {slides[currentSlide].button}
        </button>
      </div>
    </section>
  );
}