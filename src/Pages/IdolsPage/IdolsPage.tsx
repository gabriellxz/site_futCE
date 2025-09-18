import { Link } from "react-router-dom";
import idols from "../../utils/idols.json"
import { CiCalendar } from "react-icons/ci";

export default function IdolsPage() {
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
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center mt-5">
                    {
                        idols.idolos.map((idol) => (
                            <div key={idol.id} className="shadow-lg p-5 w-full h-[400px] rounded-md flex flex-col justify-center overflow-hidden">
                                <img
                                    src={idol.img}
                                    alt=""
                                    className="object-cover w-full h-[300px] rounded-md"
                                    style={{ objectFit: "cover", width: "100%", height: "300px" }}
                                />
                                <div className="p-3">
                                    <div className="flex justify-between items-center">
                                        <p className="text-xl font-bold">{idol.nome}</p>
                                        <p>{idol.posicao}</p>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CiCalendar />
                                        <p>{idol.nascimento}</p>
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