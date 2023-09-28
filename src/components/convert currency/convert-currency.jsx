import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './convert-currency.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';






const ConvertCurrency = () => {


    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [amount, setAmount] = useState("");
    const [result, setResult] = useState("");
    const [show, setShow] = useState("");


    const fromHandleChange = (e) => {
        setFrom(e.target.value);
    }

    const toHandleChange = (e) => {
        setTo(e.target.value);
    }



    const curruncyConverter = async (e) => {
        e.preventDefault();
        setAmount(e.target[0].value);
    }

    useEffect(() => {


        function formatAccountBalance(balance) {
            const formattedBalance = balance.toFixed(2);
            return formattedBalance.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }


        const fetchData = async () => {
            const apiUrl = `https://api.api-ninjas.com/v1/convertcurrency?have=${from}&want=${to}&amount=${amount}`
            const apiKey = '2KzXCOHiI3BbaewPQ1Uly6U4DUGLAPvYcJDcW3FD'

            const headers = {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json'
            }

            const asiosInstance = axios.create({
                baseURL: apiUrl,
                headers: headers
            })

            try {
                const response = await asiosInstance.get();
                const newAmount = response.data.new_amount

                const formattedAmount = formatAccountBalance(newAmount);
                setShow("result")
                setResult(formattedAmount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, [amount, from, to]);



    return (
        <>
            <h1 className='heading'>Convert Currency</h1>

            <div>

                <form onSubmit={curruncyConverter} className='convert-currency'>

                    <TextField
                        type='number'
                        id="outlined-basic"
                        label="Amount"
                        variant="outlined"
                        required
                    />



                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">From</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={from}
                            onChange={fromHandleChange}
                            required
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                            <MenuItem value={"USD"}>US Dollar</MenuItem>
                            <MenuItem value={"PKR"}>Pakistani Rupee</MenuItem>
                            <MenuItem value={"AUD"}>Australian Dollar</MenuItem>
                            <MenuItem value={"AFN"}>Afghan Afghani</MenuItem>
                            <MenuItem value={"INR"}>Indian Rupee</MenuItem>
                            <MenuItem value={"OMR"}>Omani Rial</MenuItem>
                            <MenuItem value={"QAR"}>Qatar Rial</MenuItem>
                            <MenuItem value={"TRY"}>Turkish Lira</MenuItem>
                            <MenuItem value={"SAR"}>Saudi Riyal</MenuItem>
                            <MenuItem value={"RUB"}>Russian Ruble</MenuItem>
                            <MenuItem value={"NZD"}>Newzealand Dollar</MenuItem>
                            <MenuItem value={"LKR"}>Sri lankan Rupee</MenuItem>
                            <MenuItem value={"JPY"}>Japanese Yen</MenuItem>
                            <MenuItem value={"IQD"}>Iraqi Dinar</MenuItem>
                            <MenuItem value={"GBP"}>British Pound</MenuItem>
                            <MenuItem value={"EGP"}>Egyptian Pound</MenuItem>
                            <MenuItem value={"CAD"}>Canadian Dollar</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-filled-label">To</InputLabel>
                        <Select
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            value={to}
                            onChange={toHandleChange}
                            required
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={"BTC"}>Bitcoin</MenuItem>
                            <MenuItem value={"USD"}>US Dollar</MenuItem>
                            <MenuItem value={"PKR"}>Pakistani Rupee</MenuItem>
                            <MenuItem value={"AUD"}>Australian Dollar</MenuItem>
                            <MenuItem value={"AFN"}>Afghan Afghani</MenuItem>
                            <MenuItem value={"INR"}>Indian Rupee</MenuItem>
                            <MenuItem value={"OMR"}>Omani Rial</MenuItem>
                            <MenuItem value={"QAR"}>Qatar Rial</MenuItem>
                            <MenuItem value={"TRY"}>Turkish Lira</MenuItem>
                            <MenuItem value={"SAR"}>Saudi Riyal</MenuItem>
                            <MenuItem value={"RUB"}>Russian Ruble</MenuItem>
                            <MenuItem value={"NZD"}>Newzealand Dollar</MenuItem>
                            <MenuItem value={"LKR"}>Sri lankan Rupee</MenuItem>
                            <MenuItem value={"JPY"}>Japanese Yen</MenuItem>
                            <MenuItem value={"IQD"}>Iraqi Dinar</MenuItem>
                            <MenuItem value={"GBP"}>British Pound</MenuItem>
                            <MenuItem value={"EGP"}>Egyptian Pound</MenuItem>
                            <MenuItem value={"CAD"}>Canadian Dollar</MenuItem>
                        </Select>
                    </FormControl>

                    <Button variant="contained" type="submit">Convert</Button>
                </form>

                <div className='result-div'>

                    <h1 className={show}>{result} {to}</h1>

                </div>
            </div >
        </>
    )

}

export default ConvertCurrency;