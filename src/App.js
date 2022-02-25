import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Main from './components/Main';
import MovieDetails from './components/MovieDetails';
import SearchMovie from './components/SearchMovie';
import DataProvider from './context/DataProvider';

function App() {
  return (

    <DataProvider>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route exact path='/' element={<Main />} />
          <Route exact path='/:id' element={<MovieDetails />} />
        </Routes>

      </BrowserRouter>
    </DataProvider>

  );
}

export default App;
