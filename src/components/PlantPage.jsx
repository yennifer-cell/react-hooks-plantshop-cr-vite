<<<<<<< HEAD
import { useState, useEffect } from "react";
=======
import React, { useState, useEffect } from "react";
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
<<<<<<< HEAD
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  function handleAddPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  // Filter plants based on search query
  const displayedPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
=======
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => {
        const plantsWithStock = data.map((plant) => ({
          ...plant,
          in_stock: plant.in_stock !== false,
        }));
        setPlants(plantsWithStock);
      });
  }, []);

  const handleAddPlant = (newPlant) => {
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        const plantWithStock = {
          ...data,
          in_stock: data.in_stock !== false,
        };
        setPlants([...plants, plantWithStock]);
      });
  };

  const handleTogglePlant = (id) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, in_stock: !plant.in_stock } : plant
    );
    setPlants(updatedPlants);
  };

  const filteredPlants = plants.filter((plant) =>
    plant.name?.toLowerCase().includes(searchTerm.toLowerCase())
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
<<<<<<< HEAD
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={displayedPlants} />
=======
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={filteredPlants} onTogglePlant={handleTogglePlant} />
>>>>>>> 46f8499 (Fix PlantCard rendering safety and wire up NewPlantForm/Search state)
    </main>
  );
}

export default PlantPage;
