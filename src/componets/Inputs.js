import React from 'react';
import Input from '@material-ui/core/Input';
import { Button } from '@material-ui/core';
import './Input.css'

const Inputs = ({inputs,setInputs,findWeather}) => {


const handleChange =(event)=>{
    setInputs(event.target.value);
    
}

const handClick =(event)=>{
event.preventDefault();
findWeather();
}

// console.log(inputs);
    return (
        <div className="inputBox">
            <div className="inputBox__feild">
                <h1>Open Weather App</h1>
               <p>Powered By</p> 
              <img src="https://openweathermap.org/themes/openweathermap/assets/img/mobile_app/android_icon.png"  alt="" />
              <form>
              <Input placeholder="Enter City Name"   onChange={handleChange}   value={inputs}  />  <br/>
              <Button  variant="contained" color="primary" type="submit"  onClick={handClick}   >
              search
                </Button>
              </form>
              <br/>
              <p >Developed by : Mifras Gaffoor</p>
            </div>
        </div>
    )
}

export default Inputs
