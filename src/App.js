import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import AuthProvider from './context/AuthProvider';
import Cart from './components/Cart/Cart';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import ServiceDetail from './components/ServiceDetail/ServiceDetail';
import Contact from './components/Contact/Contact';
// import "leaflet/dist/leaflet.css";
import Appointment from './components/Appointment/Appointment';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/register' element={<Registration />}></Route>

            <Route path='/cart'
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>}
            ></Route>

            <Route path='service-detail/:anyID'
              element={
                <ProtectedRoute>
                  <ServiceDetail />
                </ProtectedRoute>
              }
            ></Route>

            <Route path='/appointment'
              element={
                <ProtectedRoute>
                  <Appointment />
                </ProtectedRoute>
              }></Route>

            <Route path='*' element={<NotFound />} />

          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
