import React from 'react';
import './Testable.scss';

export class Testable extends React.Component {
    render() {
        const { description } = this.props;
        const { timeNumber } = this.props;
        return (
            <div className="testable">
                <p className="testable__desc">{description}</p>
                <div className="testable__amount">
                    <span className="testable__text">{ timeNumber }</span>
                </div>
            </div>
        );
    }
}