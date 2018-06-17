import { actionsTypes } from '../actions/locations'

export default function locations(state = [], action) {
  switch (action.type) {
    case actionsTypes.ADD_LOCATION:
      return [
        ...state,
        {
          title: action.title
        }
      ]
    default:
      return state
  }
}
