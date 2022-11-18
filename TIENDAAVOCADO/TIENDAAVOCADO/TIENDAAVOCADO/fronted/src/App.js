import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import React from 'react';
import Navigation from './components/Navigation';
import CreateProducto from './components/CreateProducto';
import CreateCategorias from './components/CreateCategorias';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <Router>
      <Navigation/>
      <div className="container p-4">
<Route path="/categorias" element={props => <CreateCategorias/>}/>
<Route path="/productos" component={props => <CreateProducto/>}/>
</div>

    </Router>

  )
}

export default App;
