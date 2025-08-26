import styles from './CountDown.module.css';

type CountDownProps = {
  formattedSecondsRemaining: string;
};

export function CountDown({ formattedSecondsRemaining }: CountDownProps) {
  return <div className={styles.container}>{formattedSecondsRemaining}</div>;
}
