import "./css/App.css";
import DeckSelection from "./components/DeckSelection";

function App() {
  return (
    <>
      <div className="container">
        <DeckSelection />
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
