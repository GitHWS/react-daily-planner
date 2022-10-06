import React from "react";
import { useSelectedItem } from "../../hooks/useSelectedItem";
import DailyMoodView from "./DailyMoodView";

const DailyMood = () => {
  const { handleChange } = useSelectedItem();
  return <DailyMoodView handleChange={handleChange} />;
};

export default DailyMood;
