// src/components/Partners/index.jsx
import styles from './Partners.module.css';

const customers = [
  { src: '/images/disney.svg', alt: 'Disney' },
  { src: '/images/facebook.svg', alt: 'Facebook' },
  { src: '/images/microsoft.svg', alt: 'Microsoft' },
  { src: '/images/sony.svg', alt: 'Sony' },
  { src: '/images/coca-cola.svg', alt: 'Coca-cola' },
];

export default function Partners() {
  return (
    <div className={[styles.wrapper, 'container'].join(' ')}>
      <p className="text-muted">Помогаем найти работу:</p>
      <div className={styles.partners}>
        {customers.map((customer) => (
          <div key={customer.src} className={styles.logoItem}>
            <img src={customer.src} alt={customer.alt} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}
