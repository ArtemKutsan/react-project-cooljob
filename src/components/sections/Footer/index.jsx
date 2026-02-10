// src/components/Footer/index.jsx
import styles from './Footer.module.css';
import PopularCities from '../../PopularCities';
import Socials from '../../Socials';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <PopularCities />

        <hr style={{ color: '#465461' }} />
        <div className={styles.bottom}>
          <p className={styles.brand}>Cooljob</p>
          <Socials />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
