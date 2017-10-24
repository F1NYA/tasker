import React from 'react'
import PropTypes from 'prop-types'
import Task from './Task'
import { Header, Segment } from 'semantic-ui-react'
import CreateModal from '../containers/CreateModal'
import { DropTarget } from 'react-dnd'

const taskListTarget = {
  drop(props, monitor) {
    const item = Object.assign({},monitor.getItem())
    if(item.from !== props.name){
      props.removeTask(item.task.id, item.from)
      props.addTask(item.task, props.name)
    }
  },

  hover(props){
    console.log('hover', props.name)
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

const TaskList = props => {
  const {addTask, removeTask, list} = props
  return props.connectDropTarget(
    <div className='ui segment'>
      <Header as='h2'>
        {props.title}
      </Header>
      {list.map((task, index) => (
        <Task from={props.name} key={index} removeTask={task => removeTask(task, props.name)}
              task={task}/>
      ))}
      { (props.name === 'todoList') && <CreateModal addTask = {task => addTask(task, props.name)} listName={props.name}/>}
    </div>

  )
}

TaskList.propTypes = {
  name: PropTypes.string,
  removeTask: PropTypes.func,
  addTask: PropTypes.func
}

export default DropTarget('task',taskListTarget, collect)(TaskList)