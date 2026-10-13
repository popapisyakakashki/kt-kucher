import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href="#">Политика конфиденциальности</a>
        <a href="#">Условия использования</a>
        <a href="#">Контакты</a>
      </div>
      <p className={styles.copy}>© 2025 Landing. Все права защищены.</p>
    </footer>
  );
}