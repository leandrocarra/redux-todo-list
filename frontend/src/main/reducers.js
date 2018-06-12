import { combineReducers } from 'redux'
import todoReduer from '../todo/todoReducer'

const rootReducer = combineReducers({
  todo: todoReduer
})

export default rootReducer
