import { useState } from "react";

export const FAQ= () => {
    const [useToggle, setUseToggle]= useState(null);

    const faqs= [
        {question: 'What is Bookmark?', answer:'Bookmark is a simple bookmark manager app to organise your favourite websites easily.'},
        {question:'How can I request a new browser?', answer:'You can request via our Contact Us section. We consider all requests seriously.'},
        {question:'Is there a mobile app?', answer:'Currently, we do not have a mobile app but we plan to launch it soon.'},
        {question:'What about other Chromium browsers?',answer:'Support for other Chromium browsers is under development and will be released soon.'}
    ]

    const Toggle= (index)=> {
        setUseToggle(useToggle===index ? null:index);
    }

    return (
        <div className="max-w-2xl mx-auto text-left">
            <div>
            {faqs.map((que,index)=>(
            <div key={index} className="border-b border-gray-300 pb-3">
            <div className="pb-3 hover:cursor-pointer flex justify-between group hover:text-red-400">
            <p className="text-[18px] text-gray-500 group-hover:text-red-400 pt-4">{que.question}</p>
            <button onClick={()=>Toggle(index)}>
                {useToggle===index ? '👍🏻':'👎🏼'}
            </button>
            </div>
            {useToggle===index && (
                <p className="text-gray-400">{que.answer}</p>
            )}
            </div>
            ) )}
            
            </div>
        </div>
    )
}