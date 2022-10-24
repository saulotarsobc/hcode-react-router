import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* style */
import "./index.scss";

/* components */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* routes */
import Home from "./routes/Home";
import Descubra from "./routes/Discovery";
import Models from "./routes/Models";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/descubra" element={<Descubra />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
