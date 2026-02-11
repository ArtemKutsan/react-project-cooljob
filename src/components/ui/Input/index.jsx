// src/components/Input/index.jsx
import styles from './Input.module.css';

export default function Input({ icon, button, className = '', ...props }) {
  return (
    <div className={styles.wrapper}>
      {icon && icon}
      <input {...props} className={[styles.input, className].join(' ')} />
      {button && button}
    </div>
  );
}
