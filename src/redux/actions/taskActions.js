// ACTION TYPES

export const ADD_TO_LIST = 'ADD_TO_LIST'
export const REMOVE_FROM_LIST = 'REMOVE_FROM_LIST'

// ACTION FUNCTIONS

export function addToList (task, listName) {
  return {type: ADD_TO_LIST, task, listName}
}

export function removeFromList (id, listName) {
  return {type: REMOVE_FROM_LIST, id, listName}
}

