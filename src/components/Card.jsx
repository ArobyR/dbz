import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, name, type }) => {
  const path = `/assets/${type}-${id}.png`;

  return (
    <div className="card m-3 col-12 col-md-4 p-2" style={{ width: 250 }}>
      <img loading="lazy" className="card-img-top" src={path} alt={id} />

      <div className="car-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-text">
          <Link className="card-link" to={`/character/${id}`}>
            Ver mas...
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Card;
