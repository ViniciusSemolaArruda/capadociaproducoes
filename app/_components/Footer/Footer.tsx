import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contato">
      <div className={styles.container}>
        <div>
          <h3 className={styles.brand}>Capadócia Produções</h3>
          <p className={styles.text}>
            Produções, eventos e projetos com propósito, ética e excelência.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Contato</p>
          <p className={styles.text}>
        contato.capadociaeventos@gmail.com
          </p>
          <p className={styles.text}>WhatsApp: (21) 97658-6293</p>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Redes</p>

          <Link
            href="https://www.instagram.com/capadocia_producoes/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label="Instagram Capadócia Produções"
          >
            <Image
              src="/icons/instagram.png"
              alt="Instagram"
              width={22}
              height={22}
              className={styles.socialIcon}
            />
          </Link>
          
        </div>
      </div>

      <div className={styles.bottom}>
        <span>
          © {new Date().getFullYear()} Capadócia Produções, Festas e Eventos Ltda.
        </span>
      </div>
    </footer>
  );
}
