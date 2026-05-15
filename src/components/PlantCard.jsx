import React from "react";

function PlantCard({ plant, onTogglePlant }) {
  if (!plant) return null;

  const {
    id,
    name = "Unknown Plant",
    price = "N/A",
    image = "",
    in_stock = false,
  } = plant;

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {in_stock ? (
        <button className="primary" onClick={() => onTogglePlant(id)}>
          In Stock
        </button>
      ) : (
        <button onClick={() => onTogglePlant(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
