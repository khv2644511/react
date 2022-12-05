import React, { useState } from "react";

export default function Counter({ total, onClick }) {
  const [count, setCount] = useState(0);
  const Click = () => {
    setCount((prev) => prev + 1);
    onClick();
  };
  return (
    <div>
      <div className="counter">
        <span>{count}</span> /<span> {total}</span>
      </div>
      <button className="button" onClick={Click}>
        Add+
      </button>
    </div>
  );
}
