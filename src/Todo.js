import React, {Component} from 'react';
import TodoListView from './TodoListView';
import _ from 'lodash';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            showListType: 0,
            store: [],
            all: [],
            completed: [],
            notCompleted: [],
            taskValue: "",
            activeButton: 0
         }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.all !== this.state.all) {
            console.log('updating state all array');
            this.setState(prevState => ({
                ...prevState,
              store: [...prevState.all ]
            }));
        }
    }

    handleOnChange = (e) => {
        const value = e.target.value;
        this.setState({
            taskValue: value
        });
    }

    generateRandomNumber = () => {
        const num = Math.random()*100;
        return num;
    }

    handleFormSubmit = (e) => {
        const value = this.state.taskValue;
        console.log(value);
        e.preventDefault();
        const temp = {
            text : (value) ? value.trim() : '',
            completed: false,
            id: Math.round(this.generateRandomNumber())
        }
        console.log(temp);
          this.setState(prevState => ({
              ...prevState,
            all: [...prevState.all, temp ],
            taskValue: ""
          }));
    }

    setUnsetCheckedState = (e) => {
        const newArray = [];
        const currentAll = this.state.all;
        currentAll.forEach(element => {
            if(element.id === parseInt(e.target.value)){
                const currentCompletedState = element.completed;
                element.completed = !currentCompletedState;
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
                return value.id === parseInt(event.target.value);
            });
            this.setState({ 
                ...this.state,
                store: currentStore  
            });
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