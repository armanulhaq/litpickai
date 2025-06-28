import { BookOpen, Menu, X } from "lucide-react";

const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xs border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div>
                            <img
                                src="/logo.png"
                                alt="logo"
                                className="w-10 h-10"
                            />
                        </div>
                        <span className="text-2xl font-black text-gray-900">
                            LitPick AI
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
