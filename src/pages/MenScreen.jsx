import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const men = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h2>Men Screen:</h2>
      <hr />
      <div className="row">
        {men.map((man) => (
          <Card key={man.id} {...man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
