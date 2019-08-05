import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar.jsx';
import { searchStore } from '../actions/storeActions'
import { getLoading } from '../selectors/storeSelectors.js';

export const mapStateToProps = (state) => ({
    loading: getLoading(state)
});

export const mapDispatchToProps = ({
    searchStore
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);