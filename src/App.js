import 'bootstrap/dist/css/bootstrap.css'
import './scss/theme.scss'
import './scss/spacings.scss'
import Home from './pages/home';
import NavBar from './components/navbar';
import Footer from './components/footer';
import './scss/responsive.scss' 

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
