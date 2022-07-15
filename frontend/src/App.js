import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArticlePage from './pages/ArticlePage';
import ArticlesListPage from './pages/ArticlesListPage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='max-w-2xl m-auto pt-16'>
          <Routes>
            <Route path='/' element={<HomePage />} exact />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/article' element={<ArticlePage />} />
            <Route path='/articlelist' element={<ArticlesListPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
