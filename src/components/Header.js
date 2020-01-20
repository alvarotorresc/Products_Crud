import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link to="/productos" className="navbar-brand">
                React CRUD & Routing
            </Link>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <NavLink
                        to='/products'
                        className="nav-link">
                        Products
                    </NavLink>

                </li>
                <li>
                    <NavLink
                        to="/new-product"
                        className="nav-link">
                        New Product
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
)


export default Header;

