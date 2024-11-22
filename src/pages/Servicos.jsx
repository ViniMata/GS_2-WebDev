import { NavLink } from "react-router-dom";

export default function Servicos() {
    return (
        <>
        <div className="flex items-center justify-center flex-col">
            <div className="flex items-center justify-center flex-col bg-gray-100 rounded shadow-md w-full max-w-lg mt-52">
                <div className="flex items-center justify-center text-3xl font-semibold pt-5">
                    <h1>NOSSOS SERVIÇOS</h1>
                </div>
                <div className="flex flex-row pb-5 mt-6 w-4/5 justify-evenly">
                    <NavLink to="/servicos/energIA">
                        <button className="bg-green-400 text-black px-6 py-4 rounded hover:bg-green-500 text-sm font-medium">
                            EnergIA
                        </button>
                    </NavLink>
                    <NavLink to="/servicos/produtos">
                        <button className="bg-black text-green-400 px-6 py-4 rounded hover:bg-gray-800 text-sm font-medium">
                            Produtos
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
        </>
    );
}
