import { Link } from "react-router-dom";


// images
import logo from '../assets/logos/taco.png';
const Header = () => {
    return (
        <div className="h-1/6 absolute z-10 w-full">
            <nav className="h-full flex items-center justify-between px-20">
                <div>
                    <Link to="/" className="flex flex-col items-center gap-2"><img src={ logo } alt="Taco logo" />Taco-tástico</Link>
                </div>
                <ul className="flex gap-20">
                    <li className="hover:text-orange-500 font-bold">
                        <Link to="/">Inicio</Link>
                    </li>
                    <li className="hover:text-orange-500 font-bold">
                        <a href="#menu">Menu</a>
                    </li>
                    <li className="hover:text-orange-500 font-bold">
                        <a href="#reservation">Reservaciones</a>
                    </li>
                    <li className="hover:text-orange-500 font-bold">
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export { Header };