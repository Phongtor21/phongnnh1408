import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './pages/Home';
import News from './pages/News';
import Projects from './pages/Projects';
import { About } from './pages/About';
import { HeaderW } from './components/Layouts/HeaderW';
import { FooterW } from './components/Layouts/FooterW';
import ProjectDetail from './components/details/ProjectDetail';
import NewsDetail from './components/details/NewsDetail';
import { ThemeProvider, createTheme } from '@mui/material';

function App() {
  return (
    <ThemeProvider theme={createTheme({
      typography: {
        fontFamily: 'Avo',
      }
    })}>
      <BrowserRouter>
        <HeaderW />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/news' element={<News />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/about' element={<About />} />
          <Route path='/project-detail' element={<ProjectDetail />} />
          <Route path='/news-detail' element={<NewsDetail />} />
        </Routes>
        <FooterW />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
