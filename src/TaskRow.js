import React from 'react';
import './App.css';

const taskBlock = {
    display: 'flex',
    justifyContent: 'space-around',
}

const checkBoxStyle = {
    display: 'flex',
    alignSelf: 'center'
}

const TaskRow = ({data, handleCheckedState}) => {
    return ( 
        <div className="row">
            <div className="col-12 mb-3 mt-3" style={taskBlock}>
                <p className={`mb-3 ${(data.completed === true) ? 'dash' : ''}`}>{data.text}</p>
                <input style={checkBoxStyle} type="checkbox" name="" value={data.id} onChange={(e) => { return handleCheckedState(e)}} checked={data.completed}/>
            </div>
        </div>
     );
}
 
export default TaskRow;