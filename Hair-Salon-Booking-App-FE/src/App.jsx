import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import LoginGoogle from "./pages/LoginGoogle";
import Register from "./pages/Register";
import UpdateProfile from "./pages/UpdateProfile";
import ViewProfile from "./pages/ViewProfile";
import Services from "./pages/Services";
import About from "./pages/About";
import Location from "./pages/Location"
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoPage from "./pages/NoPage";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div>
        <Header />

          <Routes>
            <Route path="/" element={<Home />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login />} />
              <Route path="loginGoogle" element={<LoginGoogle />} />
              <Route path="register" element={<Register />} />
              <Route path="updateProfile" element={<UpdateProfile />} />
              <Route path="viewProfile" element={<ViewProfile />} />
              <Route path="services" element={<Services />} />
              <Route path="about" element={<About />} />
              <Route path="location" element={<Location />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
