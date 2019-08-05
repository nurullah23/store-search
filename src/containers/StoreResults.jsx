import { connect } from 'react-redux';
import StoreResults from '../components/StoreResults.jsx';
import {
    getStoreResults,
    getLoading,
    getErrorMessage
} from '../selectors/storeSelectors.js';

export const mapStateToProps = (state) => ({
    results: getStoreResults(state),
    loading: getLoading(state),
    error: getErrorMessage(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreResults);