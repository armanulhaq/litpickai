import React, { useEffect } from "react";
import BookCard from "../components/BookCard";
import { BookOpen } from "lucide-react";
import { useParams } from "react-router-dom";

const Books = ({ response, setResponse }) => {
    const genre = useParams();
    const fetchBooks = async () => {
        try {
            const data = await fetch(
                `https://www.googleapis.com/books/v1/volumes?q=subject:${genre}&maxResults=20`
            );
            const result = await data.json();
            setResponse(result);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    useEffect(() => {
        fetchBooks();
    });
    // Check if response has items
    if (!response || !response.items || response.items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50">
                <div className="text-center max-w-md mx-auto px-6">
                    {/* Animated Book Icon */}
                    <div className="relative w-32 h-32 mx-auto mb-8">
                        {/* Outer rotating ring */}
                        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-blue-500 border-r-indigo-500 animate-spin"></div>
                        {/* Inner pulsing circle */}
                        <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 animate-pulse flex items-center justify-center">
                            <BookOpen className="h-12 w-12 text-blue-600 animate-bounce" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-500 rounded-full animate-ping"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-indigo-500 rounded-full animate-ping animation-delay-300"></div>
                        <div className="absolute top-1/2 -left-3 w-2 h-2 bg-purple-500 rounded-full animate-ping animation-delay-700"></div>
                    </div>

                    {/* Loading Text */}
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Discovering Books
                        </h2>
                        <div className="flex items-center justify-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay-200"></div>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-400"></div>
                        </div>
                        <p className="text-gray-600 leading-relaxed animate-pulse">
                            Curating the perfect collection for you...
                        </p>
                    </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-400/10 rounded-full animate-float"></div>
                    <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-indigo-400/10 rounded-full animate-float animation-delay-500"></div>
                    <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-purple-400/10 rounded-full animate-float animation-delay-1000"></div>
                </div>
            </div>
        );
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
                    {response.items.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Books;
