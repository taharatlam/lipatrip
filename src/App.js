import 'bootstrap/dist/css/bootstrap.css'
import './scss/theme.scss'
import './scss/spacings.scss'
// pages
import Home from './pages/home';
import SearchResultPage from './pages/search-site';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// layout
import NavBar from './components/navbar';
import Footer from './components/footer';
import './scss/responsive.scss' 
import HolidayInner from './pages/HolidayInner';

function App() {
  return (
    <>
      <Router>
        <NavBar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/searchResultPage" element={<SearchResultPage />} />
            <Route path="/holidayInner" element={<HolidayInner />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
