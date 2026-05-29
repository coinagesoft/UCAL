"use client";

import {
  finalProcessStep,
  leftProcessSteps,
  rightProcessSteps,
} from "@/constants/processFlow";
import styles from "./ProcessFlowSection.module.css";

function ProcessStep({ no, title, desc }) {
  return (
    <div className={styles.step}>
      <div className={styles.stepRow}>
        <span className={styles.stepNumber}>{no}</span>

        <div>
          <h4 className={styles.stepTitle}>{title}</h4>
          <p className={styles.stepDescription}>{desc}</p>
        </div>
      </div>
    </div>
  );
}

function ProcessColumn({ steps }) {
  return (
    <div className={styles.column}>
      {steps.map((item) => (
        <ProcessStep key={item.no} {...item} />
      ))}
    </div>
  );
}

export default function ProcessFlowSection() {
  return (
    <section className={styles.section} >
      <div className="wrapper" style={{paddingBottom:"60px"}}>
        <p className="gHeading">/ Process Flow</p>
        <h2 className="main-heading">
          From Concept to Validated Delivery <br />
          Every Step In-House
        </h2>

        <p className="sub-heading">
          The UCAL full production chain is designed to remove uncertainty at
          every stage — through in- <br /> house ownership, not through adding supplier
          oversight.
        </p>
      </div>

      <div className={styles.layout}>
        <ProcessColumn steps={leftProcessSteps} />

        <div className={styles.center}>
          <img
            src="/media/img63.gif"
            alt="process"
            className={styles.image}
          />

          <div className={styles.finalStep}>
            <ProcessStep {...finalProcessStep} />
          </div>
        </div>

        <ProcessColumn steps={rightProcessSteps} />
      </div>
    </section>
  );
}