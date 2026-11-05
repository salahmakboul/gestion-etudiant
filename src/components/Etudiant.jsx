function Etudiant({ nom, prenom, age, filiere }) {
  return (
    <div>
      <p>Nom : {nom}</p>
      <p>Prénom : {prenom}</p>
      <p>Âge : {age} ans</p>
      <p>Filière : {filiere}</p>
    </div>
  )
}

export default Etudiant