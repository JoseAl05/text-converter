const Checkmark = () => {
    return (
        <div className='flex flex-col items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                width="100" height="100"
                viewBox="0 0 48 48"
                className=''>
                <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
            </svg>
            <small className='text-[#43A047]'>No hay mas correciones :D</small>
        </div>
    );
}

export default Checkmark;