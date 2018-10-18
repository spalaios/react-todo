import React, {Component} from 'react';
import TodoListView from './TodoListView';
import _ from 'lodash';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showListType: 0,
            store: [],
            all: [
                {
                    text : 'All tasks are shown',
                    completed: true,
                    id: '01'
            
                },
                {
                    text : 'wallah habibi..',
                    completed: true,
                    id: '02'
            
                },
                {
                    text : 'code is life',
                    completed: false,
                    id: '03'
            
                },
                {
                    text : 'make your life',
                    completed: true,
                    id: '04'
            
                }
            ],
            completed: [],
            notCompleted: [],
            taskValue: "",
            activeButton: 0
         }
    }

    componentDidMount() {
        console.log(this.state.all);
        this.setState({
            ...this.state,
            store: this.state.all
        });
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

    setUnsetCheckedState = (e) => {
        const newArray = [];
        const currentAll = this.state.all;
        currentAll.forEach(element => {
            if(element.id === e.target.value){
                const currentCompletedState = element.completed;
                element['completed'] = !currentCompletedState;
            }
            newArray.push(element);
        });

        console.log(newArray);
        return newArray;
    }

    removeClickedTask = (array,event) => {
        if(!_.isEmpty(array)) {
            // remove the clicked one 
            const currentStore  = array;
            _.remove(currentStore, function(value) {
                return value.id === event.target.value;
            });

            console.log(currentStore);
        }
    }

    handleCheckedState = (e) => {
        this.setState({
            ...this.state,
            all:this.setUnsetCheckedState(e)
        })

        if(this.state.activeButton === 1 || this.state.activeButton === 2) {
            console.log('inside activeButton 1');
            this.removeClickedTask(this.state.store, e);
            
        }

    }

    handleButtonClick = (value) => {

        switch(value) {
            case 0: 
                this.setState({
                    ...this.state,
                    store: this.state.all,
                    activeButton: value
                });        
            return;
            case 2:
            //find all the task objects which are checked and set it as store value
            console.log('switching to case 2');
            const completedArray = _.filter(this.state.all, function(value) { return value.completed === true});
            console.log(completedArray);
                this.setState({
                    ...this.state,
                    store: completedArray,
                    activeButton: value
                });
            return;
            case 1:
            console.log('switching to case 1');
            //find all the task which are not checked and set it as store value
            const notCompletedArray = _.filter(this.state.all, function(value) { return value.completed === false});
                this.setState({
                    ...this.state,
                    store: notCompletedArray,
                    activeButton: value
                });
            return;
            default:
                this.setState({
                    ...this.state,
                    store: this.state.all,
                    activeButton: value
                }); 
            return;
                

        }
        
    }

    render() { 
        return ( 
            <div className="container mt-5">
                <form onSubmit={this.handleFormSubmit}>
                    <label>Enter your task</label>
                    <input className="form-control" value={this.state.taskValue} onChange={(e) => this.handleOnChange(e)}/>
                    <button className="btn btn-primary mt-4" type="submit">Submit</button>
                </form>

                <TodoListView tasks={this.state.store} handleCheckedState={this.handleCheckedState}/>
                <button type="button" className="btn btn-success mt-3" onClick={() => this.handleButtonClick(0)}>All</button>
                <button type="button" className="btn btn-danger mt-3 ml-2" onClick={() => this.handleButtonClick(1)}>Active</button>
                <button type="button" className="btn btn-warning mt-3 ml-2" onClick={() => this.handleButtonClick(2)}>Completed</button>
            </div>
         );
    }
}
 
export default Todo;