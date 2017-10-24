import React from 'react'
import { Grid } from 'semantic-ui-react'
import TaskList from '../components/TaskList'
import '../stylesheets/App.css'
import { connect } from 'react-redux'
import { addToList, removeFromList } from '../redux/actions/taskActions'
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';

class App extends React.Component {
  render () {
    const {todoList, progressList, doneList, removeTask, addTask} = this.props
    return (
      <div className="App">
        <Grid columns={3} container textAlign={'center'}>
          <Grid.Column>
            <TaskList  addTask={addTask} removeTask={removeTask} title={'Todo'} name={'todoList'}
                      list={todoList}/>
          </Grid.Column>
          <Grid.Column>
            <TaskList addTask={addTask} removeTask={removeTask} title={'Progress'}
                      name={'progressList'}
                      list={progressList}/>
          </Grid.Column>
          <Grid.Column>
            <TaskList  addTask={addTask} removeTask={removeTask} title={'Done'} name={'doneList'}
                      list={doneList}/>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    todoList: state.taskReducer.todoList,
    progressList: state.taskReducer.progressList,
    doneList: state.taskReducer.doneList,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTask: (task, listName) => dispatch(addToList(task, listName)),
    removeTask: (taskId, listName) => dispatch(removeFromList(taskId, listName)),
  }
}

export default DragDropContext(HTML5Backend)(connect(
  mapStateToProps,
  mapDispatchToProps,
)(App))
