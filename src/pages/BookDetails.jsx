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
            className={`relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border-1 border-gray-200 transition-all duration-300 hover:scale-105 ${gradient}`}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-3">
                    <span className="text-sm font-medium uppercase tracking-wider">
                        {label}
                    </span>
                </div>
                <div className="text-3xl font-bold ">{value}</div>
            </div>
        </div>
    );

    const LoadingPulse = () => (
        <div className="animate-pulse space-y-6">
            {[1, 2, 3].map((i) => (
                <div
                    key={i}
                    className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                    <div className="h-4 bg-blue-200/50 rounded-lg w-1/4 mb-3"></div>
                    <div className="space-y-2">
                        <div className="h-3 bg-blue-100/50 rounded w-full"></div>
                        <div className="h-3 bg-blue-100/50 rounded w-3/4"></div>
                        <div className="h-3 bg-blue-100/50 rounded w-1/2"></div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute top-1/2 -left-20 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse [animation-delay:2s]"></div>
                <div className="absolute -bottom-20 right-1/3 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl animate-pulse [animation-delay:4s]"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-12">
                <div className="mb-12">
                    <div className="bg-white/70 backdrop-blur-lg rounded-3xl border-1 border-gray-200 overflow-hidden transition-all duration-500">
                        <div className="flex flex-col xl:flex-row">
                            <div className="xl:w-2/5 p-8 lg:p-12 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm flex flex-col items-center justify-center relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                                    <img
                                        src={book.imageLinks.thumbnail}
                                        alt={book.title}
                                        className="relative w-72 h-96 object-cover rounded-3xl border-1 border-gray-200 transition-all duration-500 group-hover:scale-105 group-hover:rotate-1"
                                    />
                                    <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-2xl font-bold text-xl  transform rotate-3 hover:rotate-6 transition-transform">
                                        #{book.rank}
                                    </div>
                                    {rankChange &&
                                        rankChange.type !== "same" &&
                                        book.prevRank !== 0 && (
                                            <div
                                                className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 ${rankChange.bg} border-2 ${rankChange.border} px-4 py-2 rounded-full flex items-center gap-2 ${rankChange.color} backdrop-blur-sm`}
                                            >
                                                <rankChange.icon size={16} />
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
                            <div className="xl:w-3/5 p-8 lg:p-12">
                                <div className="space-y-8">
                                    <div className="">
                                        <div className="inline-flex items-center gap-1 bg-blue-100/80 backdrop-blur-sm border border-blue-200/50 text-blue-700 px-2 py-1 rounded-full text-xs font-sm">
                                            <Sparkles className="w-3 h-3" />
                                            NYT Bestseller #{book.rank}
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                                            {book.title}
                                        </h1>
                                        <p className="text-md sm:text-2xl text-gray-600 font-medium">
                                            by{" "}
                                            <span className="text-blue-700 font-semibold">
                                                {book.authors[0]}
                                            </span>
                                        </p>
                                    </div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <StatCard
                                            label="Current Rank"
                                            value={`#${book.rank}`}
                                            gradient="bg-gradient-to-r from-blue-100 to-blue-50"
                                        />
                                        <StatCard
                                            icon={Clock}
                                            label="Previous Rank"
                                            value={
                                                book.prevRank !== 0
                                                    ? `#${book.prevRank}`
                                                    : "New"
                                            }
                                            gradient="bg-gradient-to-r from-blue-100 to-blue-50"
                                        />
                                    </div>
                                    <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-1 border-gray-200 ">
                                        <div className="flex items-center gap-3 mb-4">
                                            <BookOpen
                                                className="text-gray-600"
                                                size={24}
                                            />
                                            <h3 className="text-xl font-bold text-gray-900">
                                                About This Book
                                            </h3>
                                        </div>
                                        <p className="text-gray-700 leading-relaxed text-md">
                                            {book.description ||
                                                "Discover what makes this book a New York Times bestseller."}
                                        </p>
                                    </div>

                                    <div className="pt-4">
                                        <a
                                            href={book.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group inline-flex items-center gap-4 bg-blue-400 text-white font-bold px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
                                        >
                                            <span className="text-lg">
                                                Get This Book
                                            </span>
                                            <ArrowRight
                                                size={20}
                                                className="group-hover:translate-x-1 transition-transform duration-300"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mb-12">
                    <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                            Bestseller Performance
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl font-black mb-3">
                                    #{book.rank}
                                </div>
                                <div className="font-semibold uppercase tracking-wider opacity-90">
                                    This Week
                                </div>
                            </div>
                            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl font-black mb-3">
                                    {book.prevRank !== 0
                                        ? `#${book.prevRank}`
                                        : "New"}
                                </div>
                                <div className="font-semibold uppercase tracking-wider opacity-90">
                                    Last Week
                                </div>
                            </div>
                            <div className="text-center p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                                <div className="text-5xl font-black mb-3">
                                    {rankChange && rankChange.type === "up"
                                        ? `+${rankChange.value}`
                                        : rankChange &&
                                          rankChange.type === "down"
                                        ? `-${rankChange.value}`
                                        : "—"}
                                </div>
                                <div className="font-semibold uppercase tracking-wider opacity-90">
                                    Change
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/70 backdrop-blur-lg rounded-3xl shadow-2xl p-8 border border-white/20">
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-bold text-lg shadow-lg mb-4">
                            <Sparkles className="w-5 h-5" />
                            AI Book Intelligence
                        </div>
                    </div>

                    {loading ? (
                        <div className="space-y-8">
                            <div className="text-center">
                                <div className="inline-flex items-center gap-3 text-blue-600 text-xl font-semibold">
                                    <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                                    Analyzing book content...
                                </div>
                            </div>
                            <LoadingPulse />
                        </div>
                    ) : aiData ? (
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div className="lg:col-span-2 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-1 border-gray-200 hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-blue-700 mb-4 flex items-center gap-3">
                                    AI Summary
                                </h4>
                                <p className="text-gray-700 text-md leading-relaxed">
                                    {aiData.summary}
                                </p>
                            </div>

                            <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-1 border-gray-200 hover:shadow-xl transition-all duration-300">
                                <h4 className="text-2xl font-bold text-emerald-700 mb-4 flex items-center gap-3">
                                    <Star size={24} />
                                    Why You'll Love This
                                </h4>
                                <p className="text-gray-700 text-md leading-relaxed">
                                    {aiData.why_you_will_love_this}
                                </p>
                            </div>

                            {aiData.target_audience && (
                                <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-1 border-gray-200 hover:shadow-xl transition-all duration-300">
                                    <h4 className="text-2xl font-bold text-indigo-700 mb-4 flex items-center gap-3">
                                        <Users size={24} />
                                        Perfect For
                                    </h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {aiData.target_audience}
                                    </p>
                                </div>
                            )}

                            {aiData.author_background && (
                                <div className="lg:col-span-2 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border-1 border-gray-200 hover:shadow-xl transition-all duration-300">
                                    <h4 className="text-2xl font-bold text-gray-700 mb-4">
                                        About the Author
                                    </h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        {aiData.author_background}
                                    </p>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="text-center bg-red-50 border border-red-200 rounded-2xl p-8">
                            <div className="text-red-700 font-semibold text-xl">
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
    );
};

export default BookDetails;
