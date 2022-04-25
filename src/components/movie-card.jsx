const MovieCard = ({ title, image, year, rating, onClick }) => (
	<div className='w-1/5 p-4' onClick={onClick}>
		<div
			style={{
				backgroundImage: `url(${image})`
			}}
			className='relative aspect-2/3 bg-cover bg-gray cursor-pointer hover:scale-105 transition-transform'
		>
			<h3 className='absolute bottom-0 w-full bg-bg-700 p-2'>{title}</h3>
			<span className='absolute top-0 left-0 py-1 px-2 bg-primary'>
				{rating || '-'}
			</span>
			<span className='absolute top-0 right-0 py-1 px-2 bg-bg-700'>{year}</span>
		</div>
	</div>
);

export default MovieCard;
