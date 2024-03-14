import "../css/CentralSelection.css";
import pileCards from "../assets/icons/menu_icons/pile_cards.svg";
import unitCards from "../assets/icons/menu_icons/units_cards.svg";
import specialCards from "../assets/icons/menu_icons/special_cards.svg";
import strength from "../assets/icons/menu_icons/strength.svg";
import knight from "../assets/icons/menu_icons/knight.svg";

const LeaderSelection = () => {
  return (
    <>
      <div className="component-wrapper">
        <h3 className="leader-title">Leader</h3>
        <div className="total-wrapper">
          <p>Total cards in deck</p>
          <div className="data-wrapper">
            <img
              src={pileCards}
              alt=""
              style={{ height: "25px", filter: "invert(0.4) sepia(1)" }}
            ></img>
            <span>n°</span>
          </div>
        </div>
        <div className="unit-wrapper">
          <p>Number of Unit Cards in deck</p>
          <div className="data-wrapper">
            <img
              src={unitCards}
              alt=""
              style={{ height: "25px", filter: "invert(0.4) sepia(1)" }}
            ></img>
            <span>n°</span>
          </div>
        </div>
        <div className="special-wrapper">
          <p>Special Cards in deck</p>
          <div className="data-wrapper">
            <img
              src={specialCards}
              alt=""
              style={{ height: "25px", filter: "invert(0.4) sepia(1)" }}
            ></img>
            <span>n°</span>
          </div>
        </div>
        <div className="strength-wrapper">
          <p>Total Unit Cards Strength</p>
          <div className="data-wrapper">
            <img
              src={strength}
              alt=""
              style={{ height: "25px", filter: "invert(0.4) sepia(1)" }}
            ></img>
            <span>n°</span>
          </div>
        </div>
        <div className="hero-wrapper">
          <p>Hero Cards</p>
          <div className="data-wrapper">
            <img
              src={knight}
              alt=""
              style={{ height: "25px", filter: "invert(0.4) sepia(1)" }}
            ></img>
            <span>n°</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderSelection;
