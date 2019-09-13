import React from 'react';
import './Button.scss';

export class Button extends React.Component {
    render() {
        const { iconName, variant, handleClick } = this.props;
        let icon;
        if (iconName) {
            icon = <img src={`${window.cdn_path}images/${iconName}.svg`} alt="button-icon" className="button__img" />
        }

        return (
            <button className="button" onClick={handleClick}>
                {icon}
                {variant}
            </button>
        );
    }
}