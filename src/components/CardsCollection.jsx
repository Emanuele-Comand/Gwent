import "../css/CardsCollection.css";
import allCards from "../assets/icons/menu_icons/double_cards.svg";
import closeCombat from "../assets/icons/menu_icons/sword.svg";
import ranged from "../assets/icons/menu_icons/bow.svg";
import siege from "../assets/icons/menu_icons/siege.svg";
import knight from "../assets/icons/menu_icons/knight.svg";
import weather from "../assets/icons/menu_icons/sun.svg";
import special from "../assets/icons/menu_icons/special.svg";
import Card from "./Card";

const CardsCollection = ({ cards, onCardClick, onCategoryClick }) => {
  return (
    <>
      <h3 className="title">Card collection</h3>
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
            onClick={() => onCategoryClick("")}
          ></img>
        </li>
        <li className="category">
          <img
            src={closeCombat}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Close combat", "row")}
          ></img>
        </li>
        <li className="category">
          <img
            src={ranged}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Ranged combat", "row")}
          ></img>
        </li>
        <li className="category">
          <img
            src={siege}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Siege", "row")}
          ></img>
        </li>
        <li className="category">
          <img
            src={knight}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Heroes", "type")}
          ></img>
        </li>
        <li className="category">
          <img
            src={weather}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Weather", "type")}
          ></img>
        </li>
        <li className="category">
          <img
            src={special}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Special", "type")}
          ></img>
        </li>
      </ul>
      <div className="cards-container">
        <div className="box-cards">
          {cards.map((c) => (
            <Card data={c} onCardClick={() => onCardClick(c)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsCollection;
