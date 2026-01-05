"use client"; // Added this for best practice

import { CheckIcon } from '@heroicons/react/solid' // This icon isn't used here, but was in your original file
import { useEffect } from 'react'
import AnimScroll from "./animScroll"
import InfiniteScroll from './InfiniteScroll';

function Scroll() {

    // The 'data' array (not used by the scroll, but part of the original file)
    let data = [
        {
            id: 1,
            title: 'Paid Invoice',
            description: 'With the paid invoice you can check any monthly bills that have been paid by you'
        },
        {
            id: 2,
            title: 'Monthly Progress',
            description: 'The Monthly Progress Feature in the invoice can see your progress in paying bills each month'
        },
        {
            id: 3,
            title: 'Modern UI',
            description: 'With the modern user interface it makes it easier for you to make payments due to its simplicity'
        }
    ]

    
    // THIS IS THE FIX: 
    // This variable was mistakenly removed in my last response. 
    // It is now back where it belongs, inside the 'Scroll' component.
    const infiniteScrollItems = [
        
        { content: <div className="p-4 bg-gray-700 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Automate homework tracking</div> },
        { content: <div className="p-4 bg-blue-600 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Connect learning tools</div> },
        { content: <div className="p-4 bg-green-500 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Build portfolio projects</div> },
        { content: <div className="p-4 bg-purple-600 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Learn valuable tech skills</div> },
        { content: <div className="p-4 bg-red-500 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Automate grading and attendance</div> },
        { content: <div className="p-4 bg-yellow-500 text-white rounded-lg mb-4 shadow-lg w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">Save 5+ hours per week</div> },
        
    ];


    useEffect(() => {
        
        AnimScroll(".title2", 100, ".title2")
    }, []) 

    return (
        // This retains our theme change from rose-950
        <div className="w-full h-[1000px] text-white relative overflow-hidden bg-rose-950"> 
            <div className="relative z-10 w-full px-0 md:px-32 lg:px-12 xl:px-0 mx-auto h-full flex flex-col justify-center items-center">
                
                <h2 className="title2 text-3xl md:text-8xl text-center font-semibold leading-tight md:leading-relaxed mb-10 mt-6 text-gray-900">
                Built for education
                </h2>

                <div style={{ height: 'calc(100% - 100px)' /* Adjust 100px based on title height */, width: '100%' }} className="flex flex-col items-center">
                    <InfiniteScroll
                        items={infiniteScrollItems} // This will now work
                        isTilted={true} 
                        tiltDirection='left'
                        autoplay={true}
                        autoplaySpeed={0.03}
                        autoplayDirection="down"
                        pauseOnHover={true}
                        gradientColor="#4c0519" // This prop also stays
                    />
                </div>
            </div>
        </div>
    )
}

export default Scroll;