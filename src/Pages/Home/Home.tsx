import "./style.css"
import Header from "../../components/Header";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
            <Header />

            <div className="main-home text-white">
                <div className="bg-black opacity-80 h-[100vh] w-full flex items-center">
                    <div className="ml-3 md:ml-[100px]">
                        <span className="text-4xl sm:text-7xl font-bold">Futebol Cearense</span>
                        <p className="sm:text-2xl">
                            A paixão do povo cearense em campo.
                        </p>
                    </div>
                </div>
            </div>

            <div className="p-5">
                <div className="m-4">
                    <h1 className="text-center text-3xl font-bold uppercase text-green-900">Elite Cearense</h1>
                    <div className="w-full bg-amber-500 p-[0.5px]"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    <div
                        className="shadow-lg p-4 m-4 rounded-lg flex flex-col justify-between items-center bg-white text-center max-w-[400px] h-[250px] w-full"
                    >
                        <span className="text-xl font-bold">Ceará Sporting Club</span>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Cear%C3%A1_Sporting_Club_logo.svg/120px-Cear%C3%A1_Sporting_Club_logo.svg.png" alt="Ceará Sporting Club" />
                        </div>
                        <button className="flex justify-center items-center gap-5 bg-green-900 w-full text-white rounded-md uppercase cursor-pointer">
                            Sobre
                            <FaArrowRight />
                        </button>
                    </div>
                    <div
                        className="shadow-lg p-4 m-4 rounded-lg flex flex-col justify-between items-center bg-white text-center max-w-[400px] h-[250px] w-full"
                    >
                        <span className="text-xl font-bold">Fortaleza Esporte Clube</span>
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Fortaleza_EC_2018.png/120px-Fortaleza_EC_2018.png" alt="Fortaleza Esporte Clube" />
                        </div>
                        <button className="flex justify-center items-center gap-5 bg-green-900 w-full text-white rounded-md uppercase cursor-pointer">
                            Sobre
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Link to={"/times"} className="flex justify-center items-center gap-5 w-full text-green-900 rounded-md uppercase cursor-pointer p-2 border-1 border-green-900">
                    Ver todos os clubes
                    <FaArrowRight />
                </Link>
            </div>


        </div>
    )
}