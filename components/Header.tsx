import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Logo</div>
      <nav className={styles.nav}>
        <a href="#features">Возможности</a>
        <a href="#pricing">Цены</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
}