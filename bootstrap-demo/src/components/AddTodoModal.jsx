import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useForm } from '../hooks/useForm';

export default function AddTodoModal({
    show,
    onTodoAddSubmit,
}) {
    const { formValues, onChangeHandler, onSubmit } = useForm({ text: '' }, onTodoAddSubmit);

    // const [formValues, setFormValues] = useState({
    //     text: ''
    // });

    // const onChangeHandler = (e) => {
    //     setFormValues(state => ({ ...state, [e.target.name]: e.target.value }))
    // };


    return (
        <Modal show={show}>
            <Modal.Header closeButton>
                <Modal.Title>add Todo</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form onSubmit={onSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Todo</Form.Label>
                        <Form.Control type="text" name="text" placeholder="Do the dishes" value={formValues.name} onChange={onChangeHandler} />
                    </Form.Group>
                    <Button varian="primary" type='submit' style={{ marginRight: "10px" }}>Submit</Button>
                    <Button variant="secondary">Close</Button>
                </Form>
            </Modal.Body>




        </Modal>
    );
};