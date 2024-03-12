import "../css/CardsCollection.css";
import allCards from "../assets/icons/icone menù gwent/double_cards.svg";
import closeCombat from "../assets/icons/icone menù gwent/sword.svg";
import ranged from "../assets/icons/icone menù gwent/bow.svg";
import siege from "../assets//icons/icone menù gwent/siege.svg";
import knight from "../assets//icons/icone menù gwent/knight.svg";
import weather from "../assets//icons/icone menù gwent/sun.svg";
import special from "../assets//icons/icone menù gwent/special.svg";
import { useState } from "react";
import Card from "./Card";

const CardsCollection = ({ cards }) => {
  const [category, setCategory] = useState(0);
  const cardsCategory = [];
  return (
    <>
      <h3 className="title">Card collection</h3>
      <h4 className="category-title">All cards</h4>
      <ul className="categories">
        <li className="category">
          <img src={closeCombat} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={ranged} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={siege} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={knight} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={weather} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={siege} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={siege} style={{ height: "33px" }} alt=""></img>
        </li>
      </ul>
      <div className="cards-container">
        {cards.map((c) => (
          <Card data={c} />
        ))}
      </div>
    </>
  );
};

export default CardsCollection;
