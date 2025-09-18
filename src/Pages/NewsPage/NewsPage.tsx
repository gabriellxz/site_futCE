import { Link } from "react-router-dom";


export default function NewsPage() {
    return (
        <div className="m-5">
            <div className="flex flex-col gap-5">
                <div className="flex justify-between items-center">
                    <Link to={"/"} className="text-green-900 rounded-md uppercase cursor-pointer p-2 border-1 border-green-900">Voltar</Link>

                    <span className="uppercase text-green-900">Confira algumas notícias</span>
                </div>

                <div className="w-full bg-amber-500 p-[0.5px]"></div>
            </div>
            <div>
                <div className="banner-main-news relative rounded-xl">
                     <div className="flex items-center bg-black opacity-80 absolute z-10 object-cover w-full h-full text-white p-5 italic rounded-xl">
                        <div>
                            <p className="text-2xl font-bold">
                                Campeão SUB-20
                                da Copa do Nordeste
                            </p>
                            <p>
                                Vitória por 2 a 0, garante o placar no agregado (3x2), e a base cearense vence a competição.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="sm:flex gap-3">
                    <div className="banner-secondary-news relative rounded-xl">
                        <div className="flex items-center bg-black opacity-80 absolute z-10 object-cover w-full h-full text-white p-5 italic rounded-xl">
                            <div>
                                <p className="text-2xl font-bold">
                                    Ponto Crucial
                                    fora de casa
                                </p>
                                <p>
                                    Floresta empata no 0 a 0 com
                                    Londrina e se equilibra no grupo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="banner-tertiary-news relative rounded-xl">
                        <div className="flex items-center bg-black opacity-80 absolute z-10 object-cover w-full h-full text-white p-5 italic rounded-xl">
                            <div>
                                <p className="text-2xl font-bold">
                                    Ponto Crucial
                                    fora de casa
                                </p>
                                <p>
                                    Floresta empata no 0 a 0 com
                                    Londrina e se equilibra no grupo
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}