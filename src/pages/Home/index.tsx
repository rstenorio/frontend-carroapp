import { ReactComponent as MainImage } from "./../../assets/image/car.svg";
import ButtonVerCatalogo from "../../components/ButtonVerCatalogo";
import "./styles.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="home-card">
          <div className="base-card home-content-container">
            <div>
              <h2>O carro perfeito para você</h2>
              <p>
                Conheça nossos carros e dê mais um passo na realização do seu
                sonho
              </p>
            </div>
            <div className="home-img-container">
              <MainImage />
            </div>
          </div>
        </div>
        <div className="base-card home-button-container">
          <Link to="/products">
            <ButtonVerCatalogo />
          </Link>
          <p>Comece agora a navegar.</p>
        </div>
      </div>
    </>
  );
};

export default Home;
