import React,{useState}from 'react'
import Inputs from './componets/Inputs'
import axios from 'axios';
import { Result } from './componets/Result';
const App = () => {
const [inputs, setInputs] = useState("");
const [temp, setTemp] = useState("");
const [description, setDescription] = useState("");
const [icon, setIcon] = useState("")



const findWeather= async()=>{
const apiKey = "8de07c594aea04881291108073311101";
const unit = "metric";
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + inputs + "&appid=" + apiKey + "&units=" + unit;
const response = await axios.get(url);
const temp = await response.data.main.temp ;
const description =await  response.data.weather[0].description;
const icon =  await response.data.weather[0].icon;
const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
setTemp(temp);
setDescription(description);
setIcon(imageURL);
setInputs("")
}


  return (
    <div className="app">
    {temp === "" ? 
    (  <Inputs inputs={inputs}   setInputs={setInputs}  findWeather={findWeather}  /> ):
       (<Result  temp={temp}   dec={description} iconn={icon} settep={setTemp}  />)
    }
    </div>
  )
}

export default App
