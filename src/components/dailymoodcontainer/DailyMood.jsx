import React, { useState } from "react";
import DailyMoodView from "./DailyMoodView";

const DailyMood = () => {
  const [selectedMood, setSelectedMood] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setSelectedMood(e.target.value);
  };

  return <DailyMoodView handleChange={handleChange} />;
};

export default DailyMood;
