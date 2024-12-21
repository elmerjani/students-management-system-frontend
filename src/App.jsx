import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StudentsTable from "./components/StudentsTable";
import "./assets/css/App.css";
import StudentNotes from "./components/StudentNotes";
function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<StudentsTable />} />
                <Route path="/students/:id" element={<StudentNotes />} />
            </Routes>
        </Router>
    );
}

export default App;
