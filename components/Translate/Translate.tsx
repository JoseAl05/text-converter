'use client'

import React, { useState, useEffect, FormEvent, SetStateAction, Dispatch } from 'react';
import axios, { AxiosResponse } from 'axios';
import Language from '../Language/Language';
import TranslateResults from '../TranslateResults/TranslateResults';
import Loader from '../Loader/Loader';

const Translate = ({ activeTabId, setActiveTabId }:{activeTabId:number,setActiveTabId:Dispatch<SetStateAction<number>>}) => {

    const URL = process.env.NODE_ENV === 'production' ? 'https://text-converter-one.vercel.app/api/translate' : 'http://localhost:3000/api/translate';

    const [textTranslated, setTextTranslated] = useState('');
    const [originalText, setOriginalText] = useState('');
    const [language, setLanguage] = useState('English');

    const [loading, setLoading] = useState(false);
    const [ready, setReady] = useState(false);
    const [error, setError] = useState(null);

    const inputChange = (e: any) => {
        setOriginalText(e.target.value);
    }

    const translateText = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        await axios.get(`${URL}?language=${language ? language : null}&text=${originalText ? originalText : null}`).then((res: any) => {

            res.data.choices.map((choices: any) => {
                setTextTranslated(choices.text);
            })
            setReady(true);
            setLoading(false);

        }).catch(error => {

            console.log(error);
            setLoading(false);

        })
    }

    if (ready) {
        return (
            <div
                id={`panel-${2}`}
                role="tabpanel"
                tabIndex={activeTabId === 2 ? 0 : -1}
                aria-labelledby={`tab-${2}`}
                aria-hidden={activeTabId !== 2}
                hidden={activeTabId !== 2}
                className='w-full'
            >
                <form onSubmit={translateText} className='bg-gray-900 flex flex-col items-center h-screen py-32'>
                    <h1
                        className=
                        {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                    >
                        Traduce tu texto!
                    </h1>
                    <select
                        className="w-52 max-w-sm mx-auto p-2 rounded-lg"
                        value={language}
                        onChange={(e) => {
                            setLanguage(e.target.value);
                        }}
                    >
                        <option value='English'>English</option>
                        <option value='Spanish'>Spanish</option>
                        <option value='French'>French</option>
                        <option value='Portuguese'>Portuguese</option>
                    </select>
                    <div className='flex flex-col md:flex md:flex-col lg:flex-row lg:justify-around items-center py-10'>
                        <textarea
                            className='h-[25vh] md:h-[30vh] lg:h-[50vh] w-[20rem] md:w-[35rem] lg:w-[40rem] p-5 rounded-xl lg:max-w-2xl text-base md:text-lg lg:text-2xl'
                            id='inputToChange'
                            name='inputToChange'
                            onChange={inputChange}
                            value={originalText}
                            required
                        ></textarea>
                        <TranslateResults
                            textTranslated={textTranslated}
                            setTextTranslated={setTextTranslated}
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
                        Traducir
                    </button>
                </form>
            </div>
        )
    }

    return (
        <div
            id={`panel-${2}`}
            role="tabpanel"
            tabIndex={activeTabId === 2 ? 0 : -1}
            aria-labelledby={`tab-${2}`}
            aria-hidden={activeTabId !== 2}
            hidden={activeTabId !== 2}
            className='w-full'
        >
            <form onSubmit={translateText} className='bg-gray-900 flex flex-col items-center h-screen py-32'>
                <h1
                    className=
                    {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                >
                    Traduce tu texto!
                </h1>
                <select
                    className="w-52 max-w-sm mx-auto p-2 rounded-lg"
                    value={language}
                    onChange={(e) => {
                        setLanguage(e.target.value);
                    }}
                >
                    <option value='English'>English</option>
                    <option value='Spanish'>Spanish</option>
                    <option value='French'>French</option>
                    <option value='Portuguese'>Portuguese</option>
                </select>
                <div className='flex justify-around items-center p-10'>
                    <textarea
                        className='h-[25vh] md:h-[30vh] lg:h-[50vh] w-[25rem] md:w-[35rem] lg:w-[45rem] p-5 rounded-xl lg:max-w-2xl text-base md:text-lg lg:text-2xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                        value={originalText}
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
                    Traducir
                </button>
            </form>
        </div>
    );
}

export default Translate;