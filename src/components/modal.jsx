import { createPortal } from 'react-dom';

const Modal = ({ children, closeModal }) =>
	createPortal(
		<div className=' flex justify-center items-center fixed inset-0 bg-overlay'>
			<div className='relative max-w-4xl bg-bg p-4'>
				<button
					className='absolute -top-2 -right-2 p-2 bg-primary'
					onClick={closeModal}
				>
					X
				</button>
				{children}
			</div>
		</div>,
		document.getElementById('modal-container')
	);

export default Modal;
