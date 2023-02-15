import { Dispatch, SetStateAction } from "react";
import Checkmark from "./Checkmark";
import Loader from "./Loader";

const TranslateResults = (
    { textToTranslate, setTextToTranslate, ready, loading }
        :
        { textToTranslate: string, setTextToTranslate: Dispatch<SetStateAction<string>>, ready: boolean, loading: boolean }
) => {

    if (loading) {
        return (
            <Loader />
        )
    }
    return (
        <>
            {ready ?
                (
                    textToTranslate ?
                        (
                            <textarea
                                className='h-[50vh] w-full p-2 rounded-xl max-w-2xl text-2xl bg-gray-200'
                                id='inputToChange'
                                name='inputToChange'
                                value={textToTranslate}
                                disabled
                            ></textarea>
                        )
                        :
                        (
                            <Checkmark />
                        )
                )
                :
                <></>
            }
        </>
    );
}

export default TranslateResults;