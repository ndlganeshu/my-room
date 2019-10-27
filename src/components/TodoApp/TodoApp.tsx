import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const TodoApp: React.FC  =() => {


return(
    <div>
        Hello from Todo App.
        <AddTodo />
        <TodoList />
    </div>
);
    
}
export default TodoApp ;