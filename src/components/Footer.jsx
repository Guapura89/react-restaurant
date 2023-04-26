
// Social images
import facebook from "../assets/social/facebook.png";
import instagram from "../assets/social/instagram.png";
import twitter from "../assets/social/twitter.png";

const Footer = () => {
    return (
        <footer className="h-2/6 md:h-1/6 bg-slate-800 w-full flex flex-col justify-center gap-10">
            <div className="border-t p-6 w-4/5 mx-auto flex justify-between items-center">
                <h1>Taco-tastico</h1>
                <a href="#home"><h3>Inicio</h3></a>
                <div className="hidden md:flex h-full items-center gap-4 justify-center">
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={facebook} alt="facebook" /></div>
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={instagram} alt="instagram" /></div>
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={twitter} alt="twitter" /></div>
                </div>
            </div>
            <div className="md:hidden flex items-center gap-4 justify-center">
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={facebook} alt="facebook" /></div>
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={instagram} alt="instagram" /></div>
                    <div className="w-14 h-14 hover:cursor-pointer hover:opacity-75"><img src={twitter} alt="twitter" /></div>
                </div>
        </footer>
    );
}

export { Footer };