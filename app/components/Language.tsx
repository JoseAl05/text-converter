import { Dispatch, SetStateAction } from 'react';

const Language = ({language,setLanguage}:{language:string,setLanguage:Dispatch<SetStateAction<string>>}) => {
    return (
        <select
            className="w-52 max-w-sm mx-auto p-2 rounded-lg"
            value={language}
            onChange={(e) => {
                setLanguage(e.target.value);
            }}
        >
            <option value='es-ES'>Español</option>
            <option value='en-US'>English</option>
        </select>
    );
}

export default Language;