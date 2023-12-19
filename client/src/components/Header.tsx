import { Component, JSX } from 'react';
import { ReactSVG } from "react-svg";

import Logo from '../assets/logo.svg';
import './scss/header.scss';

export class Header extends Component {
    logo: JSX.Element = <a id={"logo"} href={"/"}>
        <ReactSVG src={Logo}/>
    </a>

    navigation: JSX.Element = <nav>
        <ul className="nav_links">
            <li><a className="scroll" href="#active">Главная</a></li>
            <li><a className="scroll" href="#about">О нас</a></li>
            <li><a className="scroll" href="#service">Выбор автомобиля</a></li>
        </ul>
        <a href="#contact" className="scroll contact"><button type="button"><span>Связаться с нами</span></button></a>
    </nav>
    render(): JSX.Element {
        return (
            <header>
                {this.logo}
                {this.navigation}
                {/*<h1>Zet-PRJ Company</h1>*/}
            </header>
        );
    }
}