const BookCard = ({ book }) => {
    const { volumeInfo, saleInfo } = book;
    const {
        title,
        authors,
        description,
        imageLinks,
        publishedDate,
        pageCount,
        categories,
        averageRating,
        ratingsCount,
        publisher,
    } = volumeInfo;
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            {/* Book Cover */}
            <div className="aspect-[3/4] bg-gray-200 relative">
                {imageLinks?.thumbnail ? (
                    <img
                        src={imageLinks.thumbnail}
                        alt={title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                        }}
                    />
                ) : null}
                <div className="absolute inset-0 bg-gray-200 flex items-center justify-center text-gray-400 text-sm">
                    No Cover Available
                </div>
            </div>

            {/* Book Info */}
            <div className="p-4">
                {/* Title */}
                <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-2">
                    {title}
                </h3>

                {/* Authors */}
                {authors && (
                    <p className="text-sm text-gray-600 mb-2">
                        by {authors.join(", ")}
                    </p>
                )}

                {/* Rating */}
                {averageRating && (
                    <div className="flex items-center mb-2">
                        <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                                <svg
                                    key={i}
                                    className={`w-4 h-4 ${
                                        i < Math.floor(averageRating)
                                            ? "fill-current"
                                            : "fill-gray-300"
                                    }`}
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-sm text-gray-500 ml-2">
                            {averageRating.toFixed(1)} ({ratingsCount} ratings)
                        </span>
                    </div>
                )}

                {/* Categories */}
                {categories && (
                    <div className="mb-2">
                        {categories.slice(0, 2).map((category, index) => (
                            <span
                                key={index}
                                className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded mr-1 mb-1"
                            >
                                {category}
                            </span>
                        ))}
                    </div>
                )}

                {/* Description */}
                {description && (
                    <p className="text-sm text-gray-600 mb-3 line-clamp-3">
                        {description}
                    </p>
                )}

                {/* Book Details */}
                <div className="text-xs text-gray-500 space-y-1">
                    {publisher && <p>Publisher: {publisher}</p>}
                    {publishedDate && <p>Published: {publishedDate}</p>}
                    {pageCount && <p>Pages: {pageCount}</p>}
                </div>

                {/* Action Buttons */}
                <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white text-sm py-2 px-3 rounded hover:bg-blue-700 transition-colors">
                        View Details
                    </button>
                    {saleInfo?.saleability === "FOR_SALE" && (
                        <button className="bg-green-600 text-white text-sm py-2 px-3 rounded hover:bg-green-700 transition-colors">
                            Buy
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BookCard;
