import React from "react";
import BookCard from "../components/BookCard";

const Books = ({ response }) => {
    // Check if response has items
    if (!response || !response.items || response.items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                        No books found
                    </h2>
                    <p className="text-gray-500">
                        Try selecting a different genre or check your search
                        criteria.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                        Our Recommendations
                    </h1>
                    <p className="text-gray-600">
                        Found {response.totalItems} books for you
                    </p>
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
