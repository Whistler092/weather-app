import React ,  { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


import {
    SUN,   
} from './../../constants/weathers';
import { API_KEY , URL_BASE } from './../../constants/openWeather';

const location = "Buenos Aires,ar";
const api_weather = `${URL_BASE}?q=${location}&appid=${API_KEY}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component  {

    constructor(){
        super();

        this.state = {
            city: 'Cargando ...',
            data: data
        }
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature : temp,
            weatherState,
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            console.log(resolve);
            return resolve.json();
        }).then(data => {
            console.log(data);
            
            const newWeather = this.getData(data);

            this.setState({
                city : data.name,
                data: newWeather
            })
        });

        console.log("Actualizar");
        
    }

    render () { 
        const { city, data } = this.state;

        return (<div className="weatherLocationCont" >
                <Location city={city} />
                <WeatherData data={data} />
                <button onClick={this.handleUpdateClick} >Actualizar</button>
            </div>)
    }
}
    

export default WeatherLocation;