import "../css/Card.css";

const Card = ({ data }) => {
  if (!data) {
    return null;
  }
  return (
    <>
      <div className="card-wrapper">
        <img
          src={
            "https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/img_gwentCard/" +
            data.img.faction
          }
          alt=""
          className="cards-container"
        ></img>
      </div>
    </>
  );
};

export default Card;
