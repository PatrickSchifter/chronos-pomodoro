import styles from './Menu.module.css';
import { HouseIcon } from 'lucide-react';
import { HistoryIcon } from 'lucide-react';
import { SettingsIcon } from 'lucide-react';
import { SunIcon } from 'lucide-react';
import { useState, useEffect } from 'react';

type AvalableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvalableThemes>('dark');

  const handleThemeToggle = (event: React.MouseEvent) => {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Go to home'
        title='Go to home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='View history'
        title='View history'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Settings'
        title='Settings'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles.menuLink}
        href='#'
        aria-label='Toggle theme'
        title='Toggle theme'
        onClick={handleThemeToggle}
      >
        <SunIcon />
      </a>
    </nav>
  );
}

//Nessa aula foi utilizado pela primeira vez o useState e o useEffect, onde o useState serve apenas para gerenciar o estado do
//tema, enquanto o useEffect serve para evitar que o tema seja atualizado diretamente no DOM, permitindo que o React monitore
//as mudanças de estado sem que haja efeitos colaterais indesejados. Também foi utilizado pela primeira vez um Type do TypeScript
//dentro do useState. Outro ponto importante foi o atriuto data-theme dentro do HTML e a forma como interage com todo o sistma.
// Além disso, também foi utilizado pela primeira vez o event do onClick e o event.preventDefault() para evitar o comportamento
//padrão do href.
