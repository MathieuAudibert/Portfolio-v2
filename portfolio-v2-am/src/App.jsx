import styles from './App.module.css'
import { About } from './components/about/About'
import { Accueil } from './components/accueil/Accueil'
import { Navbar } from './components/nav/Navbar'

function App() {
  return <div className={styles.App}>
    <Navbar />
    <Accueil />
    <About />
  </div>
}

export default App
