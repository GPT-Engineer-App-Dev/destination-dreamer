import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import FlightSearch from "./pages/FlightSearch.jsx"; // Import the new FlightSearch component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/search-flights" element={<FlightSearch />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
