import logo from './logo.svg';
// import './App.css';
import './css/global.css'

import Header from './components/header.js'
import Navigation from './components/navigation.js'
import About from './components/about.js'

function App() {
  return (
    <div>
      <Header/>
      <Navigation />
      <main>
        <About />

      </main>
      



      <footer>
        <p>Logo por <a href="https://pt.vecteezy.com/vetor-gratis/nutri%C3%A7%C3%A3o-logo">Nutrição Logo Vetores por Vecteezy</a>.</p>
      </footer>

      
    </div>
  );
}

export default App;
