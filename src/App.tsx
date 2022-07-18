import { useState } from "react";
import "./App.css";
import Button from "./components/button";
import Text from "./components/text";

function App() {
  const [innerText, setInnerText] = useState("");

  return (
    <div className="App">
      <h1>버튼을 누르면 텍스트가 변하는 홈페이지 입니다.</h1>
      <Button setInnerText={setInnerText} />
      <Text innerText={innerText} />
    </div>
  );
}

export default App;
