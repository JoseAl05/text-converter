'use client'

import React, { useState, useEffect, FormEvent, SetStateAction, Dispatch } from 'react';
import axios, { AxiosResponse } from 'axios';
import { GrammarStatus } from '@/interfaces/GrammarStatus';
import { Errors } from '@/interfaces/GrammarStatus';


import GrammarResults from '../GrammarResults/GrammarResults';
import Loader from '../Loader/Loader';
import Language from '../Language/Language';

const Grammar = ({ activeTabId, setActiveTabId }:{activeTabId:number,setActiveTabId:Dispatch<SetStateAction<number>>}) => {

    const URL = process.env.NODE_ENV === 'production' ? 'https://text-converter-one.vercel.app/api/grammar' : 'http://localhost:3000/api/grammar';

    const [inputValue, setInputValue] = useState<Errors[]>([]);
    const [originalString, setOriginalString] = useState('');
    const [language, setLanguage] = useState('es-ES');

    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);


    /*
        Function form "onSubmit" that calls the api
        Production URL  = https://text-converter-one.vercel.app/api/grammar
        Dev URL = http://localhost:3000/api/grammar
    */

    const checkGrammar = async (e) => {
        e.preventDefault();
        setLoading(true);
        const query = e.target ? e.target.inputToChange.value : null;

        await axios.get<GrammarStatus>(`${URL}?text=${query ? query : null}&lang=${language}`).then((res) => {

            setInputValue(res.data.response.errors);
            setOriginalString(e.target.inputToChange.value);

            setReady(true);
            setLoading(false);

        }).catch(error => {

            console.log(error);
            setLoading(false);

        })




    }


    const inputChange = (e) => {
        setOriginalString(e.target.value);
    }



    if (ready) {
        return (
            <div
                id={`panel-${1}`}
                role="tabpanel"
                tabIndex={activeTabId === 1 ? 0 : -1}
                aria-labelledby={`tab-${1}`}
                aria-hidden={activeTabId !== 1}
                hidden={activeTabId !== 1}
                className='w-full'
            >
                <form onSubmit={checkGrammar} className='bg-gray-900 flex flex-col items-center h-screen py-32'>
                    <h1
                        className=
                        {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                    >
                        Formatea tu Texto!
                    </h1>
                    <Language language={language} setLanguage={setLanguage} />
                    <div className='flex flex-col md:flex md:flex-col lg:flex-row lg:justify-around items-center py-10'>
                        <textarea
                            className='h-[25vh] md:h-[30vh] lg:h-[50vh] w-[25rem] md:w-[35rem] lg:w-[40rem] p-5 rounded-xl lg:max-w-2xl text-base md:text-lg lg:text-2xl'
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
                        {`bg-green-800 p-2 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-5
                        rounded-lg text-white font-bold text-base md:text-lg lg:text-2xl
                        transition-all ease-in-out duration-150
                        lg:hover:scale-105`
                        }
                    >
                        Buscar Errores
                    </button>
                </form>
            </div>
        )
    }



    return (
        <div
            id={`panel-${1}`}
            role="tabpanel"
            tabIndex={activeTabId === 1 ? 0 : -1}
            aria-labelledby={`tab-${1}`}
            aria-hidden={activeTabId !== 1}
            hidden={activeTabId !== 1}
            className='w-full'
        >
            <form onSubmit={checkGrammar} className='bg-gray-900 flex flex-col h-screen py-32'>
                <h1
                    className=
                    {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                >
                    Formatea tu Texto!
                </h1>
                <Language language={language} setLanguage={setLanguage} />
                <div className='flex flex-col md:flex md:flex-col lg:flex-row lg:justify-around items-center py-10'>
                    <textarea
                        className='h-[25vh] md:h-[30vh] lg:h-[50vh] w-[25rem] md:w-[35rem] lg:w-[40rem] p-5 rounded-xl max-w-2xl text-2xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                        value={originalString}
                        required
                    ></textarea>
                    {loading ? <Loader /> : <></>}
                </div>
                <button
                    type='submit'
                    className=
                    {`bg-green-800 p-2 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto mb-5
                    rounded-lg text-white font-bold text-base md:text-lg lg:text-2xl
                    transition-all ease-in-out duration-150
                    lg:hover:scale-105`
                    }
                >
                    Buscar Errores
                </button>
            </form>
        </div>
    );
}

export default Grammar;