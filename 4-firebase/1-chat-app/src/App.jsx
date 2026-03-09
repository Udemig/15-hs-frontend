import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Room from "./pages/room";
import Chat from "./pages/chat";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Room />} />
        <Route path="/chat/:room" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
