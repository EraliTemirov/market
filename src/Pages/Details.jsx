import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);


   


  return (
    <div>
      <div>
        <header className="text-bg-primary py-3 shadow sticky-top">
          <nav className="container d-flex align-items-center justify-content-between">
            <Link className="text-warning text-decoration-none fs-2" to="/">
              Najot Market
            </Link>

            <ul className="list-unstyled d-flex align-items-center gap-3 m-0">
              <li>
                <Link className="btn btn-primary fs-4" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/" className="btn btn-primary fs-4">
                  Logout{" "}
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="container mt-5 border border-5">
        <div className="d-flex justify-content-around">
          <img src={producte.image} className="w-25" alt="rasm" />
          <div className="w-50">
            <h2 className="fs-2">Tittle: {producte.title}</h2>
            <p className="fs-3">
              <span className="des-span">Price:</span> {producte.price}$
            </p>
            <p className="fs-3">
              <span className="des-span">Categoria:</span> {producte.category}
            </p>
          </div>
        </div>
        <p className="fs-4">
          <span className="des-span">Description:</span> {producte.description}
        </p>
      </div>
    </div>
  );
};
export default Details;
