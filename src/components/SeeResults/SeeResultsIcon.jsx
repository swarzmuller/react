import React from 'react';
import '../ProgressBar/ProgressBar.scss';

export class SeeResultsIcon extends React.Component {

    render() {
        return (
            <div className="progress-bar__circle">
                <img src={`${window.cdn_path}images/percent.png`} className="progress-bar__circle-img" />
            </div>
        );
    }
}