import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Pages/header";
import Home_page from "./Pages/Homepage/home_page";
import Footer from "./Pages/footer";
import SignUp from "./Pages/SignUp/signup";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home_page />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
