"use client";

import { useRef } from "react";
import styles from "./CleanMobility.module.css";

const cards = [
  {
    image: "/Sustainability/img44.webp",
    title: "EV COMPONENTS",
    description:
      "From handlebar grip sensors and DC-DC converters currently in production, to traction inverters, onboard chargers, and battery management systems in development - UCAL is building out a full EV component suite for 2-wheel and 3-wheel electric vehicles.",
    tags: ["DC-DC Converter", "Engine Control Units", "Traction Inverters"],
  },
  {
    image: "/Sustainability/img45.webp",
    title: "HYDROGEN & FUEL CELLS",
    description:
      "UCAL is actively engaged in market study and technology partner identification for hydrogen combustion and fuel cell components - positioning for the next wave of clean mobility beyond battery-electric.",
    tags: ["Hydrogen Combustion", "Fuel Cell Components", "Market Study Phase"],
  },
  {
    image: "/Sustainability/img46.webp",
    title: "MICRO MOBILITY",
    description:
      "Engineering solutions for e-scooters and light electric vehicles - the fastest-growing segment in urban transportation.",
    tags: ["E-Scooters", "E-Cycles", "Light EV"],
  },
  {
    image: "/Sustainability/img46.webp",
    title: "ADVANCED ELECTRONICS",
    description:
      "Electronics-led product platforms that support smarter, cleaner, and more efficient powertrain systems across emerging mobility applications.",
    tags: ["BMS", "Onboard Chargers", "Power Electronics"],
  },
];

export default function CleanMobility() {
  const cardsRef = useRef(null);

  const moveCards = (direction) => {
    const cardsNode = cardsRef.current;
    const firstCard = cardsNode?.firstElementChild;

    if (!cardsNode || !firstCard) {
      return;
    }

    const styles = window.getComputedStyle(cardsNode);
    const gap = parseFloat(styles.columnGap || styles.gap || "0");
    const distance = firstCard.getBoundingClientRect().width + gap;

    cardsNode.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>/ Clean Mobility</span>

        <h2>The Transition Runs on Parts. We Make Those Parts.</h2>

        <p className={styles.intro}>
          UCAL&apos;s EV and alternative energy product roadmap is not a pivot - it
          is a natural extension of our powertrain engineering expertise <br />
          into the technologies that will define mobility&apos;s next chapter.
        </p>

        <div className={styles.cards} ref={cardsRef}>
          {cards.map((card) => (
            <article className={styles.card} key={card.title}>
              <div>
                <img className={styles.icon} src={card.image} alt="" />
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>

              <div className={styles.tags}>
                {card.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className={styles.arrows}>
          <button
            type="button"
            aria-label="Previous clean mobility item"
            onClick={() => moveCards(-1)}
          >
            <img src="/media/arrowLeft.png" alt="" />
          </button>
          <button
            type="button"
            aria-label="Next clean mobility item"
            onClick={() => moveCards(1)}
          >
            <img src="/media/arrowRight.png" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
}
