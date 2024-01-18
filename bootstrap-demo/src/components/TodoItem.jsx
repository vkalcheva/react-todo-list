import Button from 'react-bootstrap/esm/Button';
import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({
    text,
    isCompleted,
}) {
    return (

        <ListGroup.Item action style={{display: 'flex', justifyContent: 'space-between'}}>
            {text}
            <Button variant="dark">X</Button>
        </ListGroup.Item>

    );
};