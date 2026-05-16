import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => {
        const plantsWithStock = data.map((plant) => ({
          ...plant,
          in_stock: plant.in_stock !== false,
        }));
        setPlants(plantsWithStock);
      });
  }, []);

  function handleAddPlant(newPlant) {
    const plantWithStock = {
      ...newPlant,
      in_stock: newPlant.in_stock !== false,
    };
    setPlants([...plants, plantWithStock]);
  }

  const handleTogglePlant = (id) => {
    const updatedPlants = plants.map((plant) =>
      plant.id === id ? { ...plant, in_stock: !plant.in_stock } : plant
    );
    setPlants(updatedPlants);
  };

  const displayedPlants = plants.filter((plant) =>
    plant.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchTerm} onSearchChange={setSearchTerm} />
      <PlantList plants={displayedPlants} onTogglePlant={handleTogglePlant} />
    </main>
  );
}

export default PlantPage;
