import React ,  { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';


import {
    SUN,   
} from './../../constants/weathers';

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
            city: 'Buenos Aires',
            data: data
        }
    }

    handleUpdateClick = () => {
        console.log("Actualizar");
        this.setState({
            city: 'Barcelona'
        })
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