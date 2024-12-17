import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movielist from "./Movielist";
import MovieDetail from "./MovieDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movielist />} /> 
        <Route path="/movie/:id" element={<MovieDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;

