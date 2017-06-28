import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart'


class WeatherList extends Component{
renderWeather(cityData){
const name = cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
console.log(temps);

const pressures = cityData.list.map(weather => weather.main.pressure);
console.log(pressures);

const humidities = cityData.list.map(weather => weather.main.humidity);
console.log(humidities);

  return(
    <tr key={name}>
      <td>{name}</td>
      <td><Chart data={temps} color='red' units="K"/></td>
      <td><Chart data={pressures} color='orange' units="hPa"/></td>
      <td><Chart data={humidities} color='green' units="%"/></td>
    </tr>
  );
}

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}


// function mapStateToProps(state){
//   return { weather: state.weather }
// }

//writing the same above function in es6
function mapStateToProps({ weather }){
  return { weather }; //{ weather } ==== { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);
