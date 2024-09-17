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
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0)

  // return (
  //   <BrowserRouter>
  //     <Routes>
  //       <Route path="/" element={}>
  //         <Route index element={} />
  //         <Route index element={} />
  //         <Route path="" element={} />
  //         <Route path="" element={} />
  //         <Route path="" element={} />
  //         <Route path="" element={} />
  //         <Route path="" element={} />
  //         <Route path="" element={} />
  //       </Route>
  //     </Routes>
  //   </BrowserRouter>
  // );
}

export default App
