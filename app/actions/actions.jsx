import {getWeather} from 'API'


const addWeather = (list) => {
  return {
    type: 'ADD_WEATHER',
    list
  }
}

const showError = (list) => {
  return {
    type: 'SHOW_ERROR',
    list
  }
}

export const startGetWeather = (city) => {
  return (dispatch, getState) => {
    return getWeather(city).then((res) => {
      dispatch(addWeather(res));
    })
    .catch((err)=>{
      alert('City Not Found');
      dispatch(showError(err));
      
    })
  }
}
