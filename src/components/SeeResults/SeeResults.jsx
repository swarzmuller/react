import React from 'react';
import './SeeResults.scss';
import { ProgressCircle } from '../ProgressCircle/ProgressCircle';
import { IntroExplanation } from '../Intro/IntroExplanation';
import { Button } from '../Button/Button';
import { SeeResultsBar } from '../SeeResults/SeeResultsBar';
import { SeeResultsFooter } from '../SeeResults/SeeResultsFooter';
import { ResultCircle } from '../SeeResults/ResultCircle';
import { ResultContent } from '../SeeResults/ResultContent';

export class SeeResults extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isStaticCircle: true
        }
    }

    render() {
        const { isResulCalculationEnd, result, handleClick } = this.props;
        const { weight } = this.props.userOptions;
        const resultValues = {
            idealWeight: "",
            loseWeight: ""
        }

        if (weight >= 55 && weight <= 60) {
            resultValues.idealWeight = "50кг";
            resultValues.loseWeight = weight - 50+'кг';
        } else if (weight >= 61 && weight <= 80) {
            resultValues.idealWeight = "57кг";
            resultValues.loseWeight = weight - 57+'кг';
        } else if (weight >= 81 && weight <= 120) {
            resultValues.idealWeight = "75кг";
            resultValues.loseWeight = weight - 75+'кг';
        } else if (weight >= 121 && weight <= 140) {
            resultValues.idealWeight = "80кг";
            resultValues.loseWeight = weight - 80+'кг';
        }

        if (isResulCalculationEnd) {
            return (
                <section className="intro">
                    <section className="intro__main intro__main_result">
                        <SeeResultsBar />
                        <IntroExplanation description="Ожидайте, мы рассчитываем результаты теста" />
                        <section className="result-calculation">
                            <ProgressCircle
                                delay={0}
                                duration={2}
                                description="Анализ антропометрических данных"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ProgressCircle
                                delay={2}
                                duration={2}
                                description="Анализ питания и образа жизни"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ProgressCircle
                                delay={4}
                                duration={4}
                                description="Подбор подходящего средства"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                        </section>
                        <SeeResultsFooter
                            description={"Готово! Мы подобрали для вас эффективное средство, которое подходит вам на 95,3%"}
                        />
                        <div className="intro__btn">
                            <Button
                                variant={"Посмотреть результат"}
                                handleClick={handleClick}
                            />
                        </div>
                    </section>
                </section>
            );
        } else if (result) {
            return (
                <section className="intro">
                    <section className="intro__main intro__main_end">
                        <SeeResultsBar />
                        <IntroExplanation description="Поздравляем с прохождением теста! Вот ваш результат" />
                        <section className="result-calculation">
                            <ResultCircle
                                value={resultValues.idealWeight}
                                description="Ваш идеальный вес (с учетом возраста)"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ResultCircle
                                value={resultValues.loseWeight}
                                description="Вам нужно сбросить"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                            <ResultCircle
                                value={1}
                                description="Подходящих для вас средств"
                                modificator="progress-circle__circle_full"
                                isStaticCircle={this.state.isStaticCircle}
                            />
                        </section>
                        <ResultContent />
                    </section>
                </section>
            );
        } else {
            return null;
        }
    }
}