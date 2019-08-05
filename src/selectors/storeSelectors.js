import { createSelector } from "reselect";

export const getStore = state => state.store || {};

export const getStoreResults = createSelector(
    getStore,
    ({ results }) => results || []
);

export const getLoading = createSelector(
    getStore,
    ({ loading }) => Boolean(loading)
);

export const getErrorMessage = createSelector(
    getStore,
    ({ error }) => error || ''
);