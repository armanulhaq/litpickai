import React, { useEffect, useState } from "react";
import MoodCard from "../components/MoodCard";
import Loader from "../components/Loader";

const Moods = () => {
    const [genresAvailable, setGenresAvailable] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            const res = await fetch(`/api/svc/books/v3/lists/overview.json`);
            const data = await res.json();
            const uniqueLists = data.results.lists.map((list) => ({
                genreName: list.display_name,
                apiQuery: list.list_name_encoded,
            }));
            setGenresAvailable(uniqueLists);
        };

        fetchGenres();
    }, []);

    return genresAvailable.length === 0 ? (
        <Loader />
    ) : (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50">
            <div className="text-center pt-24 px-8">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-blue-600 mb-6">
                        Pick Your Genre or Mood
                    </h1>
                    <p className="text-lg md:text-2xl text-gray-600 mb-4 font-medium">
                        Browse the latest NYT bestsellers by category—fiction,
                        nonfiction, children’s, and more. There’s something new
                        every week.
                    </p>
                </div>
            </div>
            <div className="p-8 lg:px-40 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 my-10">
                {genresAvailable.map((genre, idx) => (
                    <MoodCard
                        key={idx}
                        genreName={genre.genreName}
                        apiQuery={genre.apiQuery}
                        idx={idx}
                    />
                ))}
            </div>
        </div>
    );
};

export default Moods;
