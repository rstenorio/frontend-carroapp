import ProductCard from "../../components/Product";
import CardBusca from "../../components/CardBusca";
import "./styles.css";

const Catalogo = () => {
  return (
    <>
      <div className="card-container">
        <div>
          <CardBusca />
        </div>

        <div className="container my-4">
          <div className="row">
          <div className="prod col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="prod col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="prod col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="prod col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
            <div className="prod col-sm-6 col-lg-4 col-xl-3">
              <ProductCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalogo;
