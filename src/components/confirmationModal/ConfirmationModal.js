import React from 'react';
import ReactDom from 'react-dom';
import './ConfirmationModal.css';

export default function ConfirmationModal({ isVisible, toggleModal, onConfirm }) {
    return isVisible
        ? ReactDom.createPortal(
              <React.Fragment>
                  <div className='modal-overlay' />
                  <div className='modal-wrapper'>
                      <div className='modal'>
                          <p>Are you sure?</p>
                          <button onClick={onConfirm}>Yes</button>
                          <button onClick={toggleModal}>No</button>
                      </div>
                  </div>
              </React.Fragment>,
              document.body
          )
        : null;
}
