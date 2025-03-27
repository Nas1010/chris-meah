import styles from '../styles/SchoolOfCode.module.css';

const SchoolOfCode = () => {
  return (
    <section id='schoolOfCode' className={styles.school}>
      <div className={styles.video}>
        <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/DJCTB_Z58Aw" 
          title="School of Code"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      <div className={styles.description}>
        <h2>School of Code</h2>
        <p>
        I started the School of Code in 2015 while studying for my PhD. With my background in Artificial Intelligence and Computer Science, I’ve always believed that technology presents a golden opportunity to create a more equal and fair world for everyone. After completing my studies in AI, I saw the looming impact of automation, which could disrupt many people's livelihoods, but there was no clear path to help them transition into the tech space.
        </p>
        <p>There’s always been a lack of diverse stories in tech, with many people discovering it at an early age. But what about those who didn’t start coding at 5 years old? How do individuals with decades of experience in other fields suddenly transform into technical talent?
        </p>
        <p>I set out to solve this problem by creating the School of Code, which has now had 18 cohorts and has transformed lives. We’ve helped people from all walks of life—teachers, truck drivers, stay-at-home moms, and more—transition into the tech industry and build fulfilling careers. The School of Code provides a route for anyone eager to learn and contribute to the ever-evolving world of technology.
        </p>
      </div>
    </section>
  );
};

export default SchoolOfCode;
