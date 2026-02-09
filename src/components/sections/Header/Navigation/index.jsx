// src/components/layouts/header/Navigation.jsx
import styles from './Navigation.module.css';

const navLinks = [
  { href: '#job-search', label: 'Поиск работы' },
  { href: '#startups-search', label: 'Поиск стартапов' },
];

function Navigation() {
  return (
    <nav className={styles.nav}>
      {navLinks.map((link) => (
        <a key={link.href} href={link.href} className={styles.link}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}

export default Navigation;
