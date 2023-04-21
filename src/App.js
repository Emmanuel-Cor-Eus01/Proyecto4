import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <AppRouter></AppRouter>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
