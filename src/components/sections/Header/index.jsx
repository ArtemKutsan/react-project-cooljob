// src/components/sections/Header/index.jsx
import styles from './Header.module.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          {/* <Logo /> */}
          <h1>Cooljob</h1>
          <Navigation />
        </div>

        <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <a className={styles.link} href="">
            Регистрация
          </a>
          <a className={styles.link} href="">
            Вход
          </a>
          {/* <Button variant="wtite">Вход</Button> */}
        </div>
      </div>
    </header>
  );
}
