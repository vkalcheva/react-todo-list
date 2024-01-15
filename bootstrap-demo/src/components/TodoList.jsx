import ListGroup from 'react-bootstrap/ListGroup';
import TodoItem from './TodoItem';

export default function TodoList({
    todos,
}) {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup >
                {todos.map(x => <TodoItem key={x._id} {...x} />)}

            </ListGroup>
        </div>
    );
}