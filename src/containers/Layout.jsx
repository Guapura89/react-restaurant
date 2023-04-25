import { Header } from "../components/Header";
import { Footer } from "../components/Footer"

const Layout = ({ children }) => {
    return (
        <div className="bg-slate-800 h-screen text-white">
            <Header />
            { children }
            <Footer />
        </div>
    );
}

export { Layout };