import styles from './Process.module.css';

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "We begin by understanding your lifestyle, functional needs, and design aspirations through a detailed conversation."
    },
    {
      number: "02",
      title: "Design Concept",
      description: "Our team develops a cohesive visual direction, mood boards, and space plans that reflect your unique style."
    },
    {
      number: "03",
      title: "Design & Implementation",
      description: "We finalize details and manage the project from procurement to final styling, ensuring the vision is executed flawlessly."
    }
  ];

  return (
    <section id="process" className={styles.process}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our Process</h2>
        <div className={styles.grid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.step}>
              <span className={styles.number}>{step.number}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.description}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
