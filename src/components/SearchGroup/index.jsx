// src/components/SearchGroup/index.jsx
import styles from './SearchGroup.module.css';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

function SearchGroup() {
  return (
    <form action="" className={styles.searchGroup}>
      <Input
        type="text"
        placeholder="Должность или компания"
        icon={<img src="/icons/search.svg" style={{ padding: '0 1rem' }} />}
        style={{ border: 'none' }}
        className="text-lg"
      />
      <div className={styles.divider} />
      <Input
        type="text"
        placeholder="Страна, город"
        icon={<img src="/icons/location.svg" style={{ padding: '0 1rem' }} />}
        style={{ border: 'none' }}
        className="text-lg"
      />
      <Button id="job-search" variant="primary" size="6xl" className="text-2xl">
        Поиск
      </Button>
    </form>
  );
}

export default SearchGroup;
