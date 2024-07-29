import React from "react";

const TrackList = ({ albums }) => (
    <>
        <h2>Album</h2>
        <ul>
            {album.track.map(track => (
                <li key={track.id}>
                    {track.name}
                </li>
            ))}
        </ul>
    </>
)

export default TrackList;