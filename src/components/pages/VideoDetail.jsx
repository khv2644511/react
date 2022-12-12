import React from "react";
import { useParams } from "react-router-dom";

export default function VideoDetail() {
  const param = useParams();
  console.log(param);
  return <div>VideoDetail</div>;
}
