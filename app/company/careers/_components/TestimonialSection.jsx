"use client";

import { useState } from "react";
import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote:
      "At UCAL, I don’t just build products—I build the future of mobility, backed by a team that values people, ideas, and growth every single day.",

    name: "Rohan Sharma",

    designation: "Senior Design Engineer",

    image: "/careers/img30.webp",
  },

  {
    quote:
      "From learning to leading, my journey at UCAL has been powered by innovation, mentorship, and a culture where people truly come first.",

    name: "Neha Gupta",

    designation: "Product Development Manager",

    image: "/careers/nehaGupta.webp",
  },
  {
    quote:
      "“Every day at UCAL feels like progress—solving real-world challenges with a team that blends technology, passion, and purpose.”",

    name: "Debasis Dash",

    designation: "Software Engineer",

    image: "/careers/Debasis.webp",
  },
  {
    quote:
      "“UCAL gave me more than a job—it gave me a platform to innovate, grow, and be part of something bigger than myself.”",

    name: "Sagar Sharma",

    designation: "Quality Assurance Lead",

    image: "/careers/Sagar.webp",
  },
];

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeCard = testimonials[activeIndex];

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className={styles.testimonialSection}>

      {/* TOP */}

      <div className={styles.topText}>
        <p className="gHeading">
          / Our People
        </p>

        <h2 className="main-heading">
          Hear It From Those Who Built UCAL.
        </h2>

        <p className="sub-heading">
          Real stories from the people who design our
          products and represent UCAL.
        </p>
      </div>

      {/* CARD */}

      <div className={styles.testimonialCard}>

        {/* LEFT CONTENT */}

        <div className={styles.testimonialContent}>

          <p className={styles.quote}>
            “{activeCard.quote}”
          </p>

          <div className={styles.userInfo}>

            <h4 className={styles.userName}>
              {activeCard.name}
            </h4>

            <p className={styles.userDesignation}>
              {activeCard.designation}
            </p>

          </div>

        </div>

        {/* IMAGE */}

        <img
          src={activeCard.image}
          alt={activeCard.name}
          className={styles.personImage}
        />

      </div>

      {/* CONTROLS */}

      <div className={styles.controls}>

        <button
          onClick={prevSlide}
          className={styles.arrowBtn}
        >
          ←
        </button>

        <button
          onClick={nextSlide}
          className={styles.arrowBtn}
        >
          →
        </button>

      </div>

    </section>
  );
}