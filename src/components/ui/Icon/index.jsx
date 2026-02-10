// src/components/Icon/index.jsx
import styles from './Icon.module.css';

export function Icon({ iconSrc, className = '', ...props }) {
  return <img src={iconSrc} alt="" className={styles.icon} aria-hidden="true" />;
}
