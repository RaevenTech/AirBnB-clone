import "./App.css";
import Card from "./components/card/Card";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import katieZaferes_image from "./assets/katie-zaferes.png";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Card
                img={katieZaferes_image}
                rating={5.0}
                reviewCount={6}
                country="USA"
                title="Life Lessons with Katie Zaferes"
                price={136}
            />
        </div>
    );
}

export default App;
