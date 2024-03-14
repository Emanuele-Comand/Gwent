import "../css/CardsCollection.css";
import allCards from "../assets/icons/icone_menu_gwent/double_cards.svg";
import closeCombat from "../assets/icons/icone_menu_gwent/sword.svg";
import ranged from "../assets/icons/icone_menu_gwent/bow.svg";
import siege from "../assets//icons/icone_menu_gwent/siege.svg";
import knight from "../assets//icons/icone_menu_gwent/knight.svg";
import weather from "../assets//icons/icone_menu_gwent/sun.svg";
import special from "../assets//icons/icone_menu_gwent/special.svg";
import Card from "./Card";

const CardsCollection = ({
  cards,
  onCardClick,
  selectedCategory,
  onCategoryClick,
}) => {
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
            onClick={() => onCategoryClick("Close combat")}
          ></img>
        </li>
        <li className="category">
          <img
            src={ranged}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Ranged combat")}
          ></img>
        </li>
        <li className="category">
          <img
            src={siege}
            style={{ height: "33px", filter: "invert(0.4) sepia(1)" }}
            alt=""
            onClick={() => onCategoryClick("Siege")}
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
        {cards
          .filter(
            (c) =>
              selectedCategory === "" || c.attributes.row === selectedCategory
          )
          .map((c) => (
            <Card data={c} onCardClick={() => onCardClick(c)} />
          ))}
      </div>
    </>
  );
};

export default CardsCollection;
