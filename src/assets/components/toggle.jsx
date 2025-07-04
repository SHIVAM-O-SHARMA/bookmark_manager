import { useState } from "react";

export const FAQ= () => {
    const [useToggle, setuseToggle]= useState(null);

    const faq= [
        {question: 'What is Bookmark?', answer: 'Bookmark is a simple bookmark manager app to organise your favourite websites easily.'},
        {question:'How can I request a new browser?', answer:'You can request via our Contact Us section. We consider all requests seriously.'},
        {question: 'Is there a mobile app?', answer:'Currently, we do not have a mobile app but we plan to launch it soon.'  },
        {question: 'What about other Chromium browsers?', answer: 'Support for other Chromium browsers is under development and will be released soon.'}
    ];
     
   const toggle = (index) => {
    setuseToggle(useToggle===index ? null:index);
    console.log(useToggle);
   }

   return (
    <div className="max-w-2xl mx-auto text-left">
        <div>
            {faq.map((que,index) => (
            <div key={index} className="pt-2 pb-2 border-b border-gray-300">
            <div className="flex items-center justify-between group hover:text-red-400">
            <p className="text-gray-500 text-[18px] group-hover:text-red-400 hover:cursor-pointer pt-4"> {que.question} </p>
            <button className='text-[20px] hover:cursor-pointer' onClick={()=>toggle(index)}> 
                {useToggle === index ? '👍🏻' : '👎🏼'}
            </button>
            </div>
                {useToggle=== index && (
                <p className="text-gray-400 text-[16px] pt-2">{que.answer}</p> )}
                
               </div>
            ))}
        </div>

    </div>
   )
}