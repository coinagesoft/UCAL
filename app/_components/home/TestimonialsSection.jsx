"use client";

import { useState } from "react";
import { homeTestimonials } from "@/constants/home";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonial = homeTestimonials[currentSlide];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.quoteMark}>&quot;</div>

          <p className={styles.quote}>{testimonial.quote}</p>

          <p className={styles.author}>â€” {testimonial.author}</p>

          <div className={styles.quoteMarkEnd}>&quot;</div>
        </div>

        <div className={styles.dots}>
          {homeTestimonials.map((item, index) => (
            <button
              key={`${item.author}-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : styles.dotInactive
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
