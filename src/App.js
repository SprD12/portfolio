import './App.scss';
import { Routes, Route, useLocation} from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home';
import About from './containers/about';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/navBar';
import particles from "./utils.js/paritcles"

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async(main) =>{
    await loadFull(main)
  }

  const renderParticleJSInHomePage = location.pathname==='/';
  return (
    <div className="App">
      {/* Particles.js can be added here */}
      { renderParticleJSInHomePage &&
      <Particles id="particles" options={particles} init={handleInit}/>
      }
      {/* Navbar can be added here */}
      <Navbar/>
      {/* Main page content */}
      <div className='App__main-page_content'>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="*" element={<div>Page Not Found</div>} /> {/* Fallback route */}
      </Routes>
      </div>
    </div>
  );
}

export default App;
