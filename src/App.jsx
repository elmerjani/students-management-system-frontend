import "./assets/css/App.css";
import StudentsTable from "./components/StudentsTable";
function App() {
    return (
        <div>
            <h1> Liste des &#233;tudiants</h1>
            <StudentsTable />
            <button>Ajouter un nouveau &#233;tudiant</button>
        </div>
    );
}

export default App;
