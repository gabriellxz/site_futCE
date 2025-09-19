import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header className="flex justify-between items-center p-3 fixed w-full bg-white z-20">
            <Link to={"/"} className="text-xl font-bold italic">FutCE</Link>

            <div className="flex gap-4">
                <Link to="/times">Times</Link>
                <Link to="/notícias">Notícias</Link>
                <Link to="/ídolos">Ídolos</Link>
                <Link to="/estádios">Estádios</Link>
            </div>

            {/* <div className="sm:hidden">
                <FaBars />
            </div> */}
        </header>
    )
}