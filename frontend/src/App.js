import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, SingleCourse, Cart, Courses } from "./pages";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MentalHealth from "./components/MentalHealth";
import ConnectVideo from "./components/ConnectVideo";
import HomePage from "./pages/Home/Index";
import RoomPage from "./Room";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses/:id" element={<SingleCourse />} />
        <Route path="/category/:category" element={<Courses />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mentalHealth" element={<MentalHealth />} />
        <Route path="/connect" element={<HomePage />} />
        <Route path="/connect/room/:roomId" element={<RoomPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
