import React, { useEffect, useState } from 'react';
import rgbToHex from './utils';

const SingleColor = ({ rgb, type, weight,index, hexColor  }) => {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    const hex = rgbToHex(...rgb);
    const hexValue = `#${hexColor}`;

    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [alert]);

    return (
        <div
        className={`color-item ${index > 10 && 'color-light'}`}
        style={{backgroundColor: `rgb(${bcg})`}}
        onClick={() => {
            setAlert(true);
            navigator.clipboard.writeText(hexValue);
        }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='hex'>{hexValue}</p>
            {alert && <p className='alert'>Copied to clipboard</p>}
        </div>
    )
};

export default SingleColor;