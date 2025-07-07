import {
    TrendingUp,
    TrendingDown,
    Minus,
    Star,
    Clock,
    BookOpen,
    Users,
    Sparkles,
    ArrowRight,
} from "lucide-react";
import main from "../api/getBookData";
import { useEffect, useState } from "react";

const BookDetails = () => {
    const book = JSON.parse(localStorage.selectedBook);
    const [aiData, setAiData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchAIData() {
            setLoading(true);
            const aiRes = await main(book);
            setAiData(aiRes);
            setLoading(false);
            console.log(aiRes);
        }
        fetchAIData();
    }, []);

    const getRankChange = () => {
        if (!book.prevRank || book.prevRank === 0) return null;
        const change = book.prevRank - book.rank;
        if (change > 0) {
            return {
                type: "up",
                value: change,
                icon: TrendingUp,
                color: "text-emerald-600",
                bg: "bg-emerald-50",
                border: "border-emerald-200",
            };
        } else if (change < 0) {
            return {
                type: "down",
                value: Math.abs(change),
                icon: TrendingDown,
                color: "text-red-500",
                bg: "bg-red-50",
                border: "border-red-200",
            };
        }
        return {
            type: "same",
            value: 0,
            icon: Minus,
            color: "text-slate-500",
            bg: "bg-slate-50",
            border: "border-slate-200",
        };
    };

    const rankChange = getRankChange();

    const StatCard = ({ label, value, gradient }) => (
        <div
            className={`relative overflow-hidden rounded-xl p-5 backdrop-blur-sm border border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-lg ${gradient}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                        {label}
                    </span>
                </div>
                <div className="text-2xl font-bold text-gray-800">{value}</div>
            </div>
        </div>
    );

    const LoadingPulse = () => (
        <div className="animate-pulse space-y-6">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-white/40"
                >
                    <div className="h-4 bg-blue-200/70 rounded-lg w-1/4 mb-3"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-blue-100/70 rounded w-full"></div>
                        <div className="h-3 bg-blue-100/70 rounded w-3/4"></div>
                        <div className="h-3 bg-blue-100/70 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/15 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-300/10 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-8">
                <div className="mb-8">
                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                        <div className="flex flex-col lg:flex-row">
                            <div className="lg:w-2/5 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center relative">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-xl opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                                    <img
                                        src={book.imageLinks.thumbnail}
                                        alt={book.title}
                                        className="relative w-64 h-80 object-cover rounded-2xl shadow-2xl border-4 border-white transition-all duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-xl font-bold text-lg shadow-lg transform rotate-3 hover:rotate-6 transition-transform">
                                        #{book.rank}
                                    </div>
                                    {rankChange &&
                                        rankChange.type !== "same" &&
                                        book.prevRank !== 0 && (
                                            <div
                                                className={`absolute -bottom-4 left-1/2 transform -translate-x-1/2 ${rankChange.bg} border-2 ${rankChange.border} px-3 py-1 rounded-full flex items-center gap-2 ${rankChange.color} shadow-lg`}
                                            >
                                                <rankChange.icon size={14} />
                                                <span className="text-sm font-bold">
                                                    {rankChange.type === "up"
                                                        ? "+"
                                                        : "-"}
                                                    {rankChange.value}
                                                </span>
                                            </div>
                                        )}
                                </div>
                            </div>

                            <div className="lg:w-3/5 p-8">
                                <div className="space-y-6">
                                    <div>
                                        <div className="inline-flex items-center gap-2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 shadow-lg">
                                            <Sparkles className="w-4 h-4" />
                                            NYT Bestseller #{book.rank}
                                        </div>
                                        <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight mb-2">
                                            {book.title}
                                        </h1>
                                        <p className="text-lg text-gray-600 font-medium">
                                            by{" "}
                                            <span className="text-blue-600 font-semibold">
                                                {book.authors[0]}
                                            </span>
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <StatCard
                                            label="Current Rank"
                                            value={`#${book.rank}`}
                                            gradient="bg-gradient-to-r from-blue-50 to-cyan-50"
                                        />
                                        <StatCard
                                            label="Previous Rank"
                                            value={
                                                book.prevRank !== 0
                                                    ? `#${book.prevRank}`
                                                    : "Not Available"
                                            }
                                            gradient="bg-gradient-to-r from-purple-50 to-pink-50"
                                        />
                                    </div>

                                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                                        <div className="flex items-center gap-3 mb-3">
                                            <BookOpen
                                                className="text-gray-600"
                                                size={20}
                                            />
                                            <h3 className="text-lg font-bold text-gray-900">
                                                About This Book
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed">
                                            {book.description ||
                                                "A man with dark secrets in his past may cause trouble for three women who did not heed the warning about him."}
                                        </p>
                                    </div>

                                    <div className="pt-2">
                                        <a
                                            href={book.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-3 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                        >
                                            <span>Get This Book</span>
                                            <ArrowRight
                                                size={18}
                                                className="group-hover:translate-x-1 transition-transform duration-300"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-4">
                        <div className="flex items-center justify-center gap-3 text-white">
                            <Sparkles className="w-6 h-6" />
                            <h2 className="text-xl font-bold">
                                AI Book Intelligence
                            </h2>
                        </div>
                    </div>

                    <div className="p-6">
                        {loading ? (
                            <div className="space-y-6">
                                <div className="text-center py-8">
                                    <div className="inline-flex items-center gap-3 text-blue-600 text-lg font-semibold">
                                        <div className="w-5 h-5 border-3 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                        Analyzing book content...
                                    </div>
                                </div>
                                <LoadingPulse />
                            </div>
                        ) : aiData ? (
                            <div className="space-y-6">
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500 shadow-sm">
                                    <h4 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                                        <Sparkles size={20} />
                                        AI Summary
                                    </h4>
                                    <div className="text-gray-800 text-base leading-relaxed space-y-3">
                                        {aiData.summary
                                            .split(". ")
                                            .map((sentence, index) => (
                                                <p
                                                    key={index}
                                                    className="text-gray-700"
                                                >
                                                    {sentence}
                                                    {sentence.endsWith(".")
                                                        ? ""
                                                        : "."}
                                                </p>
                                            ))}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border-l-4 border-emerald-500 shadow-sm">
                                        <h4 className="text-xl font-bold text-emerald-700 mb-4 flex items-center gap-2">
                                            <Star size={20} />
                                            Why You'll Love This
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            {aiData.why_you_will_love_this}
                                        </p>
                                    </div>

                                    {aiData.target_audience && (
                                        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500 shadow-sm">
                                            <h4 className="text-xl font-bold text-purple-700 mb-4 flex items-center gap-2">
                                                <Users size={20} />
                                                Perfect For
                                            </h4>
                                            <p className="text-gray-700 leading-relaxed">
                                                {aiData.target_audience}
                                            </p>
                                        </div>
                                    )}
                                </div>

                                {aiData.author_background && (
                                    <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border-l-4 border-gray-500 shadow-sm">
                                        <h4 className="text-xl font-bold text-gray-700 mb-4">
                                            About the Author
                                        </h4>
                                        <p className="text-gray-700 leading-relaxed">
                                            {aiData.author_background}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center bg-red-50 border-l-4 border-red-500 rounded-xl p-6">
                                <div className="text-red-700 font-semibold text-lg">
                                    Unable to load AI insights
                                </div>
                                <p className="text-red-600 mt-2">
                                    Please try refreshing the page
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
