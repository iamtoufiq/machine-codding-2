import React, { useState } from "react";
import "./CSS/app.css";
import DialogBox from "./components/DialogBox";
import { Routes, Route } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./components/Error";
import Card from "./components/Card";
import ArchivePage from "./routes/ArchivePage";
import Navbar from "./components/Navbar";
function App() {
  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => {
    setShowDialog(true);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Card />} />
        <Route path="/archive" element={<ArchivePage />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
