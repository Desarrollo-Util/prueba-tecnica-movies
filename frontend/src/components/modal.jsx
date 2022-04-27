import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import CrossIcon from './icons/cross-icon';

const Modal = ({ children, closeModal }) => {
	useEffect(() => {
		document.body.classList.add('overflow-y-hidden');

		return () => document.body.classList.remove('overflow-y-hidden');
	}, []);

	return createPortal(
		<div className='flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='relative max-w-4xl bg-bg p-6'>
				<button
					className='absolute top-0 right-0 p-1 bg-primary'
					onClick={closeModal}
				>
					<CrossIcon className='w-6' />
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	);
};

export default Modal;
