import { BrowserRouter, Route, Routes, Link } from 'react-router';

import './App.css';
import Grafics from './graphics';
import Projects from './projects';

function App() {
  return (
    <section>
        <BrowserRouter>
          <header>
            <img id="logo" src="/img/logo.jpg" alt="Logo"/>
            <nav>
              <Link to="/graphics" className="btn btn-secondary">
                <section className="NavButton">
                  <b>Grafiki</b>
                </section>
              </Link>
              <section className="spacer"></section>
              <Link to="/projects" className="btn btn-secondary">
                <section className="NavButton">
                  <b>Projekty 3D</b>
                </section>
              </Link>
            </nav>
          </header>
          <Routes>
            <Route path="/graphics" element={<Grafics/>}/>
            <Route path="/projects" element={<Projects/>}/>
          </Routes>
        </BrowserRouter>  
    </section>
  );
}

export default App;
