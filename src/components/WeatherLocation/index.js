import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import transformWeather from './../../services/transformWeather';
import { API_KEY, URL_BASE } from './../../constants/openWeather';

const location = "Buenos Aires,ar";
const api_weather = `${URL_BASE}?q=${location}&appid=${API_KEY}`;

class WeatherLocation extends Component {

    constructor() {
        super();

        this.state = {
            city: 'Cargando ...',
            data: null
        }
    }


    componentDidMount() {
        this.handleUpdateClick();
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            /* console.log(resolve); */
            return resolve.json();
        }).then(data => {
            /* console.log(data); */

            const newWeather = transformWeather(data);

            this.setState({
                city: data.name,
                data: newWeather
            })
        });
    }

    render() {
        const { city, data } = this.state;

        return (<div className="weatherLocationCont" >
            <Location city={city} />
            {data ? <WeatherData data={data} /> : <CircularProgress size={50}></CircularProgress>}
            {/* <button onClick={this.handleUpdateClick} >Actualizar</button> */}
        </div>)
    }
}


export default WeatherLocation;