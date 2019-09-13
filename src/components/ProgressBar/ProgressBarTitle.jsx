import React from 'react';
import './ProgressBar.scss';

export class ProgressBarTitle extends React.Component {
    render() {
        const { title } = this.props;

        return (
            <h4 className="progress-bar__title">{title}</h4>
        );
    }
}