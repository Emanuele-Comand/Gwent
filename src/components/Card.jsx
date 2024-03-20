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
            "https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/img_gwentCards/" +
            (data.img.faction || data.img.description)
          }
          alt=""
        ></img>
      </div>
    </>
  );
};

export default Card;
