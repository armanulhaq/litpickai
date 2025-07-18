import { ArrowRight, Sparkles, Heart, Text, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-70 animate-bounce [animation-duration:2.2s]"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-60 animate-bounce [animation-delay:0.7s] [animation-duration:2.8s]"></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 bg-blue-50 rounded-full opacity-60 animate-bounce [animation-delay:1.2s] [animation-duration:2.5s]"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-80 animate-bounce [animation-delay:1.7s] [animation-duration:2.9s]"></div>
            </div>

            <div className="relative z-10 flex items-center justify-center px-6 pt-15 my-10 md:my-20">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-2 py-1 md:px-4 md:py-2 rounded-full md:text-sm text-xs font-medium mb-2">
                        <Sparkles className="w-4 h-4" />
                        Weekly Bestsellers + AI Insights
                    </div>

                    <h1 className="text-4xl md:text-3xl lg:text-6xl font-black mb-6 leading-tight text-gray-900">
                        Your Weekly Dose of NYT Bestsellers
                        <span className="block text-blue-700">
                            Enhanced by AI
                        </span>
                    </h1>

                    <p className="text-md md:text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Discover the most talked-about books across every genre,
                        updated weekly from the New York Times Best Seller
                        lists. Click any book for instant AI-powered summaries,
                        ratings, and recommendations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-16">
                        <Link
                            to="/choose"
                            className="group bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white px-5 py-3 lg:px-8 lg:py-4 rounded-full text-md lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        >
                            Explore This Week’s Bestsellers
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-100">
                            <Brain className="w-6 h-6 text-blue-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                Weekly NYT Bestseller Updates
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-blue-100">
                            <Heart className="w-6 h-6 text-blue-500" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                AI-Powered Book Insights
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-gray-50 rounded-2xl border border-blue-100">
                            <Text className="w-6 h-6 text-blue-400" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                Personalized Recommendations
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-100 to-blue-50 rounded-2xl border border-blue-100">
                            <Text className="w-6 h-6 text-blue-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                One-Click Exploration
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
