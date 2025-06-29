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
                <Route
                    path="/choose"
                    element={<Moods setResponse={setResponse} />}
                />
                <Route path="/:genre" element={<Books response={response} />} />
            </Routes>
        </>
    );
}

export default App;
