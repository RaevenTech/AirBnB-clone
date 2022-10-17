import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import data from "./appData/data";

function App() {
    const cards = data.map((card, i) => {
        return <Card key={i} card={card} />;
    });
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <div id="cards">{cards}</div>
        </div>
    );
}

export default App;
