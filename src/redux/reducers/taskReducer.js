import { ADD_TO_LIST, REMOVE_FROM_LIST } from '../actions/taskActions'
import {List} from 'immutable'

const initTodoList = [
  {
    id: 1,
    title: 'Title 1',
    text: 'Text 1'
  },
  {
    id: 2,
    title: 'Title 2',
    text: 'Text 1'
  },
  {
    id: 3,
    title: 'Title 3',
    text: 'Text 1'
  }
]

const initProgressList = [
  {
    id: 4,
    title: 'Title 4',
    text: 'Text 1'
  },
  {
    id: 5,
    title: 'Title 5',
    text: 'Text 1'
  },
  {
    id: 6,
    title: 'Title 6',
    text: 'Text 1'
  }
]

const initDoneList = [
  {
    id: 7,
    title: 'Title 7',
    text: 'Text 1'
  },
  {
    id: 8,
    title: 'Title 8',
    text: 'Text 1'
  },
  {
    id: 9,
    title: 'Title 9',
    text: 'Text 1'
  }
]

const initState = {
  todoList: new List(initTodoList),
  progressList: new List(initProgressList),
  doneList: new List(initDoneList),
  lastId: 9
}

export const taskReducer = (state = initState, action) => {
  if (action.type === ADD_TO_LIST) {
    let newListObject = {}
    newListObject[action.listName] = state[action.listName].push({...action.task, id: state.lastId + 1})
    return Object.assign({},state, newListObject, {lastId: state.lastId + 1})
  }
  if (action.type === REMOVE_FROM_LIST){
    const indexToRemove = state[action.listName].findIndex(task => task.id === action.id)
    console.log(indexToRemove)
    let newListObject = {}
    newListObject[action.listName] = state[action.listName].delete(indexToRemove)
    return Object.assign({},state, newListObject)
  }
  return state
}