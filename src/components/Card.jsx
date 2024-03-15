import "../css/Card.css";

const Card = ({ data, onCardClick }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <div className="card-wrapper" onClick={onCardClick}>
        <img
          src={
            "https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/img_gwentCard/" +
            data.img.faction
          }
          alt=""
          // style={{ width: "145px" }}
        ></img>
      </div>
    </>
  );
};

export default Card;
