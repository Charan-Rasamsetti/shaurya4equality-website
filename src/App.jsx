import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/common/MainLayout";
import Home from "./components/pages/home";
import About from "./components/pages/about";
import Contact from "./components/pages/contact";
import GetInvolved from "./components/pages/getinvolved";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
         <Route path="/get-involved" element={<GetInvolved />} />
      </Route>
    </Routes>
  );
}

export default App;
