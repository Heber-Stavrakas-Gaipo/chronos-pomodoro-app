import styles from './styles.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href='#'>Entenda como funciona a técnica Pomodoro</a>
      <a href='#'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito por Héber
        Gaipo inspirado em um projeto de Otávio Miranda
      </a>
    </footer>
  );
}
