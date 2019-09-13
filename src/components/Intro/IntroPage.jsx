import React from 'react';
import './Intro.scss';
import { IntroExplanation } from './IntroExplanation';
import { IntroTitle } from './IntroTitle';
import { IntroSubtitle } from './IntroSubtitle';
import { Button } from '../Button/Button';
import { IntroFooter } from './IntroFooter';

export class IntroPage extends React.Component {

    render() {
        const { isVisible, passTheTest } = this.props;

        if (isVisible) {
            return (
                <section className="intro">
                    <IntroExplanation description="Экспресс-тест от лучших диетологов" />
                    <section className="intro__main">
                        <IntroTitle />
                        <IntroSubtitle />
                        <div className="intro__btn">
                            <Button
                                iconName={"page-1-icon"}
                                handleClick={passTheTest}
                                variant={"Пройти тест"}
                            />
                        </div>
                    </section>
                    <IntroFooter />
                </section>
            );
        } else {
            return (
                null
            );
        }
    }
}