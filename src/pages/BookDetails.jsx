import { useEffect, useState } from "react";
import { generateAIInsight } from "../utils/cohere";

const BookDetails = ({ book }) => {
    const [currentBook, setCurrentBook] = useState(book);
    const [aiData, setAiData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const local = localStorage.getItem("selectedBook");
        if (!book && local) {
            setCurrentBook(JSON.parse(local));
        }
    }, [book]);

    useEffect(() => {
        if (currentBook) {
            generateAIInsight(currentBook).then((aiResult) => {
                setAiData(aiResult);
                setLoading(false);
            });
        }
        console.log(aiData);
    }, [currentBook]);

    if (!currentBook) return <p>No book selected.</p>;
    if (loading)
        return <p className="text-center mt-10">Getting AI insights...</p>;

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-2">{currentBook.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
                By {currentBook.authors?.join(", ")}
            </p>

            {/* AI Output */}
            <h2 className="text-xl font-semibold mt-6 mb-2">📘 Summary</h2>
            <p className="text-gray-700 mb-4">{aiData.summary}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                ❤️ Why You’ll Love It
            </h2>
            <p className="text-gray-700 mb-4">
                {aiData.why_you_will_love_this}
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-2">🏷️ Tags</h2>
            <div className="flex gap-2 flex-wrap">
                {aiData.tags.map((tag) => (
                    <span
                        key={tag}
                        className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-2">🤖 AI Rating</h2>
            <p>{aiData.ai_rating}</p>

            <h2 className="text-xl font-semibold mt-6 mb-2">
                🔁 Similar Books
            </h2>
            <ul className="list-disc list-inside text-gray-700">
                {aiData.recommended_books.map((rec, idx) => (
                    <li key={idx}>
                        <strong>{rec.title}</strong>: {rec.reason}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BookDetails;
