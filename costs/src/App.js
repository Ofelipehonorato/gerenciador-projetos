import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import Company from './components/pages/Company'
import NewProject from './components/pages/NewProject'

import Container from './components/layout/Container'

// Router - Rotas para o NAV do site
// Routes - Para Alterar as paginas do projeto

function App() {
  return (
    <Router>
      <div>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/contact">Contato</Link>
          <Link to="/company">Empresa</Link>
          <Link to="/NewProject">Novo Projeto</Link>
        </ul>
      </div>
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path='/' 
              element={<Home/>}>
          </Route>
          <Route exact path='/company' 
              element={<Company/>}>
          </Route>
          <Route exact path='/contact' 
              element={<Contact/>}>
          </Route>
          <Route exact path='/newproject' 
              element={<NewProject/>}>
          </Route>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  );
}

export default App;
