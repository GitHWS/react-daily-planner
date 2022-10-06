import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { AxiosTodoService } from "../api/axios/AxiosTodoService";

import { Text } from "../components/viewcontainer/Text";
import dayjs from "dayjs";
import DailyDate from "../components/dailydatecontainer/DailyDate";
import DailyWeather from "../components/dailyweathercontainer/DailyWeather";
import DailyMood from "../components/dailymoodcontainer/DailyMood";

const Main = () => {
  const [today, setToday] = useState(dayjs().format("YYYY년 MM월 DD일"));

  const [item, setItem] = useState([]);

  useEffect(() => {
    const todoService = new AxiosTodoService();
    todoService.getTodoItems().then((data) => setItem(data));
  }, []);

  useEffect(() => {
    // console.log(item);
  }, [item]);

  return (
    <MainContainer>
      <TitleContentBox>
        <h1 className="title">Daily Planner</h1>
        <DailyDate today={today} />
        <div>
          <DailyWeather />
          <DailyMood />
        </div>
      </TitleContentBox>
      <ContentHalfBox>쿼트박스</ContentHalfBox>
      <ContentHalfBox>목표박스</ContentHalfBox>
      <TodayPlanBox></TodayPlanBox>
      <TimeTable>타임테이블</TimeTable>
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(6, 1fr);
  margin: 0 auto;
  width: 90vw;
  height: 100vh;
  border: 1px solid black;
`;

const TitleContentBox = styled.div`
  display: grid;
  grid-template-rows: 0.3fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-column: 1 / 3;
  border-bottom: 1px solid black;

  & .title {
    grid-column: 1 / 3;
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
  }
`;

const ContentHalfBox = styled.div`
  grid-template-rows: 0.3fr 1fr;
  border-bottom: 1px solid black;
  border-right: 1px solid black;

  & + & {
    border-right: none;
  }
`;

const TodayPlanBox = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr 0.5fr;
  grid-row: 3 / 7;

  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;

const TimeTable = styled.div`
  display: grid;
  grid-template-rows: 30px 1fr;
  grid-row: 3 / 7;
`;
