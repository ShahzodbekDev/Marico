import React from "react";
import { Routes, Route  } from "react-router-dom";
import Header from "./Pages/header";
import Home_page from "./Pages/Homepage/home_page";
import Footer from "./Pages/footer";
import SignIn from "./Pages/SignIn/signin";


function App() {
  return <div className="App ">

  
    <Header/>
    <Routes>
      <Route path="/" element={<Home_page/>}/>
      <Route path="signin" element={<SignIn/>}/>
    </Routes>
    <Footer/> 





   
  </div>;
}

export default App;
