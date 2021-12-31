import React from "react";
import {NavLink} from 'react-router-dom';

export default function Menu() {
    return (
        <div>
        <nav className="menu">
            <NavLink className="menu__item" activeClassName="menu__item-active" exact to="/"> Главная </NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/drift"> Дрифт-такси </NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/timeattack"> Time Attack </NavLink>
            <NavLink className="menu__item" activeClassName="menu__item-active" to="/forza"> Forza Karting </NavLink>

            {/* <NavLink className={isActive => "menu__item-active" + (!isActive ? "menu__item" : "")} exact to="/">Главная</NavLink>
            <NavLink className={isActive => "menu__item-active" + (!isActive ? "menu__item" : "")} to="/drift">Дрифт-такси</NavLink>
            <NavLink className={isActive => "menu__item-active" + (!isActive ? "menu__item" : "")} to="/timeattack">Time Attack</NavLink>
            <NavLink className={isActive => "menu__item-active" + (!isActive ? "menu__item" : "")} to="/forza">Forza Karting</NavLink> */}
        </nav>
        </div>
    )
}
