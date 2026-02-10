// src/components/VacancyCard/index.jsx
import styles from './VacancyCard.module.css';

function VacancyCard({ category, title, location, company, logo, time, styles: customStyles }) {
  return (
    <div className={styles.card} style={customStyles}>
      <p className={styles.category}>{category}</p>

      <h4 className={styles.title}>{title}</h4>

      <div className={styles.location}>
        <img src="/icons/location.svg" alt="" style={{ height: '1rem' }} />
        <p className={styles.location}>{location}</p>
      </div>
      <div className={styles.footer}>
        <img src={logo} alt={company} className={styles.logo} />
        <span className="text-muted text-sm">{company}</span>
        <span className="text-muted text-sm">{time}</span>
      </div>
    </div>
  );
}

export default VacancyCard;
