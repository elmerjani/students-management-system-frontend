import { useState } from "react";

/* eslint-disable react/prop-types*/
const AddNoteButton = ({ studentId }) => {
    const [showModal, setShowModal] = useState(false);
    const [courseName, setCourseName] = useState("");
    const [noteValue, setNoteValue] = useState("");

    const handleAddNote = async () => {
        if (!courseName || !noteValue) {
            alert("Please fill in all fields!");
            return;
        }

        try {
            const response = await fetch(
                `http://my-backend-app:8080/students/${studentId}/notes`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        courseName: courseName,
                        noteValue: parseFloat(noteValue),
                    }),
                }
            );

            if (response.ok) {
                alert("Note added successfully!");
                setShowModal(false);
                setCourseName("");
                setNoteValue("");
            } else {
                alert("Failed to add note. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error adding note.");
        }
    };

    return (
        <>
            <button
                style={{ marginTop: 20 }}
                onClick={() => setShowModal(true)}
            >
                Ajouter une note
            </button>
            {showModal && (
                <div style={styles.overlay}>
                    <div style={styles.dialog}>
                        <h2>Ajouter une note</h2>
                        <label>
                            Nom du cours:
                            <input
                                type="text"
                                value={courseName}
                                onChange={(e) => setCourseName(e.target.value)}
                                style={styles.input}
                            />
                        </label>
                        <label>
                            Valeur de la note:
                            <input
                                type="number"
                                step="0.01"
                                value={noteValue}
                                onChange={(e) => setNoteValue(e.target.value)}
                                style={styles.input}
                            />
                        </label>
                        <div style={styles.actions}>
                            <button
                                onClick={handleAddNote}
                                style={styles.submitButton}
                            >
                                Ajouter
                            </button>
                            <button
                                onClick={() => setShowModal(false)}
                                style={styles.cancelButton}
                            >
                                Annuler
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default AddNoteButton;

// Styles for the modal and form
const styles = {
    overlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
    },
    dialog: {
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        maxWidth: "400px",
        width: "100%",
    },
    input: {
        width: "100%",
        padding: "8px",
        margin: "10px 0",
        borderRadius: "4px",
        border: "1px solid #ccc",
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
    },
    submitButton: {
        background: "#4CAF50",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    cancelButton: {
        background: "#f44336",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};
