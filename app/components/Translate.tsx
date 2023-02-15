'use client'

import React, { useState, useEffect, FormEvent } from 'react';
import axios, { AxiosResponse } from 'axios';
import Language from './Language';
import TranslateResults from './TranslateResults';
import Loader from './Loader';

const Translate = () => {

    const URL = process.env.NODE_ENV === 'production' ? 'https://text-converter-one.vercel.app/api/translate' : 'http://localhost:3000/api/translate';

    const [textTranslated, setTextTranslated] = useState('');
    const [originalText,setOriginalText] = useState('');
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

        const query = e.target ? e.target.inputToChange.value : null;

        await axios.get(`${URL}?language=${language ? language : null}&text=${query}`).then((res: any) => {

            res.data.choices.map((choices:any) => {
                setTextTranslated(choices.text);
            })
            setOriginalText(e.target.inputToChange.value);
            setReady(true);
            setLoading(false);

        }).catch(error => {

            console.log(error);
            setLoading(false);

        })
    }

    if (ready) {
        return (
            <>
                <form onSubmit={translateText} className='bg-gray-800 flex flex-col py-20'>
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
                        <TranslateResults
                            textToTranslate={textToTranslate}
                            setTextToTranslate={setTextToTranslate}
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
            </>
        )
    }

    return (
        <>
            <form onSubmit={translateText} className='bg-gray-800 flex flex-col py-20'>
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
        </>
    );
}

export default Translate;