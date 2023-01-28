import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Tv from './pages/Tv';
import BookMarks from './pages/BookMarks';
function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvSeries" element={<Tv />}></Route>
        <Route path="/bookMarks" element={<BookMarks />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
