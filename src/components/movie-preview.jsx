const MoviePreview = ({ title, year, rating, landscapeImage, description }) => (
	<div className='w-full'>
		<img className='w-full' src={landscapeImage} />
		<h3>{title}</h3>
		<p>{description}</p>
		<p>{year}</p>
		<p>{rating}</p>
	</div>
);

export default MoviePreview;
