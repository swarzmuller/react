import React from 'react';
import './ResultCalculation.scss';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import { ProgressBarCalculation } from '../ProgressBar/ProgressBarCalculation';
import { IntroExplanation } from '../Intro/IntroExplanation';

export class ResultCalculation extends React.Component {
    render() {
        const { isResulCalculate, onResulCalculationEnd } = this.props;
        if (isResulCalculate) {
            return (
                <section className="intro">
                    <section className="intro__main">
                        <ProgressBarCalculation
                            isResulCalculate={isResulCalculate}
                        />
                        <IntroExplanation description="Ожидайте, мы рассчитываем результаты теста" />
                        <section className="result-calculation">
                            <ProgressCircle
                                delay={0}
                                duration={2}
                                description="Анализ антропометрических данных"
                                modificator="progress-circle__circle_anthro"
                            />
                            <ProgressCircle
                                delay={2}
                                duration={2}
                                description="Анализ питания и образа жизни"
                                modificator="progress-circle__circle_nutrition"
                            />
                            <ProgressCircle
                                delay={4}
                                duration={4}
                                description="Подбор подходящего средства"
                                modificator="progress-circle__circle_total"
                                onResulCalculationEnd={onResulCalculationEnd}
                            />
                        </section>
                    </section>
                </section>
            )
        } else {
            return null;
        }
    }
}