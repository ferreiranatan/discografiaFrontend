import React, { useState } from "react";
import api from "../api/api";

const TrackForm = ({ albumId }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post(`/albums/${albumId}/tracks`, { name });
            setName('');
            alert("Faixa adicionada com sucesso!");
        } catch (error) {
            console.error("Erro ao adicionar faixa:", error);
            alert("Erro ao adicionar faixa.");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="my-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome da Música"
                />
                <button type="submit" className="btn btn-primary">Adicionar Faixa</button>
            </div>
        </form>
    );
};

export default TrackForm;
