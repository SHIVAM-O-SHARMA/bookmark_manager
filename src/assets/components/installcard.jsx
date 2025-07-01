import Chromeimg from '../images/Chrome.png'
import Firefoximg from '../images/Firefox.png'
import Operaimg from '../images/Opera.png'

function Addcard({image,title,description}){
    return(
        <div className='p-9 text-center rounded-md shadow-md'>
         <img className='w-50' src={image} alt="img" />
         <h1 className="font-bold text-[20px] pt-2">Add to {title}</h1>
         <p className='text-[#9699a6] '>Minimum Version {description}</p>
         <p className='text-[#9699a6] pb-3'>.  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .  .</p>
         <button className="bg-[#5367df] text-white rounded-md shadow-md hover:bg-white hover:border-2 border-[#5367df] hover:text-[#5367df] transition-colors duration-200 px-8 py-4">Add & Install Extension</button>
        </div>
    )
}


export const InstallCard= ()=> {
    return (
        <div className='flex justify-center space-x-14'>
            <Addcard
            image={Chromeimg}
            title={'Chrome'}
            description={'62'}/>
            <Addcard
            image={Firefoximg}
            title={'Firefox'}
            description={'55'}/>
            <Addcard
            image={Operaimg}
            title={'Opera'}
            description={'46'}/>
        </div>
    )
}