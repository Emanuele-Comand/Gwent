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
  const [filterType, setFilterType] = useState("");

  const [data, setData] = useState([]);
  const addCardToDeck = (card) => {
    setSelectedCards((prevCards) => [...prevCards, card]);
  };

  const setSelectedCategoryAndType = (category, type) => {
    setSelectedCategory(category);
    setFilterType(type);
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

  const filteredData = data.filter((d) => {
    if (selectedCategory === "Heroes" && d.attributes.type === "Heroes") {
      return d.attributes.deck === deckName || d.attributes.deck === "Neutral";
    }
    if (selectedCategory === "Weather" && d.attributes.type === "Weather") {
      return d.attributes.deck === "Neutral";
    }
    if (selectedCategory === "Special" && filterType === "type") {
      return (
        d.attributes.deck === "Neutral" &&
        (d.attributes.type === "Weather" || d.attributes.type === "Special")
      );
    }
    return (
      d.attributes.deck === deckName &&
      d.attributes.type !== "Leaders" &&
      (selectedCategory === "" || d.attributes[filterType] === selectedCategory)
    );
  });

  const leaders = data.filter((d) => {
    return d.attributes.deck === deckName && d.attributes.type === "Leaders";
  });

  console.log(leaders); // Dopo che il filtraggio è stato applicato
  return (
    <>
      <div className="container">
        <section className="header">
          <DeckSelection onDeckChange={(deck) => setDeckName(deck)} />
        </section>
        <section className="main">
          <div className="cardsCollection-wrapper">
            <CardsCollection
              cards={filteredData}
              onCardClick={addCardToDeck}
              selectedCategory={(cat, type) => {
                setSelectedCategory(cat);
                setFilterType(type);
              }}
              onCategoryClick={setSelectedCategoryAndType}
            />
          </div>
          <div className="leaderSelection-wrapper">
            <CentralSelection leaders={leaders} />
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
