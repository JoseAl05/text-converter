const HowUse = () => {
    return (
        <div className="bg-gray-800 flex flex-col">
            <h1
                className=
                {`text-5xl text-center text-transparent font-bold tracking-wider
                        bg-gradient-to-r from-green-500  via-blue-500 to-purple-700 bg-clip-text
                        p-5`}
            >
                Como usar
            </h1>
            <div className="flex justify-start pt-20">
                <p className="text-center text-white text-3xl mx-40">Escribe o pega el texto el cual quieres verificar</p>
            </div>
            <div className="flex justify-end pt-40">
                <p className="text-center text-white text-3xl mx-40">Haz &apos;Click&apos; en el boton &apos;Buscar Errores&apos;</p>
            </div>
            <div className="flex justify-start pt-40">
                <p className="text-center text-white text-3xl mx-20 w-1/3">
                    La posible correción se muestra en color verde con fondo blanco.
                    Haz &apos;Click&apos; en la palabra para corregir el error.
                    Los cambios se verán reflejados en la casilla de la izquierda.
                </p>
            </div>
            <div className="flex justify-end pt-40 pb-20">
                <p className="text-center text-white text-3xl mx-20 w-1/3">
                    Vuelve hacer &apos;Click&apos; en el boton &apos;Buscar Errores&apos;
                    para verificar si el texto está completamente corregido o si contiene más errores de ortografía.
                </p>
            </div>
        </div>
    );
}

export default HowUse;