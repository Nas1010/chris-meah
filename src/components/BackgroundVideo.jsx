import styles from "../styles/Layout.module.css";

const BackgroundVideo = () => {
  return (
    <video className={styles.background} autoPlay loop muted playsInline>
      <source src="/galaxy.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;