import "../css/LeaderSelection.css";
import closeCombat from "../assets/icons/Tw3_gwent_close_combat.webp";

const LeaderSelection = () => {
  return (
    <>
      <div className="component-wrapper">
        <h3 className="leader-title">Leader</h3>
        <div className="total-wrapper">
          <p>Total cards in deck</p>
          <div className="data-wrapper">
            <img src={closeCombat} alt="" height={"25px"}></img>
            <span>n°</span>
          </div>
        </div>
        <div className="unit-wrapper">
          <p>Number of Unit Cards in deck</p>
          <div className="data-wrapper">
            <img src={closeCombat} alt="" height={"25px"}></img>
            <span>n°</span>
          </div>
        </div>
        <div className="special-wrapper">
          <p>Special Cards in deck</p>
          <div className="data-wrapper">
            <img src={closeCombat} alt="" height={"25px"}></img>
            <span>n°</span>
          </div>
        </div>
        <div className="strength-wrapper">
          <p>Total Unit Cards Strength</p>
          <div className="data-wrapper">
            <img src={closeCombat} alt="" height={"25px"}></img>
            <span>n°</span>
          </div>
        </div>
        <div className="hero-wrapper">
          <p>Hero Cards</p>
          <div className="data-wrapper">
            <img src={closeCombat} alt="" height={"25px"}></img>
            <span>n°</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderSelection;
