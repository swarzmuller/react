import React from 'react';
import './ProgressBar.scss';

export class ProgressBarPage extends React.Component {
    render() {
        let { isQuiz, currentQuestionIndex } = this.props;

        return (
            <span className="page-counter">
                <span className="page-counter__current">{isQuiz ? ++currentQuestionIndex : currentQuestionIndex}</span>
                <span className="page-counter__divider">/</span>
                <span className="page-counter__all">10</span>
            </span>
        );
    }
}