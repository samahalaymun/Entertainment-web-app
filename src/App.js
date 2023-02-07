import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import BookMarks from "./pages/BookMarks";
import { BookMarkedContext } from "./context/BookMarkedContext";
import ShowDetails from "./pages/ShowDetails";
import ShowVideoDetails from "./components/ShowVideoDetails";
import ShowTVDetails from "./components/ShowTVDetails";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
function App() {
  return (
    <Router basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFoundPage />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/tvSeries" element={<Tv />}></Route>
        <Route path="/bookMarks" element={<BookMarks />}></Route>
        <Route path="/movies/:id" element={<ShowVideoDetails />}></Route>
        <Route path="/series/:id" element={<ShowTVDetails />}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
