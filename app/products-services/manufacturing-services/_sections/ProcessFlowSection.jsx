"use client";

import SectionHeader from "@/components/common/SectionHeader";
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
    <section className={styles.section}>
      <SectionHeader
        eyebrow="/ Process Flow"
        title={
          <>
            From Concept to Validated Delivery <br />
            Every Step In-House
          </>
        }
        description="The UCAL full production chain is designed to remove uncertainty at every stage â€” through in-house ownership, not through adding supplier oversight."
        titleClassName={styles.title}
      />

      <div className={styles.layout}>
        <ProcessColumn steps={leftProcessSteps} />

        <div className={styles.center}>
          <img src="/media/img63.gif" alt="process" className={styles.image} />

          <div className={styles.finalStep}>
            <ProcessStep {...finalProcessStep} />
          </div>
        </div>

        <ProcessColumn steps={rightProcessSteps} />
      </div>
    </section>
  );
}
