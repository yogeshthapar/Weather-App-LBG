import React, {Component} from 'react'
import CurrentWeather from 'CurrentWeather'
import WeatherList from 'WeatherList'


class ForecastWeather extends Component {
  constructor(props){
    super(props);
  }

  render () {

    const {forecast} = this.props;

    let data = forecast.list.map((item) => {
      return {
        day: item.dt_txt,
        count: item.main.temp
      }
    });

   data = data.filter((item) => {
      if(item.day.indexOf('09:00:00') != -1 || item.day.indexOf('15:00:00') != -1 || item.day.indexOf('21:00:00') != -1 ){
        return item
      }
    });
    return (
      <div>
      <div>
        <CurrentWeather forecast={forecast}/>
      </div>
      <WeatherList forecast={forecast}/>
    </div>
    )
  }

}
export default ForecastWeather
