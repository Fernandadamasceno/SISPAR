import Historico from "../../assets/Header/Botão - Histórico.png";
import Home from "../../assets/Header/botão - Home.png";
import Pesquisa from "../../assets/Header/Botão - Pesquisa.png";
import Reembolso from "../../assets/Header/Botão - Reembolso.png";
import Sair from "../../assets/Header/Botão - Sair.png";
import Perfil from "../../assets/Header/image.png";
import Fechar from "../../assets/Header/imagem-fechar-header.png";
import styles from "./NavBar.module.scss";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className={styles.navBarEstilo}>
      <button>
        <img src={Fechar} alt="/src/assets/Header/imagem-fechar-header.png" />
      </button>

      <section>
        <img src={Perfil} alt="/src/assets//Header/image.png" />

        <div>
          <button
            onClick={() => {
              navigate("/reembolsos");
            }}
          >
            <img src={Home} alt="/src/assets/Dashboard/home header.png" />
          </button>

          <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Reembolso} alt="/src/assets//Header/Botão - Reembolso.png" />
          </button>

          <button onClick={()=>{navigate("/reembolsos")}}>
            <img src={Pesquisa} alt="/src/assets/Header/Botão - Pesquisa.png" />
          </button>

          <button onClick={()=>{navigate("/solicitacao")}}>
            <img src={Historico} alt="/src/assets/Header/Botão - Histórico.png" />
          </button>
        </div>
      </section>

      <button className={styles.buttonSair}  onClick={()=>{navigate("/")}}>
        <img src={Sair} alt="../../assets/Header/Botão - Sair.png" />
      </button>
    </nav>
  );
}

export default NavBar;