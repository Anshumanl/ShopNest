import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Disclaimer from "./Pages/Disclaimer";
import ReturnPolicy from "./Pages/ReturnPolicy";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <br />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="aboutus" element={<About />} />
          <Route path="/return" element={<ReturnPolicy />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
