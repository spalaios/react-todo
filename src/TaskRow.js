import React from 'react';

const taskBlock = {
    display: 'flex',
    justifyContent: 'space-around',
}

const checkBoxStyle = {
    display: 'flex',
    alignSelf: 'center'
}

const TaskRow = ({data}) => {
    return ( 
        <div className="row">
            <div className="col-12 mb-3 mt-3" style={taskBlock}>
                <p className="mb-0">{data.text}</p>
                <input style={checkBoxStyle} type="checkbox" name="" value={this.data.id} onChange={(e) => { return this.handleCheckedState(e)}} checked={this.data.completed}/>
            </div>
        </div>
     );
}
 
export default TaskRow;