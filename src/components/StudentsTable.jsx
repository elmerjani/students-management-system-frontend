import { useEffect, useState } from "react";
import "../assets/css/Table.css";
const StudentsTable = () => {
    const [students, setStudents] = useState([]);
    async function fetchStudents() {
        const response = await fetch("http://localhost:8080/students");
        const data = await response.json();
        setStudents(data);
        console.log(data);
    }
    useEffect(() => {
        fetchStudents();
    });

    return (
        <div className="table-responsive-vertical shadow-z-1">
            <table id="table" className="table   table-mc-light-blue">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom et Pr&#233;nom</th>
                        <th>Date de cr&#233;ation</th>
                        <th>Moyen g&#233;n&#233;ral</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <td data-title="ID">{student.id}</td>
                            <td data-title="FULL_Name">
                                <a href="">{student.fullName}</a>
                            </td>
                            <td data-title="CREATION_DATE">
                                {student.creationDate}
                            </td>
                            <td
                                data-title="NOTES_MEAN"
                                className={
                                    student.notesMean == null
                                        ? ""
                                        : student.notesMean >= 10
                                        ? "passed"
                                        : student.notesMean < 10
                                        ? "failed"
                                        : ""
                                }
                            >
                                {student.notesMean == null
                                    ? "Pas de notes"
                                    : student.notesMean
                                          .toString()
                                          .replace(".", ",")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StudentsTable;
