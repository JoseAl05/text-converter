import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const Sidebar = ({ activeTabId, setActiveTabId,children }:{activeTabId:number,setActiveTabId:Dispatch<SetStateAction<number>>,children: React.ReactNode}) => {
    return (
        <>
            <div className="flex min-h-screen justify-around">
                <div className="fixed top-0 left-0 bg-gray-800 z-40 h-28 w-full md:z-40 md:h-28 md:w-full lg:h-screen lg:w-72">
                    <div className="h-full py-0 overflow-y-auto md:py-0">
                        <ul className="text-center flex justify-center space-y-0 space-x-10 py-10 md:flex md:justify-center md:space-y-0 md:space-x-10 md:py-10 lg:flex lg:flex-col lg:space-x-0 lg:space-y-10 lg:py-40">
                            <li className={activeTabId === 1 ? "text-base text-[#00808c] font-bold md:text-lg lg:text-2xl" : "text-white text-base md:text-lg lg:text-2xl transition-all ease-in-out duration-150 hover:text-[#00808c] hover:font-bold"}>
                                <button
                                    id="tab-1"
                                    role="tab"
                                    onClick={() => setActiveTabId(1)}
                                    tabIndex={activeTabId === 1 ? 0 : -1}
                                    aria-selected={activeTabId === 1 ? true : false}
                                    aria-controls={`panel-${1}`}
                                >
                                    Corrector de ortografía
                                </button>
                            </li>
                            <li className={activeTabId === 2 ? "text-base text-[#00808c] font-bold md:text-lg lg:text-2xl" : "text-white text-base md:text-lg lg:text-2xl transition-all ease-in-out duration-150 hover:text-[#00808c] hover:font-bold"}>
                                <button
                                    id="tab-2"
                                    role="tab"
                                    onClick={() => setActiveTabId(2)}
                                    tabIndex={activeTabId === 2 ? 0 : -1}
                                    aria-selected={activeTabId === 2 ? true : false}
                                    aria-controls={`panel-${2}`}
                                >
                                    Traductor
                                </button>
                            </li>
                            <li>
                                <Link href='/' className="text-white text-base md:text-lg lg:text-2xl hover:text-[#00808c] hover:font-bold">
                                    Volver al Inicio
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                {children}
            </div>
        </>
    );
}

export default Sidebar;