import {Component} from 'react'
import "./scss/content.scss"

export class MainContent extends Component {
    render() {
        return (
            <div className={"container main"}>
                <h1>“Автопрокат и продажа - путь к свободе на колесах!”</h1>
                <h2>“Открой мир в движении с нашим сервисом аренды и продажи автомобилей!”</h2>
            </div>
        );
    }
}
