import ArrowLeft from './icons/arrow-left';
import ArrowRight from './icons/arrow-right';

const Pagination = ({ page, totalPages, setPage }) => {
	const isBackDisabled = page === 1;
	const isNextDisabled = page === totalPages;

	return (
		<div className='flex items-center gap-4'>
			<button
				className='bg-primary disabled:bg-gray p-1 rounded-full'
				disabled={isBackDisabled}
				onClick={() => setPage(page - 1)}
			>
				<ArrowLeft className='h-6' />
			</button>
			<span>
				Página {page} de {totalPages}
			</span>
			<button
				className='bg-primary disabled:bg-gray p-1 rounded-full'
				disabled={isNextDisabled}
				onClick={() => setPage(page + 1)}
			>
				<ArrowRight className='h-6' />
			</button>
		</div>
	);
};

export default Pagination;
