import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart } from "./pages";
import Navbar from "./components/Navbar";
import MentalHealth from "./components/MentalHealth";

import Form from "./pages/Form";
import EBooks from "./components/EBooks";
import Recommend from "./components/Recommend";
import CourseDetails from "./components/CourseDetails";
import HomePage from "./pages/Home/Index";
import RoomPage from "./Room";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mentalHealth" element={<MentalHealth />} />
        <Route path="/books" element={<EBooks />} />
        <Route path="/form" element={<Form />} />
        <Route path="/coursePage" element={<CourseDetails />} />
        <Route path="/connect" element={<HomePage />} />
        <Route path="/connect/room/:roomId" element={<RoomPage />}></Route>
        <Route path="/recommend" element={<Recommend />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
