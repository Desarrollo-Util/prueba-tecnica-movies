import { API_IMAGE_HOST } from '../../constants/api';

export const movieApiMapper = movieApiObject => ({
	id: movieApiObject.id,
	title: movieApiObject.title,
	image: `${API_IMAGE_HOST}${movieApiObject.poster_path}`,
	year: new Date(movieApiObject.release_date).getFullYear(),
	rating: movieApiObject.vote_average
});
