import { Route, Routes } from "react-router";
import "./App.css";
import { Home } from "./pages/home/Home";
import { Archive } from "./pages/archive/Archive";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/archived" element={<Archive />} />
      </Routes>
    </div>
  );
}

export default App;
