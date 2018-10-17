import React, {Component} from 'react';
import TodoListView from './TodoListView';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showListType: 0,
            all: [],
            completed: [],
            notCompleted: [],
            taskValue: ""
         }
    }

    handleOnChange = (e) => {
        const value = e.target.value;
        console.log(value);
        this.setState({
            taskValue: value
        });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
    }

    render() { 
        return ( 
            <div className="container mt-5">
                <form onSubmit={this.handleFormSubmit}>
                    <label>Enter your task</label>
                    <input className="form-control" value={this.state.taskValue} onChange={(e) => this.handleOnChange(e)}/>
                    <button className="btn btn-primary mt-4" type="submit">Submit</button>
                </form>

                <TodoListView />
            </div>
         );
    }
}
 
export default Todo;