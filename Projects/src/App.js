import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import { About } from './pages/About';
import { HeaderW } from './components/Layouts/HeaderW';
import { FooterW } from './components/Layouts/FooterW';

function App() {
  return (
    <BrowserRouter>
      <HeaderW />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <FooterW />
    </BrowserRouter>


  );
}

export default App;
