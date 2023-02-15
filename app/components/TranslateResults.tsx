import { Dispatch, SetStateAction } from "react";
import Checkmark from "./Checkmark";
import Loader from "./Loader";

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
                                className='h-[50vh] w-full p-2 rounded-xl max-w-2xl text-2xl bg-gray-200'
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