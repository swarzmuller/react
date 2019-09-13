import React  from 'react';
import './Header.scss';
import { Logo } from '../Logo/Logo';
import { Testable } from '../Testable/Testable';


export class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 105
        };
        this.updateValue = this.updateValue.bind(this);
    }

    updateValue() {
        const value = this.state.value + Math.floor(Math.random() * 4) + 1;
        this.setState({
            value: value
        });
    }

    componentDidMount() {
        setInterval(this.updateValue, Math.floor(Math.random() * 10000) + 5000);
    }

    render() {
        return (
            <section className="header">
                <div className="container">
                    <div className="header__wrap">
                        <Logo description="Бесплатный тест для эффективного и безопасного похудения"/>
                        <Testable
                            description="Сейчас тест проходят:"
                            timeNumber={this.state.value}
                        />
                    </div>
                </div>
            </section>
        );
    }
}