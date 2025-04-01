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
    I founded the School of Code in 2015 during my PhD, combining my background in AI and Computer Science. I saw automation’s potential impact on livelihoods and recognised a need to help people transition into tech.
  </p>
  <p>
    Tech often lacks diverse stories, with many starting young. But how do people with no coding background pivot into tech?
  </p>
  <p>
    The School of Code, now with 18 cohorts, has transformed lives, helping people from diverse backgrounds—teachers, truck drivers, stay-at-home moms—transition into tech and build fulfilling careers.
  </p>
        </div>
    </section>
  );
};

export default SchoolOfCode;
