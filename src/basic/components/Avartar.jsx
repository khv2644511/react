/** @format */

import React from "react";

export default function Avartar({ image, isNew }) {
  return (
    <div className="avartar">
      <img className="photo" src={image} alt="avartar" />
      {isNew && <span className="new">Neew</span>}
    </div>
  );
}
