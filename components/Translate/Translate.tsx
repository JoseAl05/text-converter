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
            >
                <form onSubmit={translateText} className='bg-gray-800 flex flex-col h-screen py-24'>
                    <h1
                        className=
                        {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5 sm:text-2xl`}
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
                            className='h-[50vh] w-full p-5 rounded-xl max-w-2xl text-2xl'
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
                        {`bg-green-800 p-2 w-full max-w-lg mx-auto mb-5
                            rounded-lg text-white font-bold text-2xl
                            transition-all ease-in-out duration-150
                            hover:scale-105`
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
        >
            <form onSubmit={translateText} className='bg-gray-900 flex flex-col h-screen py-24'>
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
                        className='h-[50vh] w-full p-5 rounded-xl max-w-2xl text-2xl'
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
                    {`bg-green-800 p-2 w-full max-w-lg mx-auto mb-5
                        rounded-lg text-white font-bold text-2xl
                        transition-all ease-in-out duration-150
                        hover:scale-105`
                    }
                >
                    Traducir
                </button>
            </form>
        </div>
    );
}

export default Translate;