import { BookOpen } from "lucide-react";

const Loader = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="flex flex-col items-center justify-center space-y-6">
                {/* Spinner */}
                <div className="relative flex items-center justify-center w-20 h-20">
                    <span className="absolute inline-flex h-full w-full rounded-full border-4 border-gray-200 border-t-blue-500 animate-spin"></span>
                    <BookOpen className="relative z-10 w-10 h-10 text-blue-500" />
                </div>
                {/* Loading Text */}
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Loading...
                    </h2>
                    <p className="text-gray-500 text-base">
                        Please wait while we fetch the latest data for you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Loader;
