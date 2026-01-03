"use client";

import { useId, useMemo, useState } from "react";
import styles from "./FAQSection.module.css";

type FaqItem = {
  question: string;
  answer: string;
};

export default function FAQSection() {
  const uid = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = useMemo(
    () => [
      {
        question: "Que tipo de eventos a Capadócia produz?",
        answer:
          "Atuamos em eventos culturais, esportivos, corporativos e de entretenimento. Do planejamento à execução, cuidamos de cada etapa para transformar a ideia em uma experiência memorável.",
      },
      {
        question: "Vocês atendem projetos de diferentes tamanhos e orçamentos?",
        answer:
          "Sim. Ajustamos o escopo à realidade do cliente, com soluções inteligentes para diferentes níveis de complexidade e investimento — sempre com organização e qualidade.",
      },
      {
        question: "Vocês também fazem tecnologia para eventos?",
        answer:
          "Sim. Além da produção, desenvolvemos sites e páginas do evento, sistemas de inscrição e credenciamento, integrações com pagamento, controle de público e soluções digitais para otimizar a gestão e a experiência do participante.",
      },
      {
        question: "Como funciona o processo de contratação?",
        answer:
          "Começamos entendendo objetivo, público, local e prazos. Depois apresentamos proposta com escopo, cronograma e necessidades técnicas. Com a aprovação, entramos em produção com checkpoints e alinhamentos.",
      },
      {
        question: "Como solicitar uma proposta?",
        answer:
          "Basta entrar em contato e contar sobre o seu projeto (data, local, público e objetivo). Retornamos com os próximos passos e uma proposta alinhada ao que você precisa.",
      },
    ],
    []
  );

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
  }

  return (
    <section id="faq" className={styles.section} aria-label="Perguntas frequentes">
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h2 className={styles.title}>Perguntas frequentes</h2>
          <p className={styles.subtitle}>
            Respostas rápidas sobre produção, planejamento e soluções digitais.
          </p>
        </header>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            const contentId = `${uid}-faq-${i}`;

            return (
              <div
                key={`${item.question}-${i}`}
                className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
              >
                <button
                  type="button"
                  className={styles.button}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <span className={styles.left}>
                    <span className={styles.icon} aria-hidden="true">
                      ?
                    </span>
                    <span className={styles.question}>{item.question}</span>
                  </span>

                  <span
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </button>

                <div
                  id={contentId}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ""}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
