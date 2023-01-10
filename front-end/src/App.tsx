import { Routes, Route } from "react-router-dom";
import { HTTPCat } from "./pages/HTTPCat";
import { Login } from "./pages/Login";
import { RandomDog } from "./pages/RandomDog";
import { Home } from "./pages/Home";
import { UsersManager } from "./pages/UsersManager";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/httpCat" element={<HTTPCat />} />
      <Route path="/randomDog" element={<RandomDog />} />
      <Route path="/users" element={<UsersManager />} />
    </Routes>
  );
}
