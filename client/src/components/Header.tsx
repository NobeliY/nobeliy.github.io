import {Component} from 'react';
import {ReactSVG} from "react-svg";
import Logo from '../assets/logo.svg';
import Logo_name from '../assets/logo_name.svg';
export class Header extends Component {
    logo = <>
        <ReactSVG src={Logo}/>
        <ReactSVG src={Logo_name}/>
    </>
    render() {
        return (
            <div className={'header'}>
                {this.logo}
                qq
            </div>
        );
    }
}