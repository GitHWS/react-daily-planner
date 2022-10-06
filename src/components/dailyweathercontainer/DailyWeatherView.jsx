import React, { useState } from "react";

import { Text } from "../viewcontainer/Text";

const DailyWeatherView = ({ handleChange }) => {
  return (
    <div>
      <Text type="title">Weather</Text>
      <input
        type="radio"
        id="sunny"
        value="sunny"
        name="weather"
        onChange={handleChange}
      />
      <label htmlFor="sunny">Sunny</label>
      <input
        type="radio"
        id="rainy"
        value="rainy"
        name="weather"
        onChange={handleChange}
      />
      <label htmlFor="rainy">Rainy</label>
      <input
        type="radio"
        id="snowy"
        value="snowy"
        name="weather"
        onChange={handleChange}
      />
      <label htmlFor="snowy">Snowy</label>
    </div>
  );
};

export default DailyWeatherView;
