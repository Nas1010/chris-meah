import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import styles from '../styles/Testimonials.module.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className={styles.testimonialContainer}>
      <div className={styles.title}>
        <h2>Testimonial</h2>
        <p>What members are saying.</p>
      </div>

      <div className={styles.sliderContainer}>
        <blockquote>
          <img className={`${styles.topQuote} ${styles.quote}`} src={`${process.env.PUBLIC_URL}/blockquote.svg`} alt="quote" />
          <img className={`${styles.bottomQuote} ${styles.quote}`} src={`${process.env.PUBLIC_URL}/blockquote.svg`} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className={styles.splideSlide}>
              <img className={styles.reviewImg} src={review.image} alt="Reviewer" />
              <div className={styles.content}>
                <p className={styles.text}>{review.text}</p>
                <div className={styles.info}>
                  <div className={styles.rating}>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                    <span className={styles.star}>&#9734;</span>
                  </div>
                  <p className={styles.user}>{review.name}</p>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonials;
