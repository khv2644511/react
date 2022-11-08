/** @format */

import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "혜빈";
  const list = ["우유", "딸기", "바나나", "요거트"];
  return (
    <>
      <h1 className="orange">{`Hello! ${name}`}</h1>
      <h2>hi</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <img
        src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        alt=""
      />
      <img
        style={{ width: "200px", height: "200px" }}
        src="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
        alt=""
      />
    </>
  );
}
export default AppJSX;
