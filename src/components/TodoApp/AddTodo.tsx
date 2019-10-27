import React from 'react';
import {connect} from 'react-redux';
import {AddTodoAction} from '../../redux/actions/actions';
interface IAddTodoProps{
    AddTodoAction: (val:string) => void;
}
interface IAddTodoState{

}

class AddTodoC extends React.Component<IAddTodoProps, IAddTodoState>{
    constructor(props: IAddTodoProps){
        super(props);
        this.addTodo = this.addTodo.bind(this);
    }
    addTodo(){
        this.props.AddTodoAction('Hello');
    }
    render(){
        console.log('===rrrjjjj==',this.props);
        return(
            <div>
                <input type="text" />
                    <input type="button" value="Add" onClick={this.addTodo}/>

            </div>
        )
    }
}

// const mapDispatchToProps = {AddTodoAction};
const AddTodo =  connect(null, {AddTodoAction})(AddTodoC);
export default AddTodo;