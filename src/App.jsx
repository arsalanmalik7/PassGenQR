import { useState } from 'react';
import Password from './components/password/Password';
import ConvertCurrency from './components/convert currency/convert-currency';
import QrCode from './components/QR code/Qrcode';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';


function App() {


  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  return (


    <>
      <div className='navbar'>
        <Box className="box" sx={{ width: '80%' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="wrapped label tabs example"
          >
            <Tab
              value="one"
              label={<Link className='items' to='/'>Password</Link>}
              wrapped
            />
            <Tab value="two" label={<Link className='items' to='/qrCode'>QR Code</Link>} />
            <Tab value="three" label={<Link className='items' to='/convertCurrency'>Convert Currency</Link>} />
          </Tabs>
        </Box>
      </div>


      <div className='content'>
        <Routes>
          <Route path='/' element={<Password />} />
          <Route path='/qrCode' element={<QrCode />} />
          <Route path='/convertCurrency' element={<ConvertCurrency />} />
          <Route path='*' element={<Navigate to='/' replace={true} />} />
        </Routes>
      </div>

    </>

  );
}

export default App;
