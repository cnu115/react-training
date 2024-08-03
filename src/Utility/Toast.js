import { useState } from 'react';
import { ToastContainer } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

function BootstrapToast({ variant, title, body, show, setShow }) {
    return (
        <>
            <ToastContainer
                className="p-3"
                position={'top-end'}
                style={{ zIndex: 1 }}
            >
                <Toast
                    className="d-inline-block m-1"
                    bg={variant.toLowerCase()}
                    onClose={() => setShow(false)}
                    delay={3000} 
                    autohide
                    show={show}
                >
                    <Toast.Header>
                        <img
                            src="holder.js/20x20?text=%20"
                            className="rounded me-2"
                            alt=""
                        />
                        <strong className="me-auto">{title}</strong>

                    </Toast.Header>
                    <Toast.Body className={variant === 'Dark' && 'text-white'}>
                        {body}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
}

export default BootstrapToast;