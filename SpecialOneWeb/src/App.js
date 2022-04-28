import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>Hello World</div>} />
                <Route path="/edit-personal-info" element={<div>Person Info</div>} />
                <Route path="/edit-contact-info" element={<div>Contact Info</div>} />
            </Routes>
        </div>
  );
}

export default App;
