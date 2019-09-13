import React from 'react';
import '../ProgressBar/ProgressBar.scss';

export class SeeResultsLine extends React.Component {

    render() {
        return (
            <section className="progress-bar__line">
                <div className="progress-bar__line-full progress-bar__line-full_end"></div>
            </section>
        );
    }
}