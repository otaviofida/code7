import styles from "./styles.module.scss";
import ptBR from "date-fns/locale/pt-BR";
import format from "date-fns/format";

export function Header() {
  
}

export function Title({ contentTitle }) {
  const currentDate = format(new Date(), "EEEEEE,d MMMM", {
    locale: ptBR,
  });
  return (
    <div className={styles.title}>
      <h2>{contentTitle}</h2>
      <span className={styles.date}>{currentDate}</span>
    </div>
  );
}
