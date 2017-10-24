import React from 'react'
import { Icon, Segment } from 'semantic-ui-react'
import '../stylesheets/Task.css'
import Divider from 'semantic-ui-react/dist/es/elements/Divider/Divider'
import { DragSource } from 'react-dnd'

const taskSource = {
  beginDrag: (props) => {
    return {
      task: props.task,
      from: props.from
    }
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

const Task = props => {
  const {id, title, text} = props.task
  return props.connectDragSource(
    <div className='ui segment Task' style={props.isDragging ? {opacity: '0'} : {}}>
      <div className='heading'>
        <div className="header">
          <h3>{title}</h3>
        </div>
        <div className="closeIcon">
          <Icon name={'close'} onClick={() => props.removeTask(id)}/>
        </div>
      </div>
      <Divider/>
      <div>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default DragSource('task', taskSource, collect)(Task)