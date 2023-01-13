import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./dashboard/App.js";
import Protected from "./pages/Protected";
import FGT from "./pages/FGT";
import { Routes, Route } from "react-router-dom";
import Terms from "./component/Terms";
function App() {
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
          <Protected isLoggedIn={true}>
            <Dashboard />
          </Protected>
        }
      />
    </Routes>
  );
}

export default App;
