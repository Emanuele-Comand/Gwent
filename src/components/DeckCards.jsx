import "../css/DeckCards.css";
import allCards from "../assets/icons/icone menù gwent/double_cards.svg";
import closeCombat from "../assets/icons/icone_menu_gwent/sword.svg";
import ranged from "../assets/icons/icone_menu_gwent/bow.svg";
import siege from "../assets//icons/icone_menu_gwent/siege.svg";
import knight from "../assets//icons/icone_menu_gwent/knight.svg";
import weather from "../assets//icons/icone_menu_gwent/sun.svg";
import special from "../assets//icons/icone_menu_gwent/special.svg";
import Card from "./Card";

const DeckCards = ({ cards, selectedCategory }) => {
  return (
    <>
      <h3 className="title">Deck Cards</h3>
      <h4 className="category-title">All cards</h4>
      <ul className="categories">
        <li className="category">
          <img
            src={allCards}
            style={{
              height: "33px",
              filter: "invert(0.4) sepia(1)",
            }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={closeCombat}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={ranged}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={siege}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={knight}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={weather}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
        </li>
        <li className="category">
          <img
            src={special}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
          ></img>
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

export default DeckCards;
