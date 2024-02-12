import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Contact from './pages/Contact';
import JobDetails from './pages/JobDetails';
import Questions from './pages/Questions'
import Community from './pages/Community';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="contact" element={<Contact />} />
            <Route path="explore/jobdetails/:id" element={<JobDetails />} />
            <Route path="questions" element={<Questions />} />
            <Route path="community" element={<Community />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
