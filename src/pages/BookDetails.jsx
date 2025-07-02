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
        <div className=" bg-slate-50 py-8">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row">
                    {/* Book Cover */}
                    <div className="md:w-1/3 flex flex-col items-center justify-center p-8 bg-slate-100">
                        <div className="relative">
                            <img
                                src={book.imageLinks.thumbnail}
                                alt={book.title}
                                className="w-44 h-64 object-cover rounded-lg shadow"
                            />
                            <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow">
                                #{book.rank}
                            </span>
                        </div>
                    </div>
                    {/* Book Details */}
                    <div className="md:w-2/3 p-8 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">
                                {book.title}
                            </h1>
                            <p className="text-lg text-gray-600 mb-4">
                                by{" "}
                                <span className="font-medium">
                                    {book.authors[0]}
                                </span>
                            </p>
                            <div className="flex flex-wrap gap-4 mb-6">
                                <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                                    <div className="text-sm text-blue-600 font-medium">
                                        Current Rank
                                    </div>
                                    <div className="text-2xl font-bold text-blue-800">
                                        #{book.rank}
                                    </div>
                                </div>
                                <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3">
                                    <div className="text-sm text-gray-600 font-medium">
                                        Previous Rank
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="text-2xl font-bold text-gray-900">
                                            {book.prevRank !== 0
                                                ? `#${book.prevRank}`
                                                : "New"}
                                        </span>
                                        {rankChange &&
                                            rankChange.type !== "same" &&
                                            book.prevRank !== 0 && (
                                                <span
                                                    className={`flex items-center gap-1 ${rankChange.color}`}
                                                >
                                                    <rankChange.icon
                                                        size={16}
                                                    />
                                                    <span className="text-sm font-medium">
                                                        {rankChange.value}
                                                    </span>
                                                </span>
                                            )}
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                Description
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {book.description ||
                                    "No description available."}
                            </p>
                        </div>
                        <div>
                            <a
                                href={book.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 shadow"
                            >
                                <span>Buy</span>
                                <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* Bestseller Statistics */}
                <div className="mt-8 bg-white rounded-xl shadow p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Bestseller Statistics
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="text-center p-4 rounded-lg bg-blue-50">
                            <div className="text-2xl font-bold text-blue-700">
                                #{book.rank}
                            </div>
                            <div className="text-sm text-blue-600">
                                This Week
                            </div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-purple-50">
                            <div className="text-2xl font-bold text-purple-700">
                                {book.prevRank !== 0
                                    ? `#${book.prevRank}`
                                    : "New"}
                            </div>
                            <div className="text-sm text-purple-600">
                                Previous Week
                            </div>
                        </div>
                        <div className="text-center p-4 rounded-lg bg-green-50">
                            <div className="text-2xl font-bold text-green-700">
                                {rankChange && rankChange.type === "up"
                                    ? `+${rankChange.value}`
                                    : rankChange && rankChange.type === "down"
                                    ? `-${rankChange.value}`
                                    : "—"}
                            </div>
                            <div className="text-sm text-green-600">
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
