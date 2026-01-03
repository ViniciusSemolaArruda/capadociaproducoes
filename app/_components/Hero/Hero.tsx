import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="inicio">
      <div className={styles.bg} aria-hidden="true" />

      <div className={styles.inner}>
        <p className={styles.badge}>Produções • Eventos • Cultura • Experiências</p>

        <h1 className={styles.title}>
          Capadócia Produções
          <span className={styles.sub}>Transformando ideias em eventos memoráveis.</span>
        </h1>

        <p className={styles.desc}>
          Planejamento, execução e comunicação com seriedade, impacto e excelência — do
          conceito ao palco.
        </p>

        <div className={styles.actions}>
          <a href="#faq" className={styles.primary}>Perguntas Frequentes</a>
          <a href="#contato" className={styles.secondary}>Solicitar Orçamento</a>
        </div>

        <div className={styles.highlight}>
          <div className={styles.kpi}>
            <strong>+ Experiência</strong>
            <span>em eventos e ativações</span>
          </div>
          <div className={styles.kpi}>
            <strong>+ Impacto</strong>
            <span>com responsabilidade social</span>
          </div>
          <div className={styles.kpi}>
            <strong>+ Credibilidade</strong>
            <span>ética e transparência</span>
          </div>
        </div>
      </div>
    </section>
  );
}
