import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AppLayout from "./Pages/AppLayout";
import SearchNotes from "./Pages/SearchNotes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/app" element={<AppLayout />} />
        <Route path="/search" element={<SearchNotes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
