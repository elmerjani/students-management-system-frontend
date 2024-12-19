import "../assets/css/Table.css";
const StudentsTable = () => {
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
                                    student.notesMean >= 10
                                        ? "passed"
                                        : student.notesMean < 10
                                        ? "failed"
                                        : ""
                                }
                            >
                                {student.notesMean.toString().replace(".", ",")}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
const students = [
    {
        id: 1,
        fullName: "Marie Dubois",
        creationDate: "15/01/2023",
        notesMean: 15.6,
    },
    {
        id: 2,
        fullName: "Jean Dupont",
        creationDate: "10/02/2023",
        notesMean: 12.3,
    },
    {
        id: 3,
        fullName: "Élodie Moreau",
        creationDate: "20/03/2023",
        notesMean: 8.2,
    },
    {
        id: 4,
        fullName: "Louis Martin",
        creationDate: "25/04/2023",
        notesMean: 9.8,
    },
    {
        id: 5,
        fullName: "Claire Bernard",
        creationDate: "30/05/2023",
        notesMean: 17.5,
    },
];

export default StudentsTable;
