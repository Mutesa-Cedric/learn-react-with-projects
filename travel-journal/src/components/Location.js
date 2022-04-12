import Img from "../images/australia.jfif";
let Location=(props)=>{
    return (
        <div className="flex border-b-2 pb-8 items-center my-12 border-gray-200 ">
            {/* <img src={props.data.imageUrl} alt="location" className="w-48 mr-20 h-64 object-cover rounded-xl"></img> */}
            {/* used this constant image bcz of net */}
           <img src={Img} alt="location" className="w-48 mr-20 h-64 object-cover rounded-xl"></img>
            <div className=" flex flex-col ">
                <div className="flex items-center my-1">
                    <svg width="20" height="20" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.57866 5.25002C2.65532 5.25002 1.90837 4.50221 1.90837 3.57965C1.90837 2.65757 2.65532 1.90911 3.57866 1.90911C4.50167 1.90911 5.24927 2.65757 5.24927 3.57965C5.24927 4.50221 4.50167 5.25002 3.57866 5.25002ZM3.48394 0C1.54227 0 0 1.63678 0 3.65569C0 6.40791 2.95078 9.25191 2.95078 9.25191C3.34777 9.62783 3.59437 9.65847 4.01646 9.25191C4.01646 9.25191 7 6.40791 7 3.65569C7 1.63678 5.42544 0 3.48394 0Z" fill="#F55A5A"/>
                    </svg>
                    <p className="text-xl uppercase ml-1 mr-4">{props.data.location}</p>
                    <a href={props.data.googleMapsUrl} className="border-b-2 text-lg text-gray-500">view on google maps</a>
                </div>
                <h1 className="mb-7 text-3xl font-bold"> {props.data.title}</h1>
                <div className="mb-4 text-lg font-bold text-[#2B283A]">
                    <span>{props.data.startDate}-</span>
                    <span>{props.data.endDate}</span>
                </div>
                <p className="text-md text-gray-700">{props.data.description}</p>
            </div>
        </div>
    )
}

export default Location;