import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Sparklines, SparklinesLine } from 'react-sparklines';


class WeatherList extends Component{
renderWeather(cityData){
const name = cityData.city.name;
const temps = cityData.list.map(weather => weather.main.temp);
console.log(temps);

const pressure = cityData.list.map(weather => weather.main.pressure);
console.log(pressure);

const humidity = cityData.list.map(weather => weather.main.humidity);
console.log(humidity);

  return(
    <tr key={name}>
      <td>{name}</td>
      <td>
        <Sparklines svgHeight={100} svgWidth={180} data={temps}>
          <SparklinesLine color="green" />
        </Sparklines>
      </td>
      <td>
        <Sparklines svgHeight={100} svgWidth={180} data={pressure}>
          <SparklinesLine color="green" />
        </Sparklines>
      </td>
      <td>
        <Sparklines svgHeight={100} svgWidth={180} data={humidity}>
          <SparklinesLine color="green" />
        </Sparklines>
      </td>
    </tr>
  );
}

  render() {
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
