import ShareRecipe from "./pages/pages/ShareRecipe";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoleSelection from "./pages/pages/RoleSelection";
import Login from "./pages/pages/Login";
import Signup from "./pages/pages/Signup";
import UserDashboard from "./pages/pages/UserDashboard";
import AdminDashboard from "./pages/pages/AdminDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/share-recipe" element={<ShareRecipe />} />
        <Route path="/" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user" element={<UserDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;