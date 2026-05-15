import React from "react";
import PlantCard from "./PlantCard";

<<<<<<< HEAD
function PlantList({ plants }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
=======
function PlantList({ plants = [], onTogglePlant }) {
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard
          key={plant?.id}
          plant={plant}
          onTogglePlant={onTogglePlant}
        />
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
      ))}
    </ul>
  );
}

export default PlantList;
