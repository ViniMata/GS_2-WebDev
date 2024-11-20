import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <header className="flex bg-green-400 justify-around items-center h-20 w-screen ">
                <div className="text-3xl">
                    <NavLink to="/" 
                    className={({ isActive }) => isActive ? " text-3xl text-black font-bold" : "text-black "}>
                    Energify
                    
                    </NavLink>
                </div>
                <nav>
                    <ul className="flex gap-5">
                        <li>
                            <NavLink
                            to="/produtos"
                            className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-500"}
                                aria-label="Página Inicial">
                                Produtos

                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                            to="/contato"
                            className={({ isActive }) => isActive ? "text-white font-bold" : "text-gray-500"}
                                aria-label="Página Inicial">
                                Contate-nos

                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}