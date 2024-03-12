import "../css/CardsCollection.css";
import closeCombat from "../assets/icons/Tw3_gwent_close_combat.webp";
import ranged from "../assets/icons/Tw3_gwent_ranged_combat.webp";
import siege from "../assets/icons/Tw3_gwent_siege.webp";
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
          <img src={closeCombat} style={{ height: "33px" }} alt=""></img>
        </li>
        <li className="category">
          <img src={ranged} style={{ height: "33px" }} alt=""></img>
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
