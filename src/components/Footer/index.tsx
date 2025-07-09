import styles from './styles.module.css';

//Para esse componente foi utilizado um HTML semantico e usado o new Date para sempre ter o ano atual

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href=''>Entenda como funciona a tecnica Pomodoro</a>
      <a href=''>Chronos Pomodoro &copy; ${new Date().getFullYear()}</a>
    </footer>
  );
}
