import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';

const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch(baseUrl)
            .then(res => res.json())
            .then(result => {
                setTodos(Object.values(result));
            });
    }, []);

    const onTodoAddSubmit = async (values) => {
        console.log(values);
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(values)
        });
        const result = await response.json();
        console.log(result);
    };

    return (
        <div>
            <Header />
            <TodoList todos={todos} />
            <AddTodoModal onTodoAddSubmit={onTodoAddSubmit} />

        </div>

    );
}

export default App
