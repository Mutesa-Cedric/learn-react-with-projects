
let LostPopup=(props)=>{
    return (
    <div>
        <div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="logout-modal" role="dialog" aria-modal="true">
            <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-60 transition-opacity" aria-hidden="true"></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-center sm:justify-start sm:w-3/4 sm:mx-auto">
                            <div className="mt-3 mb-2 text-start inline-flex flex-col sm:mt-2 sm:text-center">
                                <h3 className="leading-6 text-4xl capitalize mb-6 font-medium text-[#2B283A]">{props.timeOut===true?"timeout!":"out of rolls"}</h3>
                                <div className="mt-2 inline-flex flex-col items-start justify-center">
                                   <p className="text-xl text-[#4A4E74]">sorry! {props.timeOut===true?"you are out of time.":"you have no rolls left."} please try again.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="mt-3 mb-4 w-full inline-flex justify-center animate-bounce rounded-md border border-gray-300 shadow-sm px-8    py-2 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:mx-auto sm:w-auto sm:text-lg bg-[#5035FF]"
                            onClick={props.reset}>retry</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default LostPopup;