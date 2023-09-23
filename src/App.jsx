import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import Listing from "./pages/Listing";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Community from "./pages/Community";
import TestimonialCard from "./Components/TestimonialCard";
function App() {
  return(
  
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/verify" element={<Verify/>}/>
        <Route path="/listing" element={<Listing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/faqs" element={<Faqs/>}/>
        <Route path="/community" element={<Community/>}/>
        <Route path="/test" element={<TestimonialCard/>}/>
      </Routes>

  )
}
export default App;