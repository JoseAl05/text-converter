import Checkmark from './Checkmark';
import Loader from './Loader';

const GrammarResults = ({originalString,setOriginalString,inputValue,ready,loading}) => {

    const replaceBadWord = (e, badWord) => {
        e.preventDefault();
        setOriginalString(originalString.replace(badWord, e.target.textContent));
    }

    if (loading) {
        return (
            <Loader />
        )
    }

    return (
        <ul>
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
                                                <span
                                                    onClick={(e) => replaceBadWord(e, spellingErrors.bad)}
                                                    key={index}
                                                    className={
                                                        `text-green-400 font-bold p-1 cursor-pointer bg-white
                                                                        mx-3 transition-all ease-in-out
                                                                        hover:bg-gray-900 hover:text-white`
                                                    }
                                                >
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