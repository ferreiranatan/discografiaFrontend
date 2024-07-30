import { Link } from "react-router-dom";


export const Header = () => {
    return (
        <div>
            <header className="container bg-dark py-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className="h3 text-white">Discografia</div>
                    <nav>
                        <Link to="/add" className="text-white me-3">Adicionar Album / Faixa</Link>
                        <Link to="/albums" className="text-white me-3">Listar Álbuns</Link>
                    </nav>
                </div>
            </header>
        </div>
    )
}


export default Header;