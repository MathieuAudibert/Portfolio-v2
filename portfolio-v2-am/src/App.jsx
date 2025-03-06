import styles from './App.module.css'
import { Accueil } from './components/accueil/Accueil'
import { Navbar } from './components/nav/Navbar'
import { Technos } from './components/technos/Technos'

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Accueil />
    <Technos />
  </div>
}

export default App
