import "./css/App.css";
import DeckSelection from "./components/DeckSelection";
import CardsCollection from "./components/CardsCollection";
import CentralSelection from "./components/CentralSelection";
import DeckCards from "./components/DeckCards";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [deckName, setDeckName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCards, setSelectedCards] = useState([]);

  const [data, setData] = useState([]);
  const addCardToDeck = (card) => {
    setSelectedCards((prevCards) => [...prevCards, card]);
  };

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/gwentCard.json`
      )
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <section className="header">
          <DeckSelection onDeckChange={(deck) => setDeckName(deck)} />
        </section>
        <section className="main">
          <div className="cardsCollection-wrapper">
            <CardsCollection
              cards={data.filter(
                (d) =>
                  d.attributes.deck === deckName &&
                  d.attributes.type !== "Leaders" &&
                  (selectedCategory === "" ||
                    d.attributes.row === selectedCategory)
              )}
              onCardClick={addCardToDeck}
              selectedCategory={selectedCategory}
              onCategoryClick={setSelectedCategory}
            />
          </div>
          <div className="leaderSelection-wrapper">
            <CentralSelection />
          </div>
          <div className="deckCards-wrapper">
            <DeckCards
              cards={selectedCards}
              onCategoryClick={setSelectedCategory}
            />
          </div>
        </section>
      </div>
      <div className="background">
        <div id="foglayer_01" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_02" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
        <div id="foglayer_03" className="fog">
          <div className="image01"></div>
          <div className="image02"></div>
        </div>
      </div>
    </>
  );
}

export default App;
