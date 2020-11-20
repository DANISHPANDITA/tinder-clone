import React, { useState, useEffect } from "react";
import "./Card.css";
import TinderCard from "react-tinder-card";
import axios from "./axios";

function Card() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");
      setPeople(req.data);
    }
    fetchData();
  }, []);
  console.log(people);
  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <div className="cardContainer">
      {people.map((person) => (
        <TinderCard
          className="swipe"
          key={person.name}
          onSwipe={(dir) => swiped(dir, person.name)}
          preventSwipe={["up", "down"]}
          onCardLeftScreen={() => outOfFrame(person.name)}
        >
          <div
            style={{ backgroundImage: "url(" + person.imgUrl + ")" }}
            className="card"
          >
            <h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))}
    </div>
  );
}

export default Card;
