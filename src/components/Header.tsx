import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 fixed w-full bg-white z-10">
            <Link to={"/"} className="text-xl font-bold italic">FutCE</Link>

            <div className="hidden sm:flex gap-4">
                <Link to="/times">Times</Link>
                <Link to="/news">Notícias</Link>
                <Link to="/championships">Campeonatos</Link>
                <Link to="/idols">Ídolos</Link>
            </div>

            <div className="sm:hidden">
                <FaBars />
            </div>
        </header>
    )
}