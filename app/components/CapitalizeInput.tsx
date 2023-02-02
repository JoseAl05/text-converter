'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CapitalizeInput = () => {

    const [inputValue, setInputValue] = useState([]);
    const [originalString, setOriginalString] = useState('');
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);


    const checkGrammar = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:3000/api/grammar?text=${e.target.inputToChange.value}`);

            setInputValue(res.data.response.errors);
            setOriginalString(e.target.inputToChange.value);

            setReady(true);
            setLoading(false);

        } catch (error) {
            setError(error)
            setLoading(false);
        }

    }

    const inputChange = (e) => {
        const arr = e.target.value.split(' ');
        setOriginalString(e.target.value);
    }

    const test2 = (e, badWord) => {
        e.preventDefault();
        console.log(e.target.textContent);
        setOriginalString(originalString.replace(badWord, e.target.textContent));
    }

    if (loading) {
        return (
            <div className='bg-gray-800 flex flex-col items-center'>
                <h1
                    className=
                    {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                >
                    Formatea tu Texto!
                </h1>
                <div role="status">
                    <svg aria-hidden="true" className="inline-block w-20 h-20 mr-2 text-gray-200 animate-spin fill-green-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        )
    }
    if (ready) {
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
                    <div className='flex justify-around items-center p-10'>
                        <textarea
                            className='h-[50vh] w-full p-5 rounded-xl max-w-xl'
                            id='inputToChange'
                            name='inputToChange'
                            onChange={inputChange}
                            value={originalString}
                        ></textarea>
                        <ul className=''>
                            {ready ?


                                (
                                    inputValue.length !== 0 ?
                                        (
                                            inputValue.map((spellingErrors, index) => {
                                                return (
                                                    <li key={index} className='p-5 text-lg'>
                                                        <span id='badSpelling' className='text-red-600 font-bold p-2'>
                                                            {spellingErrors.bad}
                                                        </span>
                                                        <span className='text-white p-2'>
                                                            {spellingErrors.description.en}
                                                        </span>
                                                        <span className='text-white font-bold'>¿Quiso decir?</span>
                                                        {spellingErrors.better.map((betterOptions, index) => {
                                                            return (
                                                                <span onClick={(e) => test2(e, spellingErrors.bad)} key={index} className='text-green-600 font-bold p-2 cursor-pointer bg-white mx-2 transition-all ease-in-out hover:bg-gray-900 hover:text-white'>
                                                                    {betterOptions}
                                                                </span>
                                                            )
                                                        })}
                                                    </li>
                                                )
                                            })
                                        )
                                        :
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                                width="100" height="100"
                                                viewBox="0 0 48 48"
                                                className=''>
                                                <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                                            </svg>
                                        )
                                )
                                :
                                <></>
                            }
                        </ul>
                    </div>
                    <button type='submit' className='bg-green-800 p-2 w-full max-w-lg mx-auto mb-5 rounded-lg text-white font-bold text-xl'>Check!</button>
                </form>
            </>
        )
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
                <div className='flex justify-around items-center p-10'>
                    <textarea
                        className='h-[50vh] w-full p-5 rounded-xl max-w-xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                        value={originalString}
                    ></textarea>
                </div>
                <button type='submit' className='bg-green-800 p-2 w-full max-w-lg mx-auto mb-5 rounded-lg text-white font-bold text-xl'>Check!</button>
            </form>
        </>
    );
}

export default CapitalizeInput;