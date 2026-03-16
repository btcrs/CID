import styles from './Services.module.css';

export default function Services() {
  const services = [
    {
      title: "Space Planning",
      description: "Optimizing flow and functionality to maximize your living environment's potential."
    },
    {
      title: "Interior Styling",
      description: "Curating furniture, art, and decor to create a cohesive and personalized atmosphere."
    },
    {
      title: "Full Renovations",
      description: "Comprehensive management of large-scale design projects from concept to completion."
    }
  ];

  return (
    <section id="services" className={styles.services}>
      <h2 className={styles.sectionTitle}>Our Services</h2>
      <div className={styles.grid}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
