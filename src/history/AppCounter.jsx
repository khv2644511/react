import React, { useState } from "react";
import Counter from "./Counter";

export default function AppCounter() {
  const [count, setCount] = useState(0);

  const handlClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div className="container">
      <div className="banner">
        Total Count: {count} {count > 10 ? "🔥" : "❄️"}
      </div>
      <div className="counters">
        <Counter onClick={handlClick} total={count} />
        <Counter onClick={handlClick} total={count} />
      </div>
    </div>
  );
}
