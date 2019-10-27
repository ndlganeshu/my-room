import React from 'react';
import {connect} from 'react-redux';
import {ImyState, ItodosType} from '../../redux/store.types';
interface ITodoListProps{
todos: ItodosType[];
}

class TodoListC extends React.Component<ITodoListProps>{

    render(){
        const {todos} = this.props;
        return(
            <div>
                Hello from Todo List.
                {todos ? todos.map((todo) => <p key={todo.id}>{todo.name}</p>): ''}
            </div>
        )
    }
}
const mapStateToProps = (state: ImyState) => ({
todos: state.todos
});
const TodoList = connect(mapStateToProps)(TodoListC);
export default TodoList;