import Image from "next/image";
import styles from "./Values.module.css";

const items = [
  {
    title: "Nossa Missão",
    text: "Transformar cada evento em uma experiência única e inesquecível para nossos clientes e seus convidados. Facilitar a conexão entre pessoas através de eventos personalizados e inovadores, superando as expectativas dos clientes e amigos, oferecendo serviços de alta qualidade e atendimento personalizado.",
    icon: "/icons/missao.png",
  },
  {
    title: "Responsabilidade Social",
    text: "Somos uma empresa com a capacidade de construir o seu evento corporativo, como: congressos, conferências e feiras. Além disso, realizamos eventos sociais com foco em casamentos, aniversários e festas temáticas, sempre com temas exclusivos. Nosso maior compromisso é com as pessoas: garantimos uma experiência personalizada, cuidando de cada detalhe para que seu evento seja inesquecível, atendendo às necessidades e expectativas de cada cliente com dedicação e excelência.",
    icon: "/icons/social.png",
  },
  {
    title: "Ética e Transparência",
    text: "Na Capadócia Produções e Eventos, acreditamos que a ética e a transparência são fundamentais para construir relações de confiança com nossos clientes, parceiros e colaboradores. Valorizamos a honestidade e o compromisso com as melhores práticas em todas as etapas do processo. Nosso compromisso é ser transparente quanto aos serviços, prazos, custos e resultados, para que nossos clientes se sintam seguros e confiantes em nossas decisões, sempre alinhadas aos mais altos padrões profissionais.",
    icon: "/icons/transparencia.png",
  },
];

export default function Values() {
  return (
    <section className={styles.section} id="pilares">
      <div className={styles.container}>
        <h2 className={styles.title}>Nossos pilares</h2>
        <p className={styles.subtitle}>
          Valores que sustentam cada projeto da Capadócia Produções.
        </p>

        <div className={styles.grid}>
          {items.map((it) => (
            <article key={it.title} className={styles.card}>
              <div className={styles.iconSlot} aria-hidden="true">
                <Image src={it.icon} alt="" width={64} height={64} className={styles.icon} />
              </div>

              <h3 className={styles.cardTitle}>{it.title}</h3>
              <p className={styles.cardText}>{it.text}</p>
            </article>
          ))}
        </div>

        
      </div>
    </section>
  );
}
