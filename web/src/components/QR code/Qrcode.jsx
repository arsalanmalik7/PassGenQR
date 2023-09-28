import React from 'react';
import { useRef, useState } from 'react';
import axios from 'axios';
import './Qrcode.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


const QrCode = () => {


    const inputRef = useRef("");
    const [qrcode, setQrcode] = useState("");
    const [toggle, setToggle] = useState(false);


    const getQrcode = async (e) => {

        e.preventDefault();
        const formInput = e.target[0].value;
        console.log(e.target[0].value)

        const apiUrl = `https://api.api-ninjas.com/v1/qrcode?format=png&data=${formInput}`
        const apiKey = '2KzXCOHiI3BbaewPQ1Uly6U4DUGLAPvYcJDcW3FD'

        const headers = {
            'X-Api-Key': apiKey,
            'Content-Type': 'application/json',
        }

        const asiosInstance = axios.create({
            baseURL: apiUrl,
            headers: headers
        })
        const response = await asiosInstance.get()

        console.log(response);
        setQrcode(response.data);
        setToggle(true);

    }
    const downloadQrcode = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = `data:image/png;base64,${qrcode}`;
        downloadLink.download = 'qrcode.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };



    return (
        <>
            <h1 className='heading'>QR Code Generator</h1>
            <form className='qrcode' onSubmit={getQrcode}>
                <TextField fullWidth ref={inputRef} id="fullWidth" label="Fill" variant="filled" required />
                <Button type='submit' variant="contained">Get QR Code</Button>
            </form>
            {toggle ?
                <>
                    <div className='qrcode-img'>
                        <img src={`data:image/png;base64,${qrcode}`} alt="qrcode" />
                    </div>
                    <div className='download'>
                        <Button variant="contained" onClick={downloadQrcode}>Download QR Code</Button>
                    </div>
                </>
                :
                null
            }

        </>
    )
}

export default QrCode;