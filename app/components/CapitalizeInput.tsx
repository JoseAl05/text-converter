'use client'

import React, { useState } from 'react';

const CapitalizeInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputLength, setInputLength] = useState(0);

    const inputChange = (e) => {

        //Se obtienen todas las palabras luego de un punto.
        const arr = e.target.value.split('.');
        for(let i = 0; i<arr.length;i++){
            let badDots = arr[i].match(/\b([ \.]*\.[ \.]*)(\b|$)/g);
            if(badDots){
                for(let x = 0 ; x<badDots.length;x++){
                    let fromatedDots = arr[i].replace(badDots[x],". ");
                    console.log(fromatedDots);
                }
            }
            if(arr[i].charAt(0) === " "){
                arr[i] = `${arr[i].charAt(1).toUpperCase()}${arr[i].slice(2)}`;
            }else{
                arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`;
            }
        }
        setInputValue(arr.join(". "));
    }
    console.log(inputValue);

    const capitalizeInput = (e) => {
        e.preventDefault();
        const badDots = inputValue.match(/\b([ \.]*\.[ \.]*)(\b|$)/g);
        for(let i = 0; i<badDots.length;i++){
            setInputValue(inputValue.replace(badDots[i],". "));
            console.log(inputValue.replace(badDots[i],". "));
        }
    }

    return (
        <>
        <form onSubmit={capitalizeInput}>
            <textarea
                className='absolute top-[40%] left-[40%] translate-x-[50%] translate-y-[50%]'
                id='inputToChange'
                name='inputToChange'
                onChange={inputChange}
            ></textarea>
            <div className='bg-gray-600 w-56 h-52 absolute top-[35%] left-[60%] translate-x-[70%] translate-y-[50%]'>{inputValue}</div>
            <button
                type='submit'
                className='text-white bg-green-800 p-2 absolute top-[60%] left-[40%] translate-x-[50%] translate-y-[50%]'
            >Change</button>
        </form>
        </>
    );
}

export default CapitalizeInput;