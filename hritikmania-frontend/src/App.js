import Navbar from "./components/navbar";
import Home from "./components/home";
import { Route, Routes } from 'react-router-dom'
import FindMovies from "./components/find_movie";
import Contact from "./components/contact"
import About from "./components/about";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/findmovies' element={<FindMovies />}/>
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </div>
  );
}

export default App;
