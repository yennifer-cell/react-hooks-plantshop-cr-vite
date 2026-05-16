import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants = [], onTogglePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant?.id}
          plant={plant}
          onTogglePlant={onTogglePlant}
        />
      ))}
    </ul>
  );
}

export default PlantList;
