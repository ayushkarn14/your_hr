import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./components/Home";
import Signup from './components/Signup';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Profile from './components/Profile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/login' Component={Login} />
          <Route path='/signup' Component={Signup} />
          <Route path='/profile' Component={Profile} />
          <Route path='/' Component={Home} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
