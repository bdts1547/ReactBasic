import React from 'react';
import './nav.scss';
import { NavLink } from "react-router-dom";


class Nav extends React.Component {



    render() {
        return (
            <div className="topnav">
                <NavLink activeclassname='active' to="/">Home</NavLink>
                <NavLink activeclassname='active' to="/todo">Todo</NavLink>
                <NavLink activeclassname='active' to="/about">About</NavLink>
                <NavLink activeclassname='active' to="/user">User</NavLink>
            </div>
        )
    }
}


export default Nav;
