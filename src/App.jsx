import StudentsTable from "./components/StudentsTable";
import AjouterEtudiant from "./components/AjouterEtudiant";
import "./assets/css/App.css";
function App() {
    return (
        <div>
            <h1> Liste des &#233;tudiants</h1>
            <StudentsTable />
            <AjouterEtudiant />
        </div>
    );
}

export default App;
