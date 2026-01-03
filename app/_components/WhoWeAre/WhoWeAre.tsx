import Image from "next/image";
import styles from "./WhoWeAre.module.css";

export default function WhoWeAre() {
  return (
    <section className={styles.section} id="quem-somos">
      <div className={styles.container}>
        {/* ESQUERDA — texto */}
        <div className={styles.left}>
          <h2 className={styles.heading}>
            <span className={styles.headingLight}>Quem</span>{" "}
            <span className={styles.headingStrong}>somos</span>
          </h2>

          <p className={styles.lead}>
            <strong>
              Somos a produtora que transforma boas ideias em grandes realizações.
            </strong>
          </p>

          <p className={styles.text}>
            Com quase 30 anos de trajetória, a <strong>Capadócia Produções e Eventos</strong>{" "}
            consolidou-se como referência no setor criativo, atuando na produção
            de eventos culturais, esportivos, empresariais e de entretenimento,
            sempre com excelência, inovação e propósito.
          </p>

          <p className={styles.text}>
            Acreditamos que toda ideia bem sonhada pode ser concretizada — seja a
            maior árvore de Natal flutuante do mundo ou uma experiência inesquecível
            na Baía de Guanabara. Independentemente da escala, da complexidade ou
            do orçamento, buscamos sempre a melhor solução para tirar projetos do
            papel e transformá-los em experiências memoráveis.
          </p>

          <p className={styles.text}>
            Nossa equipe é multidisciplinar, formada por engenheiros, arquitetos,
            comunicólogos, designers e especialistas em tecnologia, unindo
            criatividade, capacidade técnica e planejamento estratégico para
            garantir resultados consistentes em todos os pontos de contato do
            projeto.
          </p>

          <p className={styles.text}>
            Além da produção de eventos, integramos tecnologia e inovação aos
            nossos projetos, desenvolvendo sites, plataformas digitais, sistemas
            de inscrição, gestão de público e soluções de pagamento, ampliando o
            alcance das ações e oferecendo experiências completas, eficientes e
            conectadas às novas demandas do mercado.
          </p>

          <p className={styles.text}>
            Aqui, o público e os parceiros estão sempre no centro das decisões.
            Trabalhamos com dedicação e atenção absoluta aos detalhes para
            fortalecer a relação das marcas com as pessoas, gerar impacto real e
            entregar resultados que vão além do evento.
          </p>

          <p className={styles.cta}>
            <strong>Quer dar vida à sua ideia? Pode contar com a gente.</strong>
          </p>
        </div>

        {/* DIREITA — logo */}
        <div className={styles.right}>
          <div className={styles.rightSticky}>
            <Image
              src="/novaLOGO.png"
              alt="Capadócia Produções"
              width={1400}
              height={900}
              priority
              className={styles.art}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
