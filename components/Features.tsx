import styles from './Features.module.css';

const features = [
  { title: 'Быстро', text: 'Запуск за пару минут без лишних настроек.' },
  { title: 'Удобно', text: 'Понятный интерфейс и минимум действий.' },
  { title: 'Надёжно', text: 'Стабильная работа и поддержка 24/7.' },
  { title: 'Масштабируемо', text: 'Растёт вместе с вашим проектом.' },
  { title: 'Безопасно', text: 'Шифрование данных на всех уровнях.' },
  { title: 'Доступно', text: 'Прозрачные цены и бесплатный старт.' },
];

export default function Features() {
  return (
    <section id="features" className={styles.features}>
      <h2 className={styles.heading}>Возможности</h2>
      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardText}>{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}