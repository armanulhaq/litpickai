import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();
    const onClickHandler = () => {
        navigate("/");
    };
    return (
        <nav className="border-b border-gray-200 bg-white">
            <div
                className="max-w-7xl mx-auto px-6 py-4 flex items-center gap-3 cursor-pointer"
                onClick={onClickHandler}
            >
                <img src="/logo.png" alt="logo" className="w-10 h-10" />
                <span className="text-2xl font-black text-[#1E293B]">
                    LitPick AI
                </span>
            </div>
        </nav>
    );
};

export default Navigation;
