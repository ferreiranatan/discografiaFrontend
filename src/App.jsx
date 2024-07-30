import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import AlbumForm from "./components/AlbumForm";
import AlbumList from "./components/AlbumList";
import './App.css';

const App = () => {
  return(
    <Router>
      <div className="App">
        <Header/>
        <SearchBar/>
        <Routes>
          <Route path="/" element={<AlbumList/>}/>
          <Route path="/add" element={<AlbumForm/>}/>
          <Route path="/albums" element={<AlbumList/>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App;
          