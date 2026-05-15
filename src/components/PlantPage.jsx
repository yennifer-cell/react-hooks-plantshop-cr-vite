import { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
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
  );

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <PlantList plants={displayedPlants} />
    </main>
  );
}

export default PlantPage;
