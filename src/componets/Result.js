import React from 'react'
import './Result.css'
import { Button } from '@material-ui/core';


export const Result = ({temp,dec,iconn,settep}) => {
    return (
        <div  className="result">
            <div className="result__box">
                <h1>Temp : {temp}°C</h1>
                <p>{dec}</p>
                <img src={iconn} alt="logo"  />  <br/>
                <Button  variant="contained" color="primary" onClick={()=>{settep("")}}    >
              Back
                </Button> <br/>
                <p className="name">Developed by : Mifras Gaffoor</p>
            </div>
        </div>
    )
}
