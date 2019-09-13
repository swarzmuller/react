import React from 'react';
import './Checkbox.scss';

export class Checkbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    onCheck = (e) => {
        this.setState({
            checked: e.target.checked
        });
        this.props.clickHandler();
    }

    render() {
        const { variant, clickHandler } = this.props;

        return (
            <label className="checkbox" checked={this.state.checked} onChange={this.onCheck}>
                <input className="checkbox__input" type="radio" name="question" />
                <div className="checkbox__container">
                    <div className="checkbox__content">
                        {variant}
                    </div>
                    <div className="checkbox__img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="27.968" height="20"><path d="M26.204.336l-15.332 17.29-9.236-7.407A1 1 0 0 0 .39 11.781l9.975 8a1 1 0 0 0 1.37-.117l15.961-18A1 1 0 1 0 26.204.336z" fillRule="evenodd" /></svg>
                    </div>
                </div>
            </label>
        );
    }
}