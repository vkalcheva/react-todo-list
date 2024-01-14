import ListGroup from 'react-bootstrap/ListGroup';

export default function TodoList () {
    return (
        <div style={{width: '30%', margin: '10px auto'}}>
            <h1>Todo List</h1>
        <ListGroup >
            <ListGroup.Item action>
                Link 1
            </ListGroup.Item>
            <ListGroup.Item action>
                Link 2
            </ListGroup.Item>
            <ListGroup.Item action>
                This one is a button
            </ListGroup.Item>
        </ListGroup>
        </div>
    );
}