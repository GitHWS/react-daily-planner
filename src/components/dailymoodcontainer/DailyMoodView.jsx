import React from "react";

import { Text } from "../viewcontainer/Text";

const DailyMoodView = ({ handleChange }) => {
  return (
    <div>
      <Text type="title">Mood</Text>
      <input
        type="radio"
        id="happy"
        value="happy"
        name="mood"
        onChange={handleChange}
      />
      <label htmlFor="happy">Happy</label>
      <input
        type="radio"
        id="good"
        value="good"
        name="mood"
        onChange={handleChange}
      />
      <label htmlFor="good">Good</label>
      <input
        type="radio"
        id="sad"
        value="sad"
        name="mood"
        onChange={handleChange}
      />
      <label htmlFor="sad">Sad</label>
    </div>
  );
};

export default DailyMoodView;
