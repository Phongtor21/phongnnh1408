import { Routes, Route } from 'react-router-dom';
import NewsDetail from '../components/details/NewsDetail';
import ProjectDetail from '../components/details/ProjectDetail';
import SlideTest from '../components/details/slide/SlideTest';
import { About } from '../pages/About';
import { Home } from '../pages/Home';
import News from '../pages/News';
import Projects from '../pages/Projects';


const Router = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/about' element={<About />} />
        <Route path='/project-detail' element={<ProjectDetail />} />
        <Route path='/news-detail' element={<NewsDetail />} />
        <Route path='/slide-test' element={<SlideTest />} />
    </Routes>
);

export default Router;
