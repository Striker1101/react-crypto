import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./dashboard/App.js";
import Protected from "./pages/Protected";
import FGT from "./pages/FGT";
import { Routes, Route } from "react-router-dom";
import Terms from "./component/Terms";
import { useEffect, useState } from "react";
function App() {
  const [dash, setDash] = useState(null);
  useEffect(() => {
    setDash(localStorage.getItem("key"));
  }, []);
  return (
    <Routes>
      <Route path="/" index element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/forgetpassword" element={<FGT />} />
      <Route path="/register" element={<Register />} />
      <Route path="/terms" element={<Terms />} />
      <Route
        path="/dashboard/*"
        element={
          <Protected isLoggedIn={dash}>
            <Dashboard />
          </Protected>
        }
      />
    </Routes>
  );
}

export default App;
