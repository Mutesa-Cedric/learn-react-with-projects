import Troll from '../images/Troll Face.png'
let Navbar=()=>{
    return (

        <div className="bg-gradient-to-r from-[#672280] to-[#A626D3] w-screen h-12 flex items-center text-white py-10 jusitify-between">
                <div className="flex items-center">
                    <img src={Troll} className="w-14 mx-4 h-auto py-2 "/>
                    <p className="text-3xl capitalize">meme generator</p>
                </div>  

                <div>

                </div>   
        </div>
    )
}

export default Navbar;