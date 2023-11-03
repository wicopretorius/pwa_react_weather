import React, { useState } from "react";
import "./App.css";
import { fetchWeather } from "./api/fetchWeather";
import WeatherView from "./components/WeatherView";

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      setQuery("");
      console.log(data);
    }
  };

  return (
    <div className="main-container">
      <h1 className="heading">City Weather</h1>
      <input
        id="city"
        type="text"
        className="search"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={search}
      />
      {weather.main && (
        <WeatherView weather={weather}/>
       )} 
    </div>
  );
}

export default App;
