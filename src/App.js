import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
// import Home from './components/Home'
import About from './components/About';
import Body from "./components/Body";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            {/* <Route path='/' element={<Home />} /> */}
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <Body />
      </BrowserRouter>
    </>
  );
}

export default App;
