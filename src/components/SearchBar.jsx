import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Store.scss';

const propTypes = {
    loading: PropTypes.bool,
    searchStore: PropTypes.func
};

const defaultProps = {
    results: [],
    loading: false,
    searchStore: () => {}
};

const SearchBar = ({ loading, searchStore }) => {
    
    return (
        <div className="search-bar">
            <form>
                <input
                    placeholder="Search store"
                    disabled={loading}
                    onChange={(event) => searchStore(event.target.value)}
                />
            </form>
        </div>
    );
};

SearchBar.propTypes = propTypes;
SearchBar.defaultProps = defaultProps;

export default SearchBar;