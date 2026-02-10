// src/components/Socials/index.jsx
import styles from './Socials.module.css';

function Socials() {
  return (
    <div className={styles.socials}>
      <img src="/icons/linkedin.svg" alt="LinkedIn" />
      <img src="/icons/google.svg" alt="Google" />
      <img src="/icons/twitter.svg" alt="Twitter" />
      <img src="/icons/facebook.svg" alt="Facebook" />
    </div>
  );
}

export default Socials;
