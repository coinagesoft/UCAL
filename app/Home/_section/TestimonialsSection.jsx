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
          <div className={styles.quoteMark}>
            <img src="/home/up.png" alt="quotes" />
          </div>

          <p className={styles.quote}>{testimonial.quote}</p>

          <p className={styles.author}>&mdash; {testimonial.author}</p>

          <div className={styles.quoteMarkEnd}>
            <img src="/home/down.png" alt="quotes" />
          </div>
        </div>

        <div className={styles.dots}>
          {homeTestimonials.map((item, index) => (
            <button
              key={`${item.author}-${index}`}
              onClick={() => setCurrentSlide(index)}
              className={`${styles.dot} ${
                index === currentSlide ? styles.dotActive : styles.dotInactive
              }`}
              aria-label={`Show testimonial ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
