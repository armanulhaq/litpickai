import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import Moods from "./pages/Moods";
import Books from "./pages/Books";
import { useState } from "react";
import BookDetails from "./pages/BookDetails";

function App() {
    const [response, setResponse] = useState(null);
    const [book, setBook] = useState(null);

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/choose" element={<Moods />} />
                <Route
                    path="/:genre"
                    element={
                        <Books
                            response={response}
                            setResponse={setResponse}
                            setBook={setBook}
                        />
                    }
                />
                <Route
                    path="/book/:bookname"
                    element={<BookDetails book={book} />}
                />
            </Routes>
        </>
    );
}

export default App;
