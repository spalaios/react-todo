import React from 'react';
import TaskRow from './TaskRow';
import _ from 'lodash';

const ListViewStyle = {
    border: '1px solid black',
    borderRadius: '8px'
};

const all = [
    {
        text : 'All tasks are shown',
        completed: false,
        id: '4554'

    },
    {
        text : 'fdljlsfdsfd lfdisj lfdsoj jdfsoj',
        completed: false,
        id: '844478'

    },
    {
        text : 'weo df, ld',
        completed: false,
        id: '87787'

    }
];


const TodoListView  = () => {

    

    function handleCheckedState (e) {
        console.log(e);
        console.log(e.target.name);
        this.setState((prevState) => ({
            checked: !prevState.checked
        }))
    }

    function renderTaskRow()  {
    //   return _.each(all, (object) => {
    //         return <TaskRow key={object.id} data={object} />
    //     });
        return all.forEach(element => {
            return <TaskRow key={element.id} data={element} />
        });
    // return <TaskRow> </TaskRow>
    }

        return ( 
            <div className="mt-4 row" style={ListViewStyle} onMouseEnter={renderTaskRow}>
                <div className="col-12">
                    {renderTaskRow}
                </div>
            </div>
         );
    }
 
export default TodoListView;