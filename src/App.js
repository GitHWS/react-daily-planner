import Main from "./pages/Main";
import dayjs from "dayjs";

function App() {
  dayjs.locale("ko");

  return (
    <>
      <Main />
    </>
  );
}

export default App;
