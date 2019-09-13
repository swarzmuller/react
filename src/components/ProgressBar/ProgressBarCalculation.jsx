import React from 'react';
import './ProgressBar.scss';
import { ProgressBarTitle } from './ProgressBarTitle';
import { ProgressBarLine } from './ProgressBarLine';
import { ProgressBarCircle } from './ProgressBarCircle';
import CountUp from 'react-countup';

export class ProgressBarCalculation extends React.Component {

    render() {
        const { isResulCalculate, isQuiz, currentQuestionIndex, isIntro } = this.props;

        return (
            <section className="progress-bar">
                <ProgressBarCircle
                    isResulCalculate={isResulCalculate}
                />
                <div className="progress-bar__header">
                    <ProgressBarTitle
                        title="Процесс вычисления результата"
                    />
                    <CountUp
                        className="progress-bar__percent"
                        suffix="%"
                        start={0}
                        end={100}
                        duration={8}
                        useEasing={false}
                    />
                </div>
                <ProgressBarLine
                    isResulCalculate={isResulCalculate}
                    isQuiz={isQuiz}
                    currentQuestionIndex={currentQuestionIndex}
                />
            </section>
        );
    }
}