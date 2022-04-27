export const MOVIES_SEARCH_INITIAL_STATE = {
	movies: undefined,
	searchTerm: '',
	page: 1,
	totalPages: 1,
	error: undefined,
	loading: false
};

export const MOVIES_SEARCH_ACTIONS = {
	START_SEARCH: 0,
	SEARCH_SUCCESS: 1,
	SEARCH_ERROR: 2,
	SET_PAGE: 3,
	SET_SEARCH_TERM: 4
};

export const moviesSearchReducer = (state, action) => {
	switch (action.type) {
		case MOVIES_SEARCH_ACTIONS.START_SEARCH:
			return {
				...state,
				error: undefined,
				loading: true
			};
		case MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS:
			return {
				...state,
				movies: action.movies,
				totalPages: action.totalPages,
				error: undefined,
				loading: false
			};
		case MOVIES_SEARCH_ACTIONS.SEARCH_ERROR:
			return {
				...state,
				movies: undefined,
				error: action.error,
				loading: false
			};
		case MOVIES_SEARCH_ACTIONS.SET_PAGE:
			return {
				...state,
				page: action.page
			};
		case MOVIES_SEARCH_ACTIONS.SET_SEARCH_TERM:
			return {
				...state,
				searchTerm: action.searchTerm
			};
		default:
			throw new Error('Invalid action');
	}
};
