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
      title: "Detailed Design",
      description: "We finalize materials, finishes, and furniture selections, providing a complete roadmap for the project."
    },
    {
      number: "04",
      title: "Implementation",
      description: "From procurement to final styling, we manage every detail to ensure the vision is executed flawlessly."
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
