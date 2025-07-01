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
    } = volumeInfo;
    const navigate = useNavigate();
    const safeSlug = (title) =>
        encodeURIComponent(title.toLowerCase().replace(/\s+/g, "-"));

    return (
        <div
            className="group relative bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-2xl transition-all duration-700 ease-out overflow-hidden cursor-pointer border-1 border-gray-300 hover:border-white/40"
            onClick={() => {
                setBook({
                    title,
                    authors,
                    publisher,
                });
                navigate(`/book/${safeSlug(title)}`);
                localStorage.setItem("selectedBook", JSON.stringify(book)); //saving the data in local storage so it is not lost on refresh
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            <div className="aspect-[3/4] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100 relative overflow-hidden">
                {imageLinks?.thumbnail ? (
                    <>
                        <img
                            src={imageLinks.thumbnail}
                            alt={title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center">
                        <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                            <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                <svg
                                    className="w-10 h-10 text-indigo-400"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                    />
                                </svg>
                            </div>
                            <p className="text-sm font-semibold text-indigo-300">
                                No Cover Available
                            </p>
                        </div>
                    </div>
                )}

                {publishedDate && (
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-xs font-bold text-gray-600 px-3 py-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                        {publishedDate.split("-")[0]}
                    </div>
                )}
            </div>

            <div className="relative p-7">
                <h3 className="font-bold text-xl mb-2 text-gray-900 leading-tight line-clamp-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:via-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-500">
                    {title}
                </h3>
                {authors && (
                    <div className="flex items-center gap-2 mb-3">
                        <div className="w-1 h-4 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full" />
                        <p className="text-sm font-medium text-indigo-600 truncate">
                            {authors.join(", ")}
                        </p>
                    </div>
                )}

                {description && (
                    <p className="text-sm text-gray-600 mb-5 line-clamp-3 leading-relaxed">
                        {description}
                    </p>
                )}

                <div className="space-y-3 pt-4 border-t border-gradient-to-r from-transparent via-gray-200 to-transparent">
                    {publisher && (
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full" />
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
                            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" />
                            <span className="text-xs text-gray-700 font-semibold">
                                {pageCount} pages
                            </span>
                        </div>
                    )}
                </div>

                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookCard;
