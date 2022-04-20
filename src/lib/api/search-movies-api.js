import { API_HOST } from '../../constants/api';
import { movieApiMapper } from '../mappers/movie-api.mapper';

const SEARCH_MOVIES_PATH = '/search/movie';
const TRENDING_MOVIES_PATH = '/trending/movie/day';

export const searchMoviesApi = async (query, page) => {
	const endpoint = query
		? `${API_HOST}${SEARCH_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
		  }&page=${page}&query=${query}`
		: `${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
		  }&page=${page}`;

	try {
		const response = await fetch(endpoint);

		if (response.ok) {
			const data = await response.json();

			return {
				success: true,
				data: {
					movies: data.results.map(movie => movieApiMapper(movie)),
					totalPages: data.total_pages
				}
			};
		}

		return {
			success: false,
			statusCode: response.status
		};
	} catch (err) {
		return {
			success: false,
			code: 500
		};
	}
};
