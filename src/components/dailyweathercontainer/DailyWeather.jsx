import React, { useState } from "react";
import DailyWeatherView from "./DailyWeatherView";

const DailyWeather = () => {
  const [selectedWeather, setSelectedWeather] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedWeather(e.target.value);
  };

  return <DailyWeatherView handleChange={handleChange} />;
};

export default DailyWeather;
