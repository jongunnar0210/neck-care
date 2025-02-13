import styles from "./styles/page.module.scss";
import Testimonials from "./components/Testimonials/Testimonials";
import Card from "./components/Card/Card";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <label>
          <em>Neck</em>Care
        </label>
        <nav>
          <button>One</button>
          <button>two</button>
        </nav>
      </header>
      <main className={styles.main}>
        <h2>Hey welcome to NeckCare</h2>
        <h2>
          We make <em>necks</em> great
        </h2>

        <div className={styles.cards}>
          <Card
            text="Range of Motion"
            subText="No goniometer"
            availableSince={2022}
          />
          <Card
            text="Joint Position Error"
            subText="Goodbye laser"
            availableSince={2023}
          />
          <Card
            text="Butterfly Text"
            subText="Based on over 20+ years research"
            availableSince={2024}
          />
        </div>

        <Testimonials />
      </main>
    </div>
  );
}
