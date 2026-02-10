// src/components/Hero/index.jsx
import styles from './Hero.module.css';
import SearchGroup from '../../SearchGroup';

function Hero() {
  return (
    <>
      <div className={styles.heroBg}></div>
      <div
        className="container"
        style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
      >
        <p className="text-6xl font-bold" style={{ marginBottom: '2rem' }}>
          Один клик <br />и работа в кармане
        </p>
        <SearchGroup />
      </div>
    </>
  );
}

export default Hero;
