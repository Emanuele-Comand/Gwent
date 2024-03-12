import "./css/App.css";
import DeckSelection from "./components/DeckSelection";
import CardsCollection from "./components/CardsCollection";
import LeaderSelection from "./components/LeaderSelection";
import DeckCards from "./components/DeckCards";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [deckName, setDeckName] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://raw.githubusercontent.com/day-s-ea/API-Gwent/main/gwentCard.json`
      )
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  }, []);

  return (
    <>
      <div className="container">
        <section className="header">
          <DeckSelection />
        </section>
        <section className="main">
          <div className="cardsCollection-wrapper">
            <CardsCollection cards={data} />
          </div>
          <div className="leaderSelection-wrapper">
            <LeaderSelection />
          </div>
          <div className="deckCards-wrapper">
            <DeckCards />
          </div>
        </section>
        <section></section>
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
