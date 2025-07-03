import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const Books = ({ response, setResponse, setBook }) => {
    const { genre } = useParams();

    const fetchBooks = async () => {
        try {
            const data = await fetch(
                `/api/svc/books/v3/lists/current/${genre}.json?api-key=${
                    import.meta.env.VITE_NYT_API_KEY
                }`
            );
            const result = await data.json();
            setResponse(result);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };

    useEffect(() => {
        setResponse(null);
        fetchBooks();
    }, [genre]); //re-runs when user navigates to a different genre

    if (
        !response ||
        !response.results ||
        !response.results.books ||
        response.results.books.length === 0
    ) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 ">
            <div className=" border-gray-200">
                <div className="max-w-7xl mx-auto px-4 py-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-3 text-blue-700">
                            This Week’s NYT Bestseller Picks
                        </h1>
                        <p className="text-gray-700 text-lg max-w-2xl mx-auto">
                            Handpicked from the latest New York Times lists.
                            Click any book to see exclusive AI-powered
                            summaries, ratings, and similar reads.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {response.results.books.map((book) => (
                        <BookCard
                            key={book.primary_isbn13}
                            setBook={setBook}
                            book={{
                                volumeInfo: {
                                    title: book.title,
                                    authors: [book.author],
                                    description: book.description,
                                    imageLinks: {
                                        thumbnail: book.book_image,
                                    },
                                    publisher: book.publisher,
                                    image: book.book_image,
                                    url: book.amazon_product_url,
                                    rank: book.rank,
                                    prevRank: book.rank_last_week,
                                },
                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;
