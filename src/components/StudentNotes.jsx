import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/Table.css";
import AddNoteButton from "./AddNoteButton";

const StudentNotes = () => {
    const { id } = useParams(); // Get the student ID from the route
    const [notes, setNotes] = useState([]);

    const moyen =
        notes.length > 0
            ? (
                  notes.reduce((sum, note) => sum + note.noteValue, 0) /
                  notes.length
              ).toFixed(2)
            : null;
    useEffect(() => {
        // Fetch notes for the student with the given ID
        fetch(`http://my-backend-app:8080/students/${id}/notes`)
            .then((response) => response.json())
            .then((data) => setNotes(data))
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div>
            <h1>Notes pour étudiant ID: {id}</h1>
            <div className="table-responsive-vertical shadow-z-1">
                <table id="table" className="table table-mc-light-blue">
                    <thead>
                        <tr>
                            <th>Matière</th>
                            <th>Note</th>
                        </tr>
                    </thead>
                    <tbody>
                        {notes.map((note) => (
                            <tr key={note.id}>
                                <td>{note.courseName}</td>
                                <td
                                    className={
                                        note.noteValue >= 10
                                            ? "passed"
                                            : "failed"
                                    }
                                >
                                    {note.noteValue
                                        .toString()
                                        .replace(".", ",")
                                        .concat(" /20")}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div
                style={{
                    height: "50px",
                    alignContent: "center",
                    fontWeight: 400,
                }}
                className={
                    moyen == null ? "" : moyen >= 10 ? "passed" : "failed"
                }
            >
                Moyen:{" "}
                {moyen == null ? "-" : moyen.toString().replace(".", ",")}{" "}
                {" /20"}
            </div>
            <AddNoteButton studentId={id} />
        </div>
    );
};

export default StudentNotes;
