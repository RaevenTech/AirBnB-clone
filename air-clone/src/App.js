import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Card />
        </div>
    );
}

export default App;
