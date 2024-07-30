import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import api from "../api/api";
import TrackForm from "./TrackForm";
import TrackList from "./TrackList";

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchTerm = queryParams.get('q');

    useEffect(() => {
        const fetchAlbums = async () => {
            try {
                const response = await api.get("/albums");
                setAlbums(response.data);
            } catch (error) {
                console.error("Erro ao buscar álbuns:", error);
            }
        };
        fetchAlbums();
    }, []);

    const filteredAlbums = albums.filter(album => 
        album.title.toLowerCase().includes(searchTerm?.toLowerCase() || '')
    );

    return (
        <div className="container my-5">
            <h2>Álbuns</h2>
            <ul className="list-group">
                {filteredAlbums.map((album) => (
                    <li key={album.id} className="list-group-item">
                        <h3>{album.title}</h3>
                        <TrackList tracks={album.tracks} />
                        <TrackForm albumId={album.id} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AlbumList;
