import Etudiant from "./components/Etudiant"
import ListEtudiants  from "./components/ListeEtudiants"
function App() {
  return (
    <div>
      <h1>Application de gestion des étudiants</h1>
      <Etudiant
        nom="Alami"
        prenom="Ahmed"
        age={20}
        filiere="DAI"
      />
      <Etudiant
        nom="Bennani"
        prenom="Sara"
        age={21}
        filiere="DS"
      />
      <Etudiant
        nom="Idrissi"
        prenom="Youssef"
        age={19}
        filiere="DAI"
      />
      <ListEtudiants/>
    </div>
  )
}

export default App
