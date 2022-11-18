import React, { Component } from 'react'
import{Link} from 'react-router-dom';

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <Link cclassName="navbar-brand" to="/">MENU</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/categorias">categorias</Link>
                            </li>
                            <li className="nav-item">
                                <Link class="nav-link" to="/productos">productos</Link>
                            </li>
                            
                            
                        </ul>
                       
                    </div>
                </div>
            </nav>
        )
    }
}