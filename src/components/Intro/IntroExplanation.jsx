import React from 'react';

export class IntroExplanation extends React.Component {
    render() {
        const { description } = this.props;
        
        return (
            <h3 className="intro__explanation">{description}</h3>
        );
    }
}