import { useState, useEffect } from 'react';

import { TodoContext } from './contexts/TodoContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import TodoList from './components/TodoList';
import AddTodoModal from './components/AddTodoModal';


const baseUrl = 'http://localhost:3030/jsonstore/todos';

function App() {
    const [todos, setTodos] = useState([]);
    const [showAddTodo, setShowAddTodo] = useState(false);

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
        setShowAddTodo(false);
        setTodos(state => [...state, result])
    };

    const onTodoAddClick = () => {
        setShowAddTodo(true);
    };

    const onTodoAddClose = () => {
        setShowAddTodo(false);
    };

    const onTodoDeleteClick = async (todoId) => {
        const response = await fetch(`${baseUrl}/${todoId}`, { method: 'DELETE' });
        setTodos(state => state.filter(x => x._id !== todoId));
    };

    const contextValue = {
        onTodoDeleteClick
    };

    return (
        <TodoContext.Provider value={contextValue}>
            <div>
                <Header />
                <TodoList
                    todos={todos}
                    onTodoAddClick={onTodoAddClick}

                />
                <AddTodoModal show={showAddTodo} onTodoAddSubmit={onTodoAddSubmit} onTodoAddClose={onTodoAddClose} />

            </div>
        </TodoContext.Provider>

    );
}

export default App
