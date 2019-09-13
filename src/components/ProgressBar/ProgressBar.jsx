import React from 'react';
import './ProgressBar.scss';
import { ProgressBarTitle } from './ProgressBarTitle';
import { ProgressBarPage } from './ProgressBarPage';
import { ProgressBarLine } from './ProgressBarLine';
import { ProgressBarCircle } from './ProgressBarCircle';

const icons = ['page-1-icon', 'page-2-icon', 'page-3-icon', 'page-4-icon', 'page-5-icon', 'page-6-icon', 'page-7-icon', 'page-8-icon', 'page-9-icon', 'page-10-icon'];

export class ProgressBar extends React.Component {

    render() {
        const { isOptions, isQuiz, currentQuestionIndex } = this.props;

        return (
            <section className="progress-bar">
                <ProgressBarCircle
                    isOptions={isOptions}
                    isQuiz={isQuiz}
                    currentQuestionIndex={currentQuestionIndex}
                />
                <div className="progress-bar__header">
                    <ProgressBarTitle
                        title="Процесс..."
                    />
                    <ProgressBarPage
                        isQuiz={isQuiz}
                        currentQuestionIndex={currentQuestionIndex}
                    />
                </div>
                <ProgressBarLine
                    isQuiz={isQuiz}
                    currentQuestionIndex={currentQuestionIndex}
                />
            </section>
        );
    }
}