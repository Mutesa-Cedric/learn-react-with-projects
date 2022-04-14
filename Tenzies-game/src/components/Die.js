let Die=(props)=>{

    return (

        <div className={props.isHeld?"w-16 h-16 shadow-lg my-4 bg-[#59E391] text-2xl flex items-center mx-auto justify-center cursor-pointer rounded-lg font-medium":"w-16 h-16 shadow-lg my-4 text-2xl flex items-center mx-auto justify-center cursor-pointer rounded-lg font-medium"} onClick={props.holdDice}>
            <h1>{props.value}</h1>
        </div>
    )
}

export default Die;