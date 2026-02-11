// src/components/Button/index.jsx
import styles from './Button.module.css';

const VARIANTS = {
  primary: styles.primary,
  outline: styles.outline,
};

const SIZES = {
  base: styles.buttonBase,
  lg: styles.buttonLg,
  xl: styles.buttonXl,
  '2xl': styles.button2xl,
  '3xl': styles.button3xl,
  '4xl': styles.button4xl,
  '5xl': styles.button5xl,
  '6xl': styles.button6xl,
};

export default function Button({
  variant = 'base',
  size = 'base',
  className = '',
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={[styles.button, VARIANTS[variant], SIZES[size], className].join(' ')}
    >
      {children}
    </button>
  );
}
