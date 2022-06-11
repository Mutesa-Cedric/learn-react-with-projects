
function About(props){
    return (

        <div className="flex flex-col items-start justify-center px-10 my-10">
            <h1 className={props.darkMode?"text-[#F5F5F5] text-2xl mb-2":"text-[#2B283] text-2xl mb-2"}>About</h1>
            <p className={props.darkMode?"text-[#DCDCDC]":"text-[#4A4E74]"}>I am a fullstack web developer with particular interest in backend development and automation. I always try my best to improve my knowledge and i love to learn new things.</p>
        </div>
    )
}

export default About;