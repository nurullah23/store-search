import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import '../styles/Store.scss';
import StoreItem from './StoreItem.jsx';

const propTypes = {
    results: PropTypes.array,
    loading: PropTypes.bool,
    error: PropTypes.string
};

const defaultProps = {
    results: [],
    loading: false,
    error: ''
};

const StoreResults = ({ results, loading, error }) => {
    if (loading) {
        return (
            <div>Loading</div>
        );
    }

    if (error) {
        return (
            <div>Error: {error}</div>
        );
    }
    
    return (
        <div className="store-container">
        {results.map(({ type, title, author }, i) => (
            <StoreItem
                type={type}
                title={title}
                author={author}
                key={i} />
        ))}
        </div>
    );
};

StoreResults.propTypes = propTypes;
StoreResults.defaultProps = defaultProps;

export default StoreResults;