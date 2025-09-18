import "./style.css"
import Header from "../../components/Header";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import teams from "../../utils/teams.json"
import type { Teams } from "@/types/teams";
import { MdOutlineStadium } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import { CiTrophy } from "react-icons/ci";

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
                <div className="m-4 text-center">
                    <h1 className="text-3xl font-bold uppercase text-green-900">Elite Cearense</h1>

                    <p className="text-2xl mb-2 text-zinc-500">
                        Os gigantes do futebol cearense que levam o nome do estado para todo o Brasil
                    </p>

                    <div className="w-full bg-amber-500 p-[0.5px]"></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center items-center">
                    {
                        teams.times_cearenses.slice(0, 2).map((team: Teams) => (
                            <div key={team.id} className={`shadow-lg p-5 rounded-md flex flex-col gap-3 m-2 w-full h-[350px]`}>
                                <div className="flex flex-col items-center gap-3">
                                    <img src={team.escudo} alt={team.nome} className="max-w-[100px] w-full" />
                                    <span className="text-2xl font-bold">{team.nome}</span>
                                    <div className="flex gap-2">
                                        {
                                            team.apelidos.map((nickname, index) => (
                                                <span key={index} className="border border-zinc-400 rounded-full p-1 text-center">
                                                    {nickname}
                                                </span>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div className="flex justify-between w-full text-green-900">
                                    <span className="flex items-center gap-1">
                                        <IoIosStarOutline />
                                        {team.fundacao}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <MdOutlineStadium />
                                        {team.estadio}
                                    </span>
                                </div>

                                <div>
                                    <span className="flex items-center gap-2 text-green-900">
                                        <CiTrophy />
                                        {team.titulos_nacionais.map((title, index) => (
                                            <span key={index}>
                                                {title}
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <Link to={"/times"} className="flex justify-center items-center gap-5 w-full text-green-900 rounded-md uppercase cursor-pointer p-2 border-1 border-green-900">
                    Ver todos os clubes
                    <FaArrowRight />
                </Link>
            </div>


        </div>
    )
}