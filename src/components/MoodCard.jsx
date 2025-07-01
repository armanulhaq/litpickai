import { useNavigate } from "react-router-dom";

const softGradients = [
    "from-indigo-100 via-purple-100 to-pink-100",
    "from-pink-100 via-red-100 to-yellow-100",
    "from-yellow-100 via-orange-100 to-pink-100",
    "from-blue-100 via-sky-100 to-indigo-100",
    "from-emerald-100 via-green-100 to-lime-100",
    "from-purple-100 via-fuchsia-100 to-rose-100",
    "from-cyan-100 via-sky-100 to-blue-100",
    "from-zinc-100 via-neutral-100 to-gray-100",
];

const MoodCard = ({ genreName, apiQuery }) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate(`/${apiQuery}`);
    };

    const randomGradient =
        softGradients[Math.floor(Math.random() * softGradients.length)];

    return (
        <div
            className={`relative h-40 rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 bg-gradient-to-br ${randomGradient}`}
            onClick={onClickHandler}
        >
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm z-0" />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-800 text-xl font-semibold z-10 drop-shadow-md">
                {genreName}
            </div>
        </div>
    );
};

export default MoodCard;
