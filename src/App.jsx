import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();

	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div>
			{movies && movies.map(movie => <div key={movie.id}>{movie.title}</div>)}
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
		</div>
	);
};

export default App;
