import { useNavigate } from "react-router-dom";

const MoodCard = ({ genreName, imageUrl, apiQuery }) => {
    const navigate = useNavigate();
    const onClickHandler = async () => {
        try {
            navigate(`/${apiQuery}`);
        } catch (error) {
            console.error("Error fetching books:", error);
        }
    };
    return (
        <div
            className="relative h-40 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={onClickHandler}
        >
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-xl font-semibold z-10 drop-shadow-md">
                {genreName}
            </div>
        </div>
    );
};

export default MoodCard;
