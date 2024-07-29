import React, { useState } from "react";
import api from "../api/api";

const TrackForm = ({ albumId }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post(`/albums/${albumId}/tracks`, { name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome da Música"
            />
            <button type="submit">Adicionar Faixa</button>
        </form>
    )

}
export default TrackForm;