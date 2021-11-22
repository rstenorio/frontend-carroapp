import './styles.css';
const CardBusca = () => {
  return (
    <>
      <div className="base-card catalogo-container">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Digite sua busca"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button">
              BUSCAR
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBusca;
