import React from 'react';
import './Main.scss';
import { Intro } from '../Intro/Intro';

export class Main extends React.Component {

    render() {
        return (
            <main className="main">
                <div className="container">
                    <Intro/>
                </div>
            </main>
        );
    }
}