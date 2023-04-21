import { Header } from "../components/Header";

const Layout = ({ children }) => {
    return (
        <div className="bg-slate-800 h-screen text-white">
            <Header />
            { children }
        </div>
    );
}

export { Layout };