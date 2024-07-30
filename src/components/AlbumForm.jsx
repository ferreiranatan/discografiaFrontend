// src/components/AlbumForm.jsx
import React from 'react';

const AlbumForm = () => {
    return (
        <div className="container my-5">
            <h2>Adicionar Novo Álbum/Faixa</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="albumName" className="form-label">Nome do Álbum</label>
                    <input type="text" className="form-control" id="albumName" />
                </div>
                <div className="mb-3">
                    <label htmlFor="trackName" className="form-label">Nome da Faixa</label>
                    <input type="text" className="form-control" id="trackName" />
                </div>
                <button type="submit" className="btn btn-primary">Salvar</button>
            </form>
        </div>
    );
};

export default AlbumForm;
