import { Routes, Link, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Moods from "./pages/Moods";
import Books from "./pages/Books";
import { useState } from "react";

function App() {
    const [response, setResponse] = useState({});

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choose" element={<Moods />} />
                <Route
                    path="/:genre"
                    element={
                        <Books response={response} setResponse={setResponse} />
                    }
                />
            </Routes>
        </>
    );
}

export default App;
