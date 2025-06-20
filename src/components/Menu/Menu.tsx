import styles from './Menu.module.css';
import { HouseIcon } from 'lucide-react';
import { HistoryIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { SunIcon } from 'lucide-react';

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles.menuLink}>
        <HouseIcon />
      </a>
      <a className={styles.menuLink}>
        <HistoryIcon />
      </a>
      <a className={styles.menuLink}>
        <SettingsIcon />
      </a>
      <a className={styles.menuLink}>
        <SunIcon />
      </a>
    </nav>
  );
}
