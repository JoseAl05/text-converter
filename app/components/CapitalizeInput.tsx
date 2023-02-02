'use client'

import React, { useState } from 'react';
import axios from 'axios';

const CapitalizeInput = () => {

    const [inputValue, setInputValue] = useState([]);
    const [inputLength, setInputLength] = useState(0);


    const checkGrammar = async(e) => {
        e.preventDefault();
        console.log(e.target.inputToChange.value);
        try {
            const res = await axios.get(`http://localhost:3000/api/grammar?text=${e.target.inputToChange.value}`);
            console.log(res.data.response.errors);
            setInputValue(res.data.response.errors);
        } catch (error) {
            console.error(error.message);
        }

        try {
            const res = await axios.get(`http://localhost:3000/api/spelling?text=${e.target.inputToChange.value}`);
            console.log(res.data);
        } catch (error) {
            console.error(error.message);
        }

    }

    const inputChange = (e) => {
        const arr = e.target.value.split(' ');
        console.log(arr);
    }

    const test = (e) => {
        e.preventDefault();
        console.log(e.target.textContent);
    }

    const test2 = (e) => {
        e.preventDefault();
        console.log(e.target.textContent);
    }



    return (
        <>
            <form onSubmit={checkGrammar} className='bg-gray-800 flex flex-col'>
                <h1
                    className=
                        {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                >
                    Formatea tu Texto!
                </h1>
                <div className='flex justify-around p-10'>
                    <textarea
                        className='h-[50vh] w-full p-5 rounded-xl max-w-xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                    ></textarea>
                    <ul className=''>
                        {inputValue.map((spellingErrors,index) => {
                            return(
                                <li key={index} className='p-5 text-lg'>
                                    <span onClick={test} id='badSpelling' className='text-red-600 font-bold p-2'>
                                        {spellingErrors.bad}
                                    </span>
                                    <span className='text-white p-2'>
                                        {spellingErrors.description.en}
                                    </span>
                                    <span className='text-white font-bold'>¿Quiso decir?</span>
                                    {spellingErrors.better.map((betterOptions,index)=>{
                                        return(
                                            <span onClick={test2} key={index} className='text-green-600 font-bold p-2'>
                                                {betterOptions}
                                            </span>
                                        )
                                    })}
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <button type='submite' className='bg-green-800 p-2 w-full max-w-lg mx-auto mb-5 rounded-lg text-white font-bold text-xl'>Check!</button>
            </form>
        </>
    );
}

export default CapitalizeInput;