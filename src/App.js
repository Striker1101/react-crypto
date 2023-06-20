import Homepage from "./pages/homepage";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./dashboard/App.js";
import Protected from "./pages/Protected";
import FGT from "./pages/FGT";
import { Routes, Route } from "react-router-dom";
import Terms from "./component/Terms";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [dash, setDash] = useState(false);
  useEffect(() => {
    setDash(localStorage.getItem("key"));
  }, []);

  return (
    <div>
      <Helmet>
        <title>cryptogram universal</title>
        <meta
          name="description"
          content="Crypto Currency exchange, trade and sale, we have it covered"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="twitter:title" content="cryptogram-universal" />
        <meta name="twitter:description" content="Crypto Currency exchange, trade and sale, we have it covered" />
        <meta
          name="twitter:image"
          content="URL to your page's featured image"
        />
        <meta name="twitter:card" content="summary_large_image" />
        {/* Add more metadata tags as needed */}
      </Helmet>
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
    </div>
  );
}

export default App;
