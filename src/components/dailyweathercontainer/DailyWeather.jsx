import React from "react";
import { useSelectedItem } from "../../hooks/useSelectedItem";
import DailyWeatherView from "./DailyWeatherView";

const DailyWeather = () => {
  const { handleChange } = useSelectedItem();

  return <DailyWeatherView handleChange={handleChange} />;
};

export default DailyWeather;
