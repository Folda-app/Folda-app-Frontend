import React from 'react';
import RegisterSideBar from '../Components/RegisterSideBar';
import InputOtp from '../Components/InputOtp';

function Verify() {
    
    return (
        <div className='bg-white relative flex items-center py-3 px-4'>
            <RegisterSideBar/>
            <InputOtp/>
        </div>
    );
}

export default Verify;