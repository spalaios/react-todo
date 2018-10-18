import React from 'react';
import TaskRow from './TaskRow';
import _ from 'lodash';

const ListViewStyle = {
    border: '1px solid black',
    borderRadius: '8px'
};



const TodoListView  = ({ tasks, handleCheckedState }) => {

    function renderTaskRow(all)  {
      return _.map(all, (object) => {
            return <TaskRow key={object.id} data={object} handleCheckedState={handleCheckedState}/>
        });
    }

        return ( 
            <div className="mt-4 row" style={ListViewStyle} onMouseEnter={renderTaskRow}>
                <div className="col-12">
                    {renderTaskRow(tasks)}
                </div>
            </div>
         );
    }

export default TodoListView;