import styles from "./Reembolsos.module.scss";
import Home from "../../assets/Dashboard/home header.png";
import Seta from "../../assets/Dashboard/Vector.png";
import Analises from "../../assets/Dashboard/Análises.png";
import NumeroAnalises from "../../assets/Dashboard/N-Análises.png";
import NumeroAprovados from "../../assets/Dashboard/N-Aprovados.png";
import NumeroRejeitados from "../../assets/Dashboard/N-Rejeitados.png";
import NumeroSolicitados from "../../assets/Dashboard/N-Solicitados.png";
import Sistema from "../../assets/Dashboard/Sistema-atualizado.png";
import SolicitarHistorico from "../../assets/Dashboard/Solicitar - Histórico.png";
import SolicitarReembolso from "../../assets/Dashboard/Solicitar - Reembolso.png";
//importando a NavBar no Reembolsos
import NavBar from "../navbar/NavBar.jsx"

function Rembolsos() {
  return (
    <div className={styles.body}>

<NavBar />

      <header>
        <img src={Home} alt="/src/assets/Dashboard/home header.png" />
        <img src={Seta} alt="/src/assets/Dashboard/Vector.png" />
        <p>Reembolsos</p>
      </header>

      <main className={styles.mainReembolsos}>
        <h1>Sistema de Reembolsos</h1>
        <p>
          Solicite novos pedidos de reembolso, visualize solicitações em análise
          e todo o histórico.
        </p>

        <section className={styles.containerCards}>
          <article className={styles.card}>
            <img src={SolicitarReembolso} alt="/src/assets//Dashboard/Solicitar - Reembolso.png" />
            <p>Solicitar Reembolso</p>
          </article>

          <article className={styles.card}>
            <img src={Analises} alt="/src/assets/Dashboard/Análises (1).png "/>
            <p>Verificar análises</p>
          </article>

          <article className={styles.card}>
            <img src={SolicitarHistorico} alt="/src/assets/Dashboard/Análises (1).png"/>
            <p>Histórico</p>
          </article>
        </section>

        <section className={styles.containerDados}>
          <div>
            <img
              className={styles.imgSolicitados}
              src={NumeroSolicitados}
              alt="/src/assets/Dashboard/N-Solicitados.png"
            />
            <h4>182</h4>
            <p>Solicitados</p>
          </div>

          <div>
            <img className={styles.imgAnalise} src={NumeroAnalises} alt="/src/assets/Dashboard/N-Análises.png" />
            <h4>74</h4>
            <p>Em análise</p>
          </div>

          <div>
            <img className={styles.imgAprovados} src={NumeroAprovados} alt="/src/assets/Dashboard/N-Aprovados.png" />
            <h4>195</h4>
            <p>Aprovados</p>
          </div>

          <div>
            <img
              className={styles.imgRejeitados}
              src={NumeroRejeitados}
              alt="/src/assets/Dashboard/N-Rejeitados (1).png"
            />
            <h4>41</h4>
            <p>Rejeitados</p>
          </div>
        </section>

        <section className={styles.containerSistema}>
          <img src={Sistema} alt="/src/assets/Dashboard/Sistema-atualizado (1).png" />
          <a href="">Sistema atualizado.</a>
        </section>
      </main>
    </div>
  );
}
export default Rembolsos;