const INITIAL_STATE = {
  description: 'Read book',
  list: [{
    _id:1,
    description: ' Description one',
    done: true
  },{
    _id:2,
    description: 'Description two',
    done: false
  },{
    _id:3,
    description: 'Description three',
    done: false
  }]
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload}
    default:
      return state
  }
}
