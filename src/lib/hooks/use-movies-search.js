import { useEffect, useReducer } from 'react';
import { searchMoviesApi } from '../api/search-movies-api';
import {
	moviesSearchReducer,
	MOVIES_SEARCH_ACTIONS,
	MOVIES_SEARCH_INITIAL_STATE
} from '../reducers/movies-search.reducer';

const searchMovies = async (
	search,
	page,
	startSearch,
	searchSuccess,
	searchError
) => {
	startSearch();

	const { success, data, statusCode } = await searchMoviesApi(search, page);

	if (success) searchSuccess(data.movies);
	else searchError(`Error: ${statusCode}`);
};

export const useMoviesSearch = () => {
	const [moviesSearch, setMoviesSearch] = useReducer(
		moviesSearchReducer,
		MOVIES_SEARCH_INITIAL_STATE
	);

	const startSearch = () =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.START_SEARCH
		});

	const searchSuccess = movies =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_SUCCESS,
			movies
		});

	const searchError = error =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SEARCH_ERROR,
			error
		});

	const setSearchTerm = searchTerm =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_SEARCH_TERM,
			searchTerm
		});

	const setPage = page =>
		setMoviesSearch({
			type: MOVIES_SEARCH_ACTIONS.SET_PAGE,
			page
		});

	useEffect(() => {
		const timeoutId = setTimeout(
			() =>
				searchMovies(
					moviesSearch.searchTerm,
					moviesSearch.page,
					startSearch,
					searchSuccess,
					searchError
				),
			200
		);

		return () => clearTimeout(timeoutId);
	}, [moviesSearch.searchTerm, moviesSearch.page]);

	return { ...moviesSearch, setSearchTerm, setPage };
};
