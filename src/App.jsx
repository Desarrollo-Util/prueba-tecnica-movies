import MovieCard from './components/movie-card';
import { useMoviesSearch } from './lib/hooks/use-movies-search';

const App = () => {
	const { movies, page, error, loading, setPage } = useMoviesSearch();

	if (loading) return <p>Cargando...</p>;

	if (error) return <p>{error}</p>;

	return (
		<div>
			<div className='container container-xl mx-auto flex flex-wrap'>
				{movies &&
					movies.map(movie => (
						<MovieCard
							key={movie.id}
							title={movie.title}
							image={movie.image}
							year={movie.year}
							rating={movie.rating}
						/>
					))}
			</div>
			<button onClick={() => setPage(page + 1)}>Página: {page}</button>
		</div>
	);
};

export default App;
