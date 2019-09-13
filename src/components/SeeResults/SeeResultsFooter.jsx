import React from 'react';
import './SeeResults.scss';

export class SeeResultsFooter extends React.Component {
    render() {
        const { descriprion } = this.props;

        return (
            <p className="results-footer">
                {descriprion}
            </p>
        );
    }
}