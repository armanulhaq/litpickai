import { ArrowRight, Sparkles, Heart, Text, Brain } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-80"></div>
                <div className="absolute top-40 right-20 w-32 h-32 bg-indigo-100 rounded-full opacity-80"></div>
                <div className="absolute bottom-40 left-20 w-24 h-24 bg-purple-100 rounded-full opacity-80"></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 bg-pink-100 rounded-full opacity-90"></div>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
            <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20 my-10 md:my-0">
                <div className="max-w-6xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700 px-2 py-1 md:px-4 md:py-2 rounded-full md:text-sm text-xs font-sm mb-2">
                        <Sparkles className="w-4 h-4" />
                        AI-Powered Book Discovery
                    </div>

                    <h1 className="text-4xl md:text-3xl lg:text-6xl font-black mb-6 leading-tight text-gray-900">
                        Let AI Curate the Right Book For Your
                        <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            Next Chapter
                        </span>
                    </h1>

                    <p className="text-md md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                        Stop searching endlessly. Our AI finds insightful,
                        high-quality books tailored to what you’re truly looking
                        to learn, feel, or explore.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-2 justify-center items-center mb-16">
                        <Link
                            to="/choose"
                            className="group bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-3  lg:px-8 lg:py-4 rounded-full text-md lg:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                            <Brain className="w-6 h-6 text-blue-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                Smart Book Picks
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                            <Heart className="w-6 h-6 text-purple-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                AI-Enhanced Curation
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl border border-purple-100">
                            <Text className="w-6 h-6  text-purple-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                More Than a Summary
                            </span>
                        </div>
                        <div className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-100">
                            <Text className="w-6 h-6 text-blue-600" />
                            <span className="text-gray-700 text-sm md:text-md font-medium">
                                Purpose-Driven Results
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-3 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-black text-blue-600 mb-2">
                                40M+
                            </div>
                            <div className="text-gray-600 text-sm">
                                Books Indexed
                            </div>
                        </div>
                        <div className="text-center p-3 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-black text-indigo-600 mb-2">
                                95%
                            </div>
                            <div className="text-gray-600 text-sm">
                                Match Accuracy
                            </div>
                        </div>
                        <div className="text-center p-3 md:p-6 bg-white rounded-2xl border border-gray-100 shadow-sm">
                            <div className="text-3xl font-black text-purple-600 mb-2">
                                2.5s
                            </div>
                            <div className="text-gray-600 text-sm">
                                Average Response
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
