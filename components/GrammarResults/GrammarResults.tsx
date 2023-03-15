import { Dispatch, SetStateAction } from 'react';
import { Errors } from '@/interfaces/GrammarStatus';
import Checkmark from '../Checkmark/Checkmark';
import Loader from '../Loader/Loader';

const GrammarResults = (
    {originalString,setOriginalString,inputValue,ready,loading}
    :
    {originalString:string,setOriginalString:Dispatch<SetStateAction<string>>,inputValue:Errors[],ready:boolean,loading:boolean}
    ) => {

    const replaceBadWord = (e, badWord:string) => {
        e.preventDefault();
        setOriginalString(originalString.replace(badWord, e.target.textContent));
    }

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <ul className='lg:pl-40'>
            {ready ?
                (
                    inputValue.length !== 0 ?
                        (
                            inputValue.map((spellingErrors, index) => {
                                return (
                                    <li key={index} className='p-5 text-base md:text-base lg:text-lg max-w-md'>
                                        <span id='badSpelling' className='text-red-600 font-bold p-2'>
                                            {spellingErrors.bad}
                                        </span>
                                        <span className='text-white p-2'>
                                            {spellingErrors.description.en}
                                        </span>
                                        <span className='text-white font-bold'>¿Quiso decir?</span>
                                        <div className='grid grid-cols-2 max-w-md lg:flex lg:justify-center'>
                                            {spellingErrors.better.map((betterOptions:string, index:number) => {
                                                return (
                                                    <span
                                                        onClick={(e) => replaceBadWord(e, spellingErrors.bad)}
                                                        key={index}
                                                        className={
                                                            `text-center text-green-400 font-bold p-1 cursor-pointer bg-white
                                                                            mx-3 transition-all ease-in-out
                                                                            hover:bg-gray-900 hover:text-white`
                                                        }
                                                    >
                                                        {betterOptions}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </li>
                                )
                            })
                        )
                        :
                        (
                            <Checkmark />
                        )
                )
                :
                <></>
            }
        </ul>
    );
}

export default GrammarResults;