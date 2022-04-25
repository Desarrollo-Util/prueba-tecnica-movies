const MoviePreview = ({
	title,
	year,
	rating,
	landscapeImage,
	description,
	genres
}) => (
	<div className='w-full'>
		<img className='w-full' src={landscapeImage} />
		<h3 className='font-bold text-xl my-6'>{title}</h3>
		<div className='mb-4'>
			<span className='py-1 px-2 bg-primary mr-4'>{rating || '-'}</span>
			<span className='py-1 px-2 bg-bg-700'>{year}</span>
			<span className='ml-4'></span>
			{genres.join(', ')}
		</div>
		<p>{description}</p>
	</div>
);

export default MoviePreview;
