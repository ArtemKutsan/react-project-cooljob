// src/components/CategoryCard/index.jsx
import stylesCss from './CategoryCard.module.css';

function CategoryCard({ title, icon, styles }) {
  return (
    <div className={stylesCss.card} style={styles}>
      <img src={icon} alt={title} className={stylesCss.icon} />
      <p className={stylesCss.title}>{title}</p>
    </div>
  );
}

export default CategoryCard;
