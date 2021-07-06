import styles from "./styles.module.scss";

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <img src="/logo-code7.svg" alt="Logo Code7" />
      <p>Dashboard Controle de Dívidas</p>
    </header>
  );
}
