import { Link } from "react-router-dom"
import stadiums from "../../utils/stadium.json"
import { IoLocationOutline } from "react-icons/io5"
import { FaPeopleGroup } from "react-icons/fa6"

export default function StadiumsPage() {
    return (
        <div className="m-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <Link to={"/"} className="text-green-900 rounded-md uppercase cursor-pointer p-2 border-1 border-green-900">Voltar</Link>

                    <span className="uppercase text-green-900">Confira alguns de nossos ídolos</span>
                </div>

                <div className="w-full bg-amber-500 p-[0.5px]"></div>
            </div>

            <div className="flex justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-5">
                    {
                        stadiums.estadios.map((stadium) => (
                            <div key={stadium.id} className="shadow-lg p-5 w-full h-[400px] rounded-md flex flex-col justify-center overflow-hidden">
                                <img
                                    src={stadium.img}
                                    alt=""
                                    className="object-cover w-full h-[300px] rounded-md"
                                    style={{ objectFit: "cover", width: "100%", height: "300px" }}
                                />

                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <span className="text-2xl font-bold">{stadium.nome}</span>
                                        <span className="flex items-center gap-3">
                                            <IoLocationOutline />
                                            {stadium.cidade}
                                        </span>
                                    </div>
                                    <div className="flex items-center gap-3 mt-2">
                                        <FaPeopleGroup />
                                        {stadium.capacidade}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}