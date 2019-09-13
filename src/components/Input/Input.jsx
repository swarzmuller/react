import React from 'react';
import './Input.scss';

export class Input extends React.Component {

    render() {
        const { variant, placeholder, onChange, isError} = this.props;
        if(isError) {
            alert('1')
        }
        return (
            <label className={`input valid_${variant}`}>
                <input className={`input__control input__control_${variant}`} type="text" placeholder={placeholder} onInput={onChange}  data-variant={variant} />
            </label>
        );
    }
}