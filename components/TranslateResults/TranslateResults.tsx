import { Dispatch, SetStateAction } from "react";
import Checkmark from "../Checkmark/Checkmark";
import Loader from "../Loader/Loader";

const TranslateResults = (
    { textTranslated, setTextTranslated, ready, loading }
        :
        { textTranslated: string, setTextTranslated: Dispatch<SetStateAction<string>>, ready: boolean, loading: boolean }
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
                    textTranslated ?
                        (
                            <textarea
                                className='h-[25vh] md:h-[30vh] lg:h-[50vh] w-[20rem] md:w-[35rem] lg:w-[40rem] p-2 lg:ml-5 rounded-xl max-w-2xl text-base md:text-lg lg:text-2xl bg-gray-200'
                                id='inputToChange'
                                name='inputToChange'
                                value={textTranslated}
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