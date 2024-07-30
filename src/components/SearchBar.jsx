import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchBar = () => {
    const [category, setCategory] = useState("Todos");
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearch = () => {
        let route = "/";
        if (category === "1") {
            route = "/albums";
        } // Caso adicione uma rota para faixas, você pode adicionar mais condições aqui

        // Navegar para a rota com o termo de busca como query param
        navigate(`${route}?q=${searchTerm}`);
    };

    return (
        <div className="bg-warning py-5">
            <div className="container text-center">
                <h1 className="display-4 text-white mb-4">Discografia</h1>
                <div className="input-group">
                    <select className="form-select" aria-label="Categoria" onChange={handleCategoryChange}>
                        <option value="Todos">Todos</option>
                        <option value="1">Álbuns</option>
                        <option value="2">Faixas</option>
                    </select>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Buscar por..."
                        onChange={handleSearchChange}
                    />
                    <button className="btn btn-dark" type="button" onClick={handleSearch}>Buscar</button>
                </div>
            </div>
        </div>
    );
}

export default SearchBar;
