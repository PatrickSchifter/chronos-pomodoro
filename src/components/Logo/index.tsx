import { Heading } from '../Heading';
import styles from './index.module.css';
import { TimerIcon } from 'lucide-react';

export function Logo() {
  return (
    <div className={styles['container-logo']}>
      <TimerIcon className={styles.logo} />
      <Heading>Cronos</Heading>
    </div>
  );
}
