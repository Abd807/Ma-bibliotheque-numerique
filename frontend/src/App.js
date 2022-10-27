import './App.css';
import {
  BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import Navbar from '../src/components/Navbar';
import NavbarCat from './components/NavbarCat';
import Footer from "../src/components/Footer";
import Home from "../src/pages/Home";
import Library from "../src/pages/Library";
import Add from "../src/pages/Add";
import Update from "../src/pages/Update";
import Signin from "../src/pages/Signin";
import Signup from "../src/pages/Signup";
import Search from "../src/pages/Search";
import Favorite from "../src/pages/Favorite";
import Contact from "../src/pages/Contact";
import Page404 from "../src/pages/Page404";
import ButtonTop from './components/ButtonTop';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <NavbarCat />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Library />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
      <ButtonTop />
      <Footer />
    </div>
  );
}

export default App;
