import React from "react";
import Card from "../components/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const man = Characters.filter((character) => character.type === "h");

  return (
    <div className="container mt-3">
      <h2>Men Screen:</h2>
      <hr />
      <div className="row">
        {man.map((men) => (
          <Card key={men.id} {...men} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
