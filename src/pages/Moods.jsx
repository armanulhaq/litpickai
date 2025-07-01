import React, { useEffect, useState } from "react";
import MoodCard from "../components/MoodCard";

const Moods = () => {
    const [genres, setGenres] = useState([]);
    useEffect(() => {
        const fetchGenres = async () => {
            const res = await fetch(`/api/svc/books/v3/lists/overview.json`);
            const data = await res.json();
            const uniqueLists = data.results.lists.map((list) => ({
                genreName: list.display_name,
                apiQuery: list.list_name_encoded,
            }));
            setGenres(uniqueLists);
        };

        fetchGenres();
    }, []);

    return (
        <div className="min-h-screen">
            <div className="text-center pt-26 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent mb-6">
                        What's Your Reading Mood?
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 mb-4 font-medium">
                        Every mood deserves the perfect book companion
                    </p>
                </div>
            </div>
            <div className="p-8 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
                {genres.map((genre, idx) => (
                    <MoodCard
                        key={idx}
                        genreName={genre.genreName}
                        apiQuery={genre.apiQuery}
                    />
                ))}
            </div>
        </div>
    );
};

export default Moods;
