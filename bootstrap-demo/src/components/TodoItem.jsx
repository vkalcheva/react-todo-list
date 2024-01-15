import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoItem({
    text,
    isCompleted,
}) {
    return (

        <ListGroup.Item action>
            {text}
        </ListGroup.Item>
    );
};