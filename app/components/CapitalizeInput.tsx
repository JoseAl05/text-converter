'use client'

import React, { useState } from 'react';

const CapitalizeInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputLength, setInputLength] = useState(0);

    //Falta dinamizar el control del formato del input ingresado por el usuario.
    //Por ej. Input:"Prueba de texto.  prueba de texto".
    //El texto no se formateará, ya que hay 2 espacios despues del punto.
    //Solo está validado si existe 1 solo espacio o si no existe espacio entre el punto y el inicio de otra oración.
    const inputChange = (e) => {

        //Se obtienen todas las palabras luego de un punto.
        const arr = e.target.value.split('.');
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            //Se valida si el primer caracter de la palabra extraida despues de un punto, contiene un espacio.
            if (arr[i].charAt(0) === " ") {
                arr[i] = `${arr[i].charAt(1).toUpperCase()}${arr[i].slice(2)}`;
            } else {
                arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`;
            }
        }
        setInputValue(arr.join(". "));
    }


    return (
        <>
            <form className='bg-gray-800'>
                <h1
                    className=
                        {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-purple-700 via-blue-500 to-green-500 bg-clip-text
                        p-5`}
                >
                    Formatea tu Texto!
                </h1>
                <div className='flex justify-around p-10'>
                    <textarea
                        className='h-[50vh] w-full p-5 rounded-xl max-w-xl'
                        id='inputToChange'
                        name='inputToChange'
                        onChange={inputChange}
                    ></textarea>
                    <textarea className='rounded-xl p-5 bg-gray-400 h-[50vh] w-full max-w-xl mx-10' value={inputValue} disabled></textarea>
                </div>
            </form>
        </>
    );
}

export default CapitalizeInput;