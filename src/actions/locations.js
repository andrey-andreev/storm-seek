export const actionsTypes = {
  ADD_LOCATION: 'ADD_LOCATION'
}

export function addLocation(title) {
  return {
    type: actionsTypes.ADD_LOCATION,
    title
  }
}
