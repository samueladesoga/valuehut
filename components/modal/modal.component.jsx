import React from 'react';
import modalStyles from './modal.module.scss';

class Modal extends React.Component {
	unmount = (e) => {
		if (e.target === document.getElementById("modal-window")) {
			e.stopPropagation();
            e.preventDefault();
			return false;
		}
		this.props.root.unmount()
	}

    permitClick = (e) => {
        if (e.target !== document.getElementById("addToCart") && e.target !== document.getElementById("payWithInvoice")) {
			e.stopPropagation();
            e.preventDefault();
			return false;
		}
        this.props.root.unmount()
    }

	render() {
		return (<div className={`${modalStyles.modalBackground}`} id="modal-background" onClick={this.unmount}>
					<div className={`${modalStyles.modalContainer}`} id="modal-container">
						<div className={`${modalStyles.modalWindow}`} id="modal-window" onClick={this.permitClick}>
							<span className={`${modalStyles.closeWindow}`} id="closeWindow" onClick={this.unmount}>&#10006;</span>
							{ this.props.children }
						</div>
					</div>
				</div>)
	}
}

export default Modal;