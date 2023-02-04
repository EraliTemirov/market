import { Routes, Route } from "react-router-dom";
import Redirect from "./Components/Redirect";
import Details from "./Pages/Details";
import Home from "./Pages/Home";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="*" element={<Redirect />} />
      </Routes>
    </div>
  );
}

export default App;
