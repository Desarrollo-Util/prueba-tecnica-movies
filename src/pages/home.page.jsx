import { useState } from 'react';
import Modal from '../components/modal';
import MoviePreview from '../components/movie-preview';
import MoviesGrid from '../components/movies-grid';
import Pagination from '../components/pagination';
import { useMoviesSearch } from '../lib/hooks/use-movies-search';

const HomePage = () => {
	const [previewMovie, setPreviewMovie] = useState();

	const {
		movies,
		totalPages,
		searchTerm,
		page,
		error,
		loading,
		setSearchTerm,
		setPage
	} = useMoviesSearch();

	return (
		<div className='container mx-auto'>
			<div className='flex justify-between items-center p-4'>
				<input
					className='py-2 px-4 bg-transparent border border-white'
					type='text'
					value={searchTerm}
					onChange={ev => setSearchTerm(ev.target.value)}
					placeholder='Buscar...'
				></input>
				<Pagination page={page} setPage={setPage} totalPages={totalPages} />
			</div>
			<MoviesGrid
				movies={movies}
				loading={loading}
				error={error}
				setPreviewMovie={setPreviewMovie}
			/>
			{previewMovie && (
				<Modal closeModal={() => setPreviewMovie()}>
					<MoviePreview {...previewMovie} />
				</Modal>
			)}
		</div>
	);
};

export default HomePage;
