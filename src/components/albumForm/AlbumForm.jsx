import React, { useState } from "react";
import api from "../../api/api";

const AlbumForm = () => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await api.post('/albums', { name });
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Nome do Album"
            />
            <button type="submit">Adicionar Álbum</button>
        </form>
    );
};

export default AlbumForm;