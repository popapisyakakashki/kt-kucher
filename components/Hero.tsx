import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>Ваш продукт здесь</h1>
        <p className={styles.subtitle}>
          Краткое описание преимуществ, которое цепляет за 3 секунды
        </p>
        <button className={styles.cta}>Попробовать</button>
      </div>
    </section>
  );
}