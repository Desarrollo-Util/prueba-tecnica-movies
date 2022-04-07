import { API_HOST } from '../../constants/api';
import { movieApiMapper } from '../mappers/movie-api-mapper';

const TRENDING_MOVIES_PATH = '/trending/movie/day';

export const searchTrendingMovies = async page => {
	try {
		const response = await fetch(
			`${API_HOST}${TRENDING_MOVIES_PATH}?api_key=${
				import.meta.env.VITE_API_KEY
			}&page=${page}`
		);

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
