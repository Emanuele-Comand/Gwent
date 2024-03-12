import axios from "axios";
import "../css/DeckSelection.css";
import northern from "../assets/icons/Tw3_gwent_deck_Northern_Realms.webp";
import nilfgaard from "../assets/icons/Tw3_gwent_deck_Nilfgaardian.webp";
import monsters from "../assets/icons/Tw3_gwent_deck_Monsters.webp";
import scoiatael from "../assets/icons/Tw3_gwent_deck_Scoiatael.webp";
import arrowLeft from "../assets/icons/arrow-left-svgrepo-com.svg";
import arrowRight from "../assets/icons/arrow-right-svgrepo-com.svg";
import { useState } from "react";
import { useEffect } from "react";

const DeckSelection = () => {
  const empiresArray = [
    {
      empireName: "Northern Realms",
      empireLogo: northern,
      empireEffect: "Draw a card from your deck whenever you win a round.",
    },
    {
      empireName: "Nilfgaardian Empire",
      empireLogo: nilfgaard,
      empireEffect: "Win whenever there is a draw.",
    },
    {
      empireName: "Monsters",
      empireLogo: monsters,
      empireEffect:
        "One randomly-chosen Monsters Unit Card stays on the battlefield after each round.",
    },
    {
      empireName: "Scoia'Tael",
      empireLogo: scoiatael,
      empireEffect: "You decide who goes first at the start of the battle.",
    },
  ];

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/gwentCard.json"
      )
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const [currentIndex, setIndex] = useState(0);
  const goToNext = () => {
    // Se il prossimo elemento dell'array non esiste, setta la funzione setIndex sull'indice 0
    if (!empiresArray[currentIndex + 1]) {
      setIndex(0);
      // Altrimenti setta la funzione setIndex al valore dell'indice corrente "currentIndex" + 1
    } else {
      setIndex(currentIndex + 1);
    }
  };

  const goToPrev = () => {
    // Se siamo all'inizio dell'array,
    if (currentIndex === 0) {
      setIndex(empiresArray.length - 1);
      // Altrimenti setta la funzione setIndex sull'indice precedente a quello corrente (- 1)
    } else {
      setIndex(currentIndex - 1);
    }
  };
  return (
    <>
      <div className="deck-wrapper">
        <div className="prev-deck">
          {
            empiresArray[
              (currentIndex - 1 + empiresArray.length) % empiresArray.length
            ]?.empireName
          }
        </div>
        <div onClick={goToPrev} className="prev-btn btn">
          <img src={arrowLeft} alt="" style={{ height: "25px" }}></img>
        </div>
        <div className="carousel-wrapper">
          <div className="deck">
            <img
              src={empiresArray[currentIndex].empireLogo}
              alt=""
              height={"50px"}
              style={{ marginRight: "20px" }}
            ></img>
            <div className="deck-nav">
              <div className="deck-name">
                {empiresArray[currentIndex].empireName}
              </div>
              <div className="carousel-nav">
                {empiresArray.map((empire, index) => (
                  <li
                    key={index}
                    className={
                      currentIndex === index
                        ? "bullet-point active-bullet-point"
                        : "bullet-point"
                    }
                  ></li>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div onClick={goToNext} className="next-btn btn">
          <img src={arrowRight} alt="" style={{ height: "25px" }}></img>
        </div>
        <div className="next-deck">
          {empiresArray[(currentIndex + 1) % empiresArray.length]?.empireName}
        </div>
      </div>
      <div className="description">
        {empiresArray[currentIndex].empireEffect}
      </div>
    </>
  );
};

export default DeckSelection;
