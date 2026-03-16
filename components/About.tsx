import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.visual}>
            <img 
              src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800" 
              alt="Interior Design Process" 
              className={styles.aboutImage}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Our Philosophy</h2>
            <p className={styles.text}>
              At Carothers Interior Design, we believe that a well-designed space is the foundation of a life well-lived. Our approach is rooted in simplicity, functionality, and a deep respect for natural materials.
            </p>
            <p className={styles.text}>
              We work closely with our clients to understand their unique needs and aspirations, translating them into cohesive, timeless environments that feel both personal and elevated.
            </p>
          </div>
        </div>
        
        <div className={styles.designerProfile}>
          <div className={styles.designerInfo}>
            <h2 className={styles.sectionTitle}>Meet the Designer</h2>
            <h3 className={styles.designerName}>Sarah Carothers</h3>
            <p className={styles.text}>
              With over a decade of experience in residential and commercial design, Sarah brings a refined eye and a collaborative spirit to every project. Her work is characterized by a balance of clean lines, warm textures, and a commitment to creating spaces that tell a story.
            </p>
          </div>
          <div className={styles.designerVisual}>
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
              alt="Sarah Carothers - Lead Designer" 
              className={styles.designerImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
