
function ListEtudiants() {
    const etudiants = [
    { id: 1, nom: "Alami", prenom: "Ahmed", age: 20 },
    { id: 2, nom: "Benali", prenom: "Sara", age: 21 },
    { id: 3, nom: "Idrissi", prenom: "Youssef", age: 19 },
    { id: 4, nom: "Amrani", prenom: "Salma", age: 22 },
    { id: 5, nom: "Tazi", prenom: "Omar", age: 20 }
    ];

    return (
    <div>
        <h1>Liste des étudiants</h1>
        <ul>
        {etudiants.map((etudiant) => (
            <li key={etudiant.id}>
            {etudiant.nom} {etudiant.prenom} - {etudiant.age} ans
            </li>
        ))}
        </ul>
    </div>
    );

}
export default ListEtudiants
