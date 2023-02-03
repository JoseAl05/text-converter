'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';


import GrammarResults from './GrammarResults';
import Loader from './Loader';

const Grammar = () => {

    const URL = 'http://localhost:3000/api/grammar'
    const [inputValue, setInputValue] = useState([]);
    const [originalString, setOriginalString] = useState('');
    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);


    const checkGrammar = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.get(`${URL}?text=${e.target.inputToChange.value}`);

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



    if (ready) {
        return (
            <>
                <form onSubmit={checkGrammar} className='bg-gray-900 flex flex-col'>
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
                            className='h-[50vh] w-full p-5 rounded-xl max-w-2xl text-2xl'
                            id='inputToChange'
                            name='inputToChange'
                            onChange={inputChange}
                            value={originalString}
                            required
                        ></textarea>
                        <GrammarResults
                            originalString={originalString}
                            setOriginalString={setOriginalString}
                            inputValue={inputValue}
                            ready={ready}
                            loading={loading}
                        />
                    </div>
                    <button
                        type='submit'
                        className=
                        {`bg-green-800 p-2 w-full max-w-lg mx-auto mb-5
                            rounded-lg text-white font-bold text-2xl
                            transition-all ease-in-out duration-150
                            hover:scale-105`
                        }
                    >
                        Buscar Errores
                    </button>
                </form>
            </>
        )
    }



    return (
        <>
            <form onSubmit={checkGrammar} className='bg-gray-900 flex flex-col'>
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
                        className='h-[50vh] w-full p-5 rounded-xl max-w-2xl text-2xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                        value={originalString}
                        required
                    ></textarea>
                    {loading ? <Loader/> : <></>}
                </div>
                <button
                    type='submit'
                    className=
                    {`bg-green-800 p-2 w-full max-w-lg mx-auto mb-5
                        rounded-lg text-white font-bold text-2xl
                        transition-all ease-in-out duration-150
                        hover:scale-105`
                    }
                >
                    Buscar Errores
                </button>
            </form>
        </>
    );
}

export default Grammar;