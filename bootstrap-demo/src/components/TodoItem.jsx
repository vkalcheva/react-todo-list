import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({
    _id,
    text,
    isCompleted,
    onTodoDeleteClick
}) {
    return (

        <ListGroup.Item action style={{ display: 'flex', justifyContent: 'space-between' }}>
            {text}
            <Button variant="dark" onClick={() => onTodoDeleteClick(_id)}>X</Button>
        </ListGroup.Item>

    );
};