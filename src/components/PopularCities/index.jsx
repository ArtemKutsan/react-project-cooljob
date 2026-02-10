// src/components/PopularCities/index.jsx
import styles from './PopularCities.module.css';

const cities = [
  'Осака',
  'Кюсан',
  'Токио',
  'Хаконэ',
  'Набэ',
  'Томаму',
  'Йокогама',
  'Нагоя',
  'Саппоро',
  'Кобе',
];

function PopularCities() {
  return (
    <div>
      <h2 className={styles.title}>Популярные города</h2>

      <ul className={styles.cities}>
        {cities.map((city, index) => (
          <li key={index} className={styles.city}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PopularCities;
