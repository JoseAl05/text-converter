'use client'

import React, { useState } from 'react';

const CapitalizeInput = () => {

    const [inputValue, setInputValue] = useState('');
    const [inputLength, setInputLength] = useState(0);

    //Falta dinamizar el control del formato del input ingresado por el usuario.
    //Por ej. Input:"Prueba de texto.  Prueba de texto".
    //El texto no se formateará, ya que hay 2 espacios despues del punto.
    //Solo está validado si existe 1 solo espacio.
    const inputChange = (e) => {

        //Se obtienen todas las palabras luego de un punto.
        const arr = e.target.value.split('.');
        for(let i = 0; i<arr.length;i++){

            //Se valida si el primer caracter de la palabra extraida despues de un punto contiene un espacio.
            if(arr[i].charAt(0) === " "){
                arr[i] = `${arr[i].charAt(1).toUpperCase()}${arr[i].slice(2)}`;
            }else{
                arr[i] = `${arr[i].charAt(0).toUpperCase()}${arr[i].slice(1)}`;
            }
        }
        setInputValue(arr.join(". "));
    }
    console.log(inputValue);


    return (
        <>
        <form>
            <textarea
                className='absolute top-[40%] left-[40%] translate-x-[50%] translate-y-[50%]'
                id='inputToChange'
                name='inputToChange'
                onChange={inputChange}
            ></textarea>
            <div className='bg-gray-600 w-56 h-52 absolute top-[35%] left-[60%] translate-x-[70%] translate-y-[50%]'>{inputValue}</div>
            <button
                type='submit'
                className='text-white bg-green-800 p-2 absolute top-[60%] left-[40%] translate-x-[50%] translate-y-[50%]'
            >Change</button>
        </form>
        </>
    );
}

export default CapitalizeInput;