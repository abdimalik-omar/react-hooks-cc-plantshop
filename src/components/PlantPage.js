import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://react-hooks-cc-plantshop-3-jno3.onrender.com/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data))
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  const handleToggleSoldOut = (id) => {
    setPlants((prevPlants) =>
      prevPlants.map((plant) =>
        plant.id === id ? { ...plant, soldOut: !plant.soldOut } : plant
      )
    );
  };

  const handleSearch = (query) => {
    setSearchQuery(query); // Update the search query
  };

  const handleDeletePlant = (id) => {
    setPlants((prevPlants) => prevPlants.filter((plant) => plant.id !== id));

  
}
  
  const handleAddPlant = (newPlant) => {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  };

  // Filter plants based on the search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="plant-page">
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search onSearch={handleSearch} />
      <PlantList plants={filteredPlants} 
      onToggleSoldOut={handleToggleSoldOut}
      onDeletePlant={handleDeletePlant} />
    </div>
  );
}

export default PlantPage;
