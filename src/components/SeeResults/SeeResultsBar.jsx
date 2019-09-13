import React from 'react';
import '../ProgressBar/ProgressBar.scss';
import { ProgressBarTitle } from '../ProgressBar/ProgressBarTitle';
import { SeeResultsLine } from '../SeeResults/SeeResultsLine';
import { SeeResultsIcon } from '../SeeResults/SeeResultsIcon';

export class SeeResultsBar extends React.Component {

    render() {

        return (
            <section className="progress-bar">
                <SeeResultsIcon />
                <div className="progress-bar__header">
                    <ProgressBarTitle
                        title="Готово"
                    />
                </div>
                <SeeResultsLine />
            </section>
        );
    }
}