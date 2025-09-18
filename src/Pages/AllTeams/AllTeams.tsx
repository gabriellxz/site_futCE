import type { Teams } from "@/types/teams"
import teams from "../../utils/teams.json"
import { Link } from "react-router-dom"

export default function AllTeams() {
    return (
        <div className="m-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <Link to={"/"} className="text-green-900 rounded-md uppercase cursor-pointer p-2 border-1 border-green-900">Voltar</Link>

                    <span className="text-xl uppercase text-green-900">Confira alguns de nossos times</span>
                </div>

                <div className="w-full bg-amber-500 p-[0.5px]"></div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-4 items-center mt-5">
                    {
                        teams.times_cearenses.map((team: Teams) => (
                            <div key={team.id} className="shadow-lg p-5 max-w-[200px] h-[200px] rounded-md flex items-center justify-center">
                                <div>
                                    <img src={team.escudo} alt={team.nome} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}