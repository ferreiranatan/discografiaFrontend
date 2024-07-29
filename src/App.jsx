import React from "react";
import AlbumList from "./components/albumList/AlbumList";
import AlbumForm from "./components/albumForm/AlbumForm";



export const App = () => {
  return (
    <div className="App">
        <h1>Discografia de Tião Carreiro e Pardinho</h1>
        <AlbumForm />
        <AlbumList />
    </div>
  )
}

export default App;