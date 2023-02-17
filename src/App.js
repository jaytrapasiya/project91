import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Blog from "./component/Blog";
import MyServices from "./component/Services";
import Education from "./component/Education";
import Slider from "./component/Slider";
import Myportfolio from "./component/Portfolio";

function App() {
  return (
    <HashRouter>
      <>
        <nav className="navbar navbar-expand-sm navbar-dark sticky-top navbarone">
          <div className="container-fluid">
            <a clasName="navbar-brand" href="javascript:void(0)"><h3 className="text-white">JAY TRAPASIYA</h3></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav me-auto">
                <li className="nav-item ps-4">
                  <Link className="nav-link active" to="/Blog">Blog</Link>
                </li>
                <li className="nav-item ps-4">
                  <Link className="nav-link active" to="/Services">Services</Link>
                </li>
                <li className="nav-item ps-4">
                  <Link className="nav-link active" to="/Education">Education</Link>
                </li>
                <li className="nav-item ps-4">
                  <Link className="nav-link active" to="/Slider">Slider</Link>
                </li>
                <li className="nav-item ps-4">
                  <Link className="nav-link active" to="/Portfolio">Portfolio</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>


      </>
      <Routes>
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Services" element={<MyServices/>} />
        <Route exact path="/Education" element={<Education/>} />
        <Route exact path="/Slider" element={<Slider/>} />
        <Route exact path="/Portfolio" element={<Myportfolio/>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
