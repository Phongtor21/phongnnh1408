import { lazy, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import LoadingScreen from '../components/LoandingScreen';

const Loadable = Component => props => {
    return (
        <Suspense
            fallback={<LoadingScreen/>}
        >
            <Component {...props} />
        </Suspense>
    );
};

const Router = () => {
    return useRoutes([
        
        {path: '/news', element: <News /> },
        {path: '/projects', element: <Projects /> },
        {path: '/about', element: <About /> },
        {path: '/', element: <Home /> },
        {path: '/projects/:slug', element: <ProjectDetail/> },
        {path: '/news/:slug', element: <NewsDetail/> },
    ])
    // <Suspense fallback={<div>Loading...</div>}>
    //     <Routes>
    //         <Route path='/' element={<Home />} />
    //         <Route path='/news' element={<News />} />
    //         <Route path='/projects' element={<Projects />} />
    //         <Route path='/about' element={<About />} />
    //         <Route path='/projects/:slug' element={<ProjectDetail />} />
    //         <Route path='/news-detail' element={<NewsDetail />} />
    //     </Routes>
    // </Suspense>

};

export default Router;

const Home = Loadable(lazy(() => import('../pages/Home')));
const News = Loadable(lazy(() => import('../pages/News')));
const Projects = Loadable(lazy(() => import('../pages/Projects')));
const About = Loadable(lazy(() => import('../pages/About')));
const ProjectDetail = Loadable(lazy(() => import('../components/details/ProjectDetail')))
const NewsDetail = Loadable(lazy(() => import('../components/details/NewsDetail')))
