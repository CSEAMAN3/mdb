import "./Reset.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import BookDetails from "./components/BookDetails/BookDetails";
import Admin from "./components/Admin/Admin";
// import Profile from "./components/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        {/* <Profile /> */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
