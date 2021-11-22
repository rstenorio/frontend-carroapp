import "./styles.css";
import Product from "./../../assets/image/car-card.png";
import ButtonComprar from "../Button";

const ProductCard = () => {
  return (
    <>
      <div className="base-card product-card">
        <div className="card-top-container">
          <img src={Product} alt="DeskTop" />
        </div>
        <div className="card-bottom-container">
          <h6>Audi TT</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            praesentium!!!!
          </p>
        </div>
        <div className="btn-comprar">
          <ButtonComprar />
        </div>
      </div>
    </>
  );
};

export default ProductCard;
