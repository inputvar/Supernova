import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart } from "./pages";
import Navbar from "./components/Navbar";
import MentalHealth from "./components/MentalHealth";
import ConnectVideo from "./components/ConnectVideo";
import Form from "./pages/Form";
import EBooks from "./components/EBooks";
<<<<<<< HEAD
import Recommend from "./components/recommend";
=======
import CoursesPage from "./pages/CoursesPage";

>>>>>>> origin/feature01
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
<<<<<<< HEAD
        <Route path="/courses/Recommend" element={<Recommend/>} />
        <Route path="/category/:category" element={<Courses />} />
=======
>>>>>>> origin/feature01
        <Route path="/cart" element={<Cart />} />
        <Route path="/mentalHealth" element={<MentalHealth />} />
        <Route path="/connect" element={<ConnectVideo />} />
        <Route path="/books" element={<EBooks />} />
        <Route path="/form" element={<Form />} />
        <Route path="/coursePage" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
