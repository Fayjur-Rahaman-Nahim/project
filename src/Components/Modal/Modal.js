import React from 'react';

const Modal = (props) => {
    const { modalImg1 } = props
    return (
        <div
            style={{ opacity: 1 }}
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content my-back">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            {modalImg1}
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            hidden
                        ></button>
                    </div>
                    <div>
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-bs-dismiss="modal"
                            id="modal-close"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Modal;