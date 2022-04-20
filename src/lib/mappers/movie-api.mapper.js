import {
	API_IMAGE_LANDSCAPE_HOST,
	API_IMAGE_PORTRAIT_HOST
} from '../../constants/api';

export const movieApiMapper = movieApiObject => ({
	id: movieApiObject.id,
	title: movieApiObject.title,
	description: movieApiObject.overview,
	image: `${API_IMAGE_PORTRAIT_HOST}${movieApiObject.poster_path}`,
	landscapeImage: `${API_IMAGE_LANDSCAPE_HOST}${movieApiObject.backdrop_path}`,
	year: new Date(movieApiObject.release_date).getFullYear(),
	rating: movieApiObject.vote_average
});
