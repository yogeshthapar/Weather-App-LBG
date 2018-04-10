export const initialState = [];

export const weatherReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'ADD_WEATHER':
    return [...initialState, action.list];
    case 'SHOW_ERROR' :
    return [...initialState]
    default:

    return state;
  }
}
