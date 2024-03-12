import "../css/DeckCards.css";
import closeCombat from "../assets/icons/Tw3_gwent_close_combat.webp";
import ranged from "../assets/icons/Tw3_gwent_ranged_combat.webp";
import siege from "../assets/icons/Tw3_gwent_siege.webp";

const DeckCards = () => {
  return (
    <>
      <h3 className="title">Deck Cards</h3>
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
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </>
  );
};

export default DeckCards;
