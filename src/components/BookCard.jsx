import { BookOpen } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BookCard = ({ book, setBook }) => {
    const { volumeInfo } = book;
    const {
        title,
        authors,
        description,
        imageLinks,
        publishedDate,
        pageCount,
        publisher,
        url,
        rank,
        prevRank,
    } = volumeInfo;

    const navigate = useNavigate();

    const safeSlug = (title) =>
        encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));

    return (
        <div
            className="group relative bg-white rounded-xl hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-gray-200 hover:border-blue-200"
            onClick={() => {
                setBook({
                    title,
                    authors,
                    description,
                    imageLinks,
                    publishedDate,
                    pageCount,
                    publisher,
                    url,
                    rank,
                    prevRank,
                });
                navigate(`/book/${safeSlug(title)}`);
                localStorage.setItem(
                    "selectedBook",
                    JSON.stringify({
                        title,
                        authors,
                        description,
                        imageLinks,
                        publishedDate,
                        pageCount,
                        publisher,
                        url,
                        rank,
                        prevRank,
                    })
                );
            }}
        >
            <div className="aspect-[3/4] bg-gray-50 relative overflow-hidden flex items-center justify-center">
                {imageLinks?.thumbnail ? (
                    <img
                        src={imageLinks.thumbnail}
                        alt={title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full">
                        <div className="w-20 h-20 mx-auto mb-3 bg-blue-100 rounded-2xl flex items-center justify-center shadow">
                            <BookOpen />
                        </div>
                        <p className="text-sm font-semibold text-blue-300">
                            No Cover Available
                        </p>
                    </div>
                )}

                {publishedDate && (
                    <div className="absolute top-4 right-4 bg-white text-xs font-bold text-blue-600 px-3 py-1.5 rounded-full shadow opacity-0 group-hover:opacity-100 transition-all duration-300">
                        {publishedDate.split("-")[0]}
                    </div>
                )}
            </div>

            <div className="relative p-6">
                <h3 className="font-bold text-xl mb-2 text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-700 transition-colors duration-300 truncate">
                    {title}
                </h3>
                {authors && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-blue-400 rounded-full" />
                        <p className="text-sm font-medium text-blue-600 truncate">
                            {authors.join(", ")}
                        </p>
                    </div>
                )}

                {description && (
                    <p className="text-sm text-gray-600 mb-5 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="space-y-3 pt-4 border-t border-gray-200">
                    {publisher && (
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-300 rounded-full" />
                            <span className="text-xs text-gray-500 font-medium">
                                Publisher:
                            </span>
                            <span className="text-xs text-gray-700 font-semibold truncate max-w-[140px]">
                                {publisher}
                            </span>
                        </div>
                    )}

                    {pageCount > 0 && (
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-200 rounded-full" />
                            <span className="text-xs text-gray-700 font-semibold">
                                {pageCount} pages
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
