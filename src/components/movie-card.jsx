const MovieCard = ({ title, image, year, rating, tractors }) => {
	return (
		<div className='w-1/4 p-4'>
			<div className=''>
				<img className='w-full block' src={image} />
				<h3>{title}</h3>
				<span>{rating}</span>
				<span>{year}</span>
				<span>{tractors}</span>
			</div>
		</div>
	);
};

export default MovieCard;
