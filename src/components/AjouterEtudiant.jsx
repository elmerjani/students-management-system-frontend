import { useState } from "react";

const AjouterEtudiant = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [nomEtudiant, setNomEtudiant] = useState("");

    // Fonction pour ouvrir ou fermer le dialogue
    const toggleDialog = () => {
        setIsOpen(!isOpen);
    };

    // Fonction pour gérer la soumission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Vérifier que le champ n'est pas vide
        if (!nomEtudiant.trim()) {
            alert("Le nom de l'étudiant ne peut pas être vide !");
            return;
        }

        try {
            // Envoyer la donnée au backend
            const response = await fetch("http://localhost:8080/students", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ fullName: nomEtudiant }),
            });

            if (response.ok) {
                alert("Étudiant ajouté avec succès !");
                setNomEtudiant(""); // Réinitialiser le champ
                toggleDialog(); // Fermer le dialogue
            } else {
                alert("Erreur lors de l'ajout de l'étudiant !");
            }
        } catch (error) {
            console.error("Erreur réseau :", error);
            alert("Erreur réseau !");
        }
    };

    return (
        <div>
            <button onClick={toggleDialog}>Ajouter un nouveau étudiant</button>

            {isOpen && (
                <div style={styles.overlay}>
                    <div style={styles.dialog}>
                        <h2>Ajouter un étudiant</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>
                                    Nom de l&apos;étudiant:
                                    <input
                                        type="text"
                                        value={nomEtudiant}
                                        onChange={(e) =>
                                            setNomEtudiant(e.target.value)
                                        }
                                        style={styles.input}
                                    />
                                </label>
                            </div>
                            <div style={styles.actions}>
                                <button
                                    type="submit"
                                    style={styles.submitButton}
                                >
                                    Ajouter
                                </button>
                                <button
                                    type="button"
                                    onClick={toggleDialog}
                                    style={styles.cancelButton}
                                >
                                    Annuler
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

// Styles simples en JS
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
        // color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
    cancelButton: {
        background: "#f44336",
        // color: "white",
        padding: "10px 15px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
    },
};

export default AjouterEtudiant;
