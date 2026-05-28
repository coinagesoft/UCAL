"use client";

import { useState } from "react";
import { homeFaqs } from "@/constants/home";
import styles from "./FAQSection.module.css";

function FAQItem({ faq, isExpanded, onToggle }) {
  return (
    <div className={styles.item}>
      <button onClick={onToggle} className={styles.question}>
        {faq.question}
        <span className={styles.icon}>{isExpanded ? "-" : "+"}</span>
      </button>

      {isExpanded && (
        <div>
          <div className={styles.divider} />
          <div className={styles.answer}>{faq.answer}</div>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <h4 className="gHeading">/ Faq&apos;s</h4>

            <h1 className="main-heading">
              Asked Questions <br />
              And Trusted Answers
            </h1>

            <p className="sub-heading" style={{color:"white"}}>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          <img src="/media/img21.png" alt="faq" className={styles.image} />
        </div>

        <div className={styles.list}>
          {homeFaqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isExpanded={expandedIndex === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
