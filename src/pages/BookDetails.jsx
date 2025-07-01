import React from "react";
import {
    ArrowLeft,
    ExternalLink,
    TrendingUp,
    TrendingDown,
    Minus,
} from "lucide-react";

const BookDetails = () => {
    const book = JSON.parse(localStorage.selectedBook);

    const getRankChange = () => {
        if (!book.prevRank || book.prevRank === 0) return null;
        const change = book.prevRank - book.rank;
        if (change > 0) {
            return {
                type: "up",
                value: change,
                icon: TrendingUp,
                color: "text-green-600",
            };
        } else if (change < 0) {
            return {
                type: "down",
                value: Math.abs(change),
                icon: TrendingDown,
                color: "text-red-600",
            };
        }
        return { type: "same", value: 0, icon: Minus, color: "text-gray-600" };
    };

    const rankChange = getRankChange();

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
            {/* Header */}
            <div className="bg-white shadow-sm border-b">
                <div className="max-w-6xl mx-auto px-4 py-4">
                    <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors">
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Books</span>
                    </button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="md:flex">
                        {/* Book Cover Section */}
                        <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 flex items-center justify-center">
                            <div className="text-center">
                                <div className="relative inline-block">
                                    <img
                                        src={book.imageLinks.thumbnail}
                                        alt={book.title}
                                        className="w-48 h-64 object-cover rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute -top-3 -right-3 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                                        #{book.rank}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Book Details Section */}
                        <div className="md:w-2/3 p-8">
                            <div className="space-y-4">
                                {/* Title and Author */}
                                <div>
                                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900  leading-tight">
                                        {book.title}
                                    </h1>
                                    <p className="text-md text-gray-600 font-medium">
                                        by {book.authors[0]}
                                    </p>
                                </div>

                                {/* Ranking Info */}
                                <div className="flex flex-wrap gap-4">
                                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-3">
                                        <div className="text-sm text-indigo-600 font-medium">
                                            Current Rank
                                        </div>
                                        <div className="text-2xl font-bold text-indigo-900">
                                            #{book.rank}
                                        </div>
                                    </div>

                                    {rankChange && (
                                        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                                            <div className="text-sm text-gray-600 font-medium">
                                                Previous Rank
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-gray-900">
                                                    {book.prevRank !== 0
                                                        ? `#${book.prevRank}`
                                                        : "N/A"}
                                                </span>
                                                {rankChange.type !== "same" &&
                                                    book.prevRank !== 0 && (
                                                        <div
                                                            className={`flex items-center gap-1 ${rankChange.color}`}
                                                        >
                                                            <rankChange.icon
                                                                size={16}
                                                            />
                                                            <span className="text-sm font-medium">
                                                                {
                                                                    rankChange.value
                                                                }
                                                            </span>
                                                        </div>
                                                    )}
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Description */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                        Description
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed text-justify">
                                        {book.description}
                                    </p>
                                </div>

                                {/* Action Button */}
                                <div className="pt-4">
                                    <a
                                        href={book.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                                    >
                                        <span>Buy</span>
                                        <ExternalLink size={18} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Stats Card */}
                <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Bestseller Statistics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg">
                            <div className="text-2xl font-bold text-blue-900">
                                #{book.rank}
                            </div>
                            <div className="text-sm text-blue-700">
                                This Week
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg">
                            <div className="text-2xl font-bold text-purple-900">
                                {book.prevRank !== 0
                                    ? `#${book.prevRank}`
                                    : "New"}
                            </div>
                            <div className="text-sm text-purple-700">
                                Previous Week
                            </div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-lg">
                            <div className="text-2xl font-bold text-green-900">
                                {rankChange && rankChange.type === "up"
                                    ? `+${rankChange.value}`
                                    : rankChange && rankChange.type === "down"
                                    ? `-${rankChange.value}`
                                    : "—"}
                            </div>
                            <div className="text-sm text-green-700">
                                Rank Change
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
