import MoviesGrid from './components/movies-grid';
import Pagination from './components/pagination';
import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
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
		<div className='container container-xl mx-auto'>
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
			<MoviesGrid movies={movies} loading={loading} error={error} />
		</div>
	);
};

export default App;
