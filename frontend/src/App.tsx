import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "@components/layouts/navbar";
import Home from "@pages/home/Home";
import MovieDetail from "./pages/movieDetails/MovieDetail";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Router>
      <div className=" !mx-auto">
        <Navbar />
        <div className="!mt-25">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MovieDetail/:id" element={<MovieDetail />} />
            <Route path="/Profile/:id" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
