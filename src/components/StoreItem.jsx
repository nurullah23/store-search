import React from 'react';
import PropTypes from 'prop-types';
import '../styles/StoreItem.scss';

const propTypes = {
    author: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string
}

const defaultProps = {
    author: '',
    title: '',
    type: ''
}

const StoreItem = ({ author, title, type }) => (
    <div className="store-item">
        <img
            src={`./${type}.png`}
            alt={`${type} image`} />
        <table className="item-data">
            <tbody>
            <tr>
                <td>Title</td>
                <td>{title}</td>
            </tr>
            <tr>
                <td>Author</td>
                <td>{author}</td>
            </tr>
            </tbody>
        </table>
    </div>
);

StoreItem.propTypes = propTypes;
StoreItem.defaultProps = defaultProps;

export default StoreItem;