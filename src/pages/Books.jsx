import React from "react";
import BookCard from "../components/BookCard";

const Books = ({ response }) => {
    // Check if response has items
    if (!response || !response.items || response.items.length === 0) {
        return (
            <div className="min-h-screen  flex items-center justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="text-center max-w-md mx-auto px-6">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center">
                        <svg
                            className="w-12 h-12 text-blue-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-3">
                        No books found
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Try selecting a different genre or check your search
                        criteria to discover amazing books.
                    </p>
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
                            <div className="mt-6 flex items-center justify-center gap-2">
                                <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
                                <div className="h-1 w-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
                                <div className="h-1 w-3 bg-purple-500 rounded-full"></div>
                            </div>
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
