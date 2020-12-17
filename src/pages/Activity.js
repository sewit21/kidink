import React from "react";
import Gamez from "../components/Gamez";
import "../components/tix.css";

export default function Activity() {
  return (
    <div className="Atitle">
      <div className="title">
        <h1> A Game of Tic Tac Toe</h1>
      </div>
      <div className="gamez">
        <Gamez />
      </div>
    </div>
  );
}
