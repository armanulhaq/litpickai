import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";

const Books = ({ response, setResponse, setBook }) => {
    const { genre } = useParams();
    const fetchBooks = async () => {
        try {
            const data = await fetch(
                `/api/svc/books/v3/lists/current/${genre}.json`
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
    }, [genre]);
    // Check if response has items
    if (
        !response ||
        !response.results ||
        !response.results.books ||
        response.results.books.length === 0
    ) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen ">
            <div className="mt-25 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
                {/* Header Section */}
                <div className="bg-white/80 backdrop-blur-sm border-b border-gray-100">
                    <div className="max-w-7xl mx-auto px-4 py-8">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">
                                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                                    Our Recommendations
                                </span>
                            </h1>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                Discover carefully curated books selected just
                                for you
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Books Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
