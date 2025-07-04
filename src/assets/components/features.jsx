import { useState } from 'react';
import feature1 from '../images/feature1.png';
import feature2 from '../images/feature2.png';
import feature3 from '../images/feature3.png';

const Features= ({image,title,description})=> {
    return <div className='flex pt-15 space-x-18'>
    <div><img src={image} className='max-w-160 h-115' /></div>
    <div>
      <h1 className='font-bold text-[31px] pb-4'>{title}</h1>
      <p className='text-gray-500 max-w-120'>{description}</p>
      <button className='w-30 h-12 my-9 rounded-md shadow-md text-white bg-[#5367df] hover:bg-white hover:text-[#5367df] hover:border-2 border-[#5367df] hover:cursor-pointer transition-all duration-200'>More Info</button>
    </div>
   </div>
}

export const FeatureCard= ()=> {
   const [useFeature, setUseFeature]= useState(1);

   function Toggle(id){
    setUseFeature(id);
   }

   return <div>
    <div className='space-x-14 text-center pt-22 text-[18px] text-gray-500'>
      <button onClick={()=>Toggle(1)} className='hover:text-red-400 hover:cursor-pointer'>Simple Bookmarking</button>
      <button onClick={()=>Toggle(2)} className='hover:text-red-400 hover:cursor-pointer'>Speddy Searching</button>
      <button onClick={()=>Toggle(3)} className='hover:text-red-400 hover:cursor-pointer'>Easy Sharing</button>
    </div>

      <div>
        {useFeature==1 && <Features
            image={feature1}
            title={'Bookmark in one click'}
            description={'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'}
            />}

        {useFeature==2 && <Features
            image={feature2}
            title={'Intelligent search'}
            description={'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'}
            />}

        {useFeature==3 && <Features
            image={feature3}
            title={'Share your bookmarks'}
            description={'Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button.'}
            />}        
        </div>
   </div>

 }
