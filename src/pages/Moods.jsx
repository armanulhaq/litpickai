import React from "react";
import MoodCard from "../components/MoodCard";
import cardsData from "../assets/cardsData";

const Moods = () => {
    return (
        <div className="min-h-screen">
            <div className="text-center pt-26 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
                        What's Your Reading Mood?
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 mb-4 font-medium">
                        Every mood deserves the perfect book companion
                    </p>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Whether you're craving adventure, seeking wisdom, or
                        ready to fall in love, choose your genre and let AI
                        curate the perfect reads for your current vibe.
                    </p>
                </div>
            </div>
            <div className="p-8 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
                {cardsData.map((card) => (
                    <MoodCard
                        key={card.genreName}
                        genreName={card.genreName}
                        imageUrl={card.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

export default Moods;
