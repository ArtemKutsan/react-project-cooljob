// src/components/Vacancies/index.jsx
import styles from './Vacancies.module.css';
import VacancyCard from '../../VacancyCard';

const vacancies = [
  {
    id: 1,
    category: 'Финансы',
    title: 'Менеджер по управлению финансами в крупной компании',
    location: 'Осака, Япония',
    company: 'Sony',
    logo: '/images/logos/sony.svg',
    time: '3 дня назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 2,
    category: 'Продажи',
    title: 'Специалист по продажам',
    location: 'Кофу, Япония',
    company: 'Facebook',
    logo: '/images/logos/facebook.svg',
    time: '7 дней назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 3,
    category: 'Служба поддержки',
    title: 'Оператор колл центра',
    location: 'Томакомай, Япония',
    company: 'CocaCola',
    logo: '/images/logos/coca-cola.svg',
    time: '1 день назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 4,
    category: 'Мультимедиа',
    title: 'Системный администратор',
    location: 'Токио, Япония',
    company: 'Sony',
    logo: '/images/logos/sony.svg',
    time: '3 дня назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 5,
    category: 'Дизайн',
    title: 'Дизайнер интерьера в профессиональную студию в центре города',
    location: 'Йокогама, Япония',
    company: 'Facebook',
    logo: '/images/logos/facebook.svg',
    time: '7 дней назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 6,
    category: 'Грузоперевозки',
    title: 'Водитель на дальние дистанции',
    location: 'Кобе, Япония',
    company: 'CocaCola',
    logo: '/images/logos/coca-cola.svg',
    time: '1 день назад',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
];

function Vacancies() {
  return (
    <div className="container">
      <h3>Новые вакансии</h3>
      <p className="text-muted" style={{ marginBottom: '1rem' }}>
        Найди работу своей мечты прямо сейчас
      </p>

      <div className={styles.grid}>
        {vacancies.map((vacancy) => (
          <VacancyCard key={vacancy.id} {...vacancy} />
        ))}
      </div>
    </div>
  );
}

export default Vacancies;
