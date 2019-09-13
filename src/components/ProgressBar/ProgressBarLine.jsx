import React from 'react';
import './ProgressBar.scss';

export class ProgressBarLine extends React.Component {
    constructor(props) {
        super(props);
        this.NUMBER_OF_QUESTIONS = 10;
    }

    render() {
        let { isQuiz, currentQuestionIndex, isResulCalculate } = this.props;
        const lineFilling = {
            width: `${(100 / this.NUMBER_OF_QUESTIONS) * (isQuiz ? ++currentQuestionIndex : currentQuestionIndex)}%`
        }
        let progressLine;

        if (isQuiz) {
            progressLine = <div className="progress-bar__line-full" style={lineFilling}></div>
        } else if (isResulCalculate) {
            progressLine = <div className="progress-bar__line-full progress-bar__line-full_animate"></div>
        } else {
            progressLine = <div className="progress-bar__line-full progress-bar__line-full_first-step"></div>
        }

        return (
            <section className="progress-bar__line">
                {progressLine}
            </section>
        );
    }
}