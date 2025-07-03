import { useNavigate } from "react-router-dom";

const pastelBgColors = [
    "bg-pink-100",
    "bg-blue-100",
    "bg-yellow-100",
    "bg-green-100",
    "bg-purple-100",
    "bg-gray-100",
    "bg-indigo-100",
    "bg-emerald-100",
];

const MoodCard = ({ genreName, apiQuery, idx }) => {
    const navigate = useNavigate();

    const bgColor = pastelBgColors[idx % pastelBgColors.length];

    const onClickHandler = () => {
        navigate(`/${apiQuery}`);
    };

    return (
        <div
            className={`relative h-40 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 ${bgColor} flex items-center justify-center`}
            onClick={onClickHandler}
        >
            <span className="text-gray-800 text-md">{genreName}</span>
        </div>
    );
};

export default MoodCard;
