import styles from '../styles/HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <img src="Chris-Meah.jpg" alt="Chris Meah" />
      </div>
      <div className={styles.about}>
        <h2>About Me</h2>
        <p>
                  Hi, I'm Chris! I completed my PhD and MSc at the University of Birmingham, where I also graduated top of my class with a BSc in AI and Computer Science. I'm passionate about building innovative AI solutions, training others to understand and leverage AI's potential, and speaking about its impact on our future.
        
                  With a solid foundation in AI research and development, I love sharing my knowledge and helping others unlock the power of AI for practical and creative applications. Whether through hands-on projects or insightful discussions, I’m excited to contribute to the ever-evolving world of technology.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
