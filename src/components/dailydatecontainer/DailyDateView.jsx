import React from "react";
import { Text } from "../viewcontainer/Text";

const DailyDateView = ({ today }) => {
  return (
    <div>
      <Text type="title">Date</Text>
      <Text type="content">{today}</Text>
    </div>
  );
};

export default DailyDateView;
