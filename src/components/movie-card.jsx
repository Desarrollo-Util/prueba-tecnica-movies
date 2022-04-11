const MovieCard = ({ title, image, year, rating }) => {
	return (
		<div className='w-1/4 p-4'>
			<div className=''>
				<img className='w-full block' src={image} />
				<h3>{title}</h3>
				<span className='mr-2'>{rating}</span>
				<span>{year}</span>
			</div>
		</div>
	);
};

export default MovieCard;