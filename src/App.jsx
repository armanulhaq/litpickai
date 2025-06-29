import { Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Moods from "./pages/Moods";

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choose" element={<Moods />} />
            </Routes>
        </>
    );
}

export default App;
