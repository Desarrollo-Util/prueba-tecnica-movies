import MoviesGrid from './components/movies-grid';
import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, searchTerm, page, error, loading, setSearchTerm, setPage } =
		useMoviesSearch();

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={ev => setSearchTerm(ev.target.value)}
				placeholder='Buscar...'
			></input>
			<MoviesGrid movies={movies} loading={loading} error={error} />
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
		</div>
	);
};

export default App;
