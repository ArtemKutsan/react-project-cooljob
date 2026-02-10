// src/components/Categories/index.jsx
import styles from './Categories.module.css';
import CategoryCard from '../../CategoryCard';

const categories = [
  {
    id: 1,
    title: 'Финансы',
    icon: '/icons/finance.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 2,
    title: 'Грузоперевозки',
    icon: '/icons/truck.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 3,
    title: 'Дизайн',
    icon: '/icons/design.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 4,
    title: 'Ресторанный бизнес',
    icon: '/icons/restaurant.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 5,
    title: 'Медицина',
    icon: '/icons/medicine.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 6,
    title: 'Мультимедиа',
    icon: '/icons/media.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 7,
    title: 'Служба поддержки',
    icon: '/icons/support.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 8,
    title: 'Менеджмент',
    icon: '/icons/management.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 9,
    title: 'Продажи',
    icon: '/icons/sales.svg',
    styles: { backgroundColor: '#fff', border: 'none' },
  },
  {
    id: 10,
    title: 'Больше категорий',
    icon: '/icons/arrow-right.svg',
    styles: {
      backgroundColor: 'transparent',
      border: '2px solid rgba(0, 0, 0, 0.2)',
      boxShadow: 'none',
    },
  },
];

function Categories() {
  return (
    <div className="container">
      <h3 className={styles.title}>
        Работа <br />
        по категориям
      </h3>

      <div className={styles.grid}>
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </div>
  );
}

export default Categories;
