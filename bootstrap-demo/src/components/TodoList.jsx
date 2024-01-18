import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button'
import TodoItem from './TodoItem';

export default function TodoList({
    todos,
    onTodoAddClick,
}) {
    return (
        <div style={{ width: '30%', margin: '10px auto' }}>
            <h1>Todo List</h1>
            <ListGroup >
                {todos.map(x => <TodoItem key={x._id} {...x} />)}

            </ListGroup>
            <Button variant="primary" onClick={onTodoAddClick}>Add</Button>
        </div>
    );
}