import React, { useEffect, useState } from "react";
import api from "../../api/api";

const AlbumList = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        const fetchAlbums = async () => {
            setAlbums(response.data);
        };
        fetchAlbums();
    }, []);

    return (
        <>
            <h2>Álbuns</h2>
            <ul>
                {albums.map((album => (
                    <li key={album.id}>
                        {album.title}
                        <ul>
                            {album.songs.map(song => (
                                <li key={song.id}>{song.name}</li>
                            ))}
                        </ul>
                    </li>
                )))}
            </ul>
        </>
    )

}

export default AlbumList;