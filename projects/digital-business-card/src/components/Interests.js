
function Interests(props){
    return (

        <div className="flex flex-col items-start justify-center px-10 my-10">
            <h1 className={props.darkMode?"text-[#F5F5F5] text-2xl mb-2":"text-[#2B283] text-2xl mb-2"}>Interests</h1>
            <p className={props.darkMode?"text-[#DCDCDC]":"text-[#4A4E74]"}>A football fan espcially Chelsea and real-madrid. Trap music lover. Reader. Internet fanatic. Action Movies fanatic. Talking to others.</p>
        </div>
    )
}

export default Interests;