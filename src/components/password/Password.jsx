import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider"
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import "./password.css"


const Password = () => {

    const [sliderValue, setSliderValue] = useState(10);
    const [password, setPassword] = useState("");
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        const getPassword = async () => {
            const apiUrl = ` https://api.api-ninjas.com/v1/passwordgenerator?length=${sliderValue}`
            const apiKey = '2KzXCOHiI3BbaewPQ1Uly6U4DUGLAPvYcJDcW3FD'

            const headers = {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }

            const asiosInstance = axios.create({
                baseURL: apiUrl,
                headers: headers
            })
            const response = await asiosInstance.get()

            setPassword(response.data.random_password)

        }
        getPassword();
    }, [sliderValue])

    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    }

    const copyHandler = async () => {
        setIsCopied(true);
        setTimeout(() => {
            setIsCopied(false);
        }, 1000);

         navigator.clipboard.writeText(password);
        
    }


    return (


        <>
            <h1 className="heading">Password Generator</h1>
            <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" min={6} max={30} onChange={handleSliderChange} />
            <p className="slider-value">Characters: {sliderValue}</p>
            <h3 className="password">{password} <span className="icon" onClick={copyHandler}>{
                isCopied ?
                    <AssignmentTurnedInIcon />
                    :
                    <ContentPasteIcon />

            }</span></h3>
        </>
    )
}

export default Password;

