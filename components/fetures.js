import { CheckIcon } from "@heroicons/react/solid"
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Fetures() {

    let dataFetures = [
        {
            title: 'Visual Workflow Builder',
            description: 'Drag-and-drop interface. Build complex automations without writing a single line of code.',
            include: ['Active monitoring', 'Manage Money', 'Unlimited Customer Service']
        },
        {
            title: '1000+ Integrations',
            description: 'Connect with Google Classroom, Slack, email, calendars, and all your favorite apps easily.',
            include: ['Archieve chat', 'Manage Service', 'Chat support']
        },
        {
            title: 'AI-Powered Automation',
            description: 'Smart agent building with natural language. Just describe what you want, and AI builds it for you.',
            include: ['Active monitoring', 'Manage Money', 'Unlimited Customer Service']
        }
    ]

    useEffect(()=>{
        AnimScroll(".title3",100,".title3")
        AnimScroll("#price-0",200,".content2")
        AnimScroll("#price-1",300,".content2")
        AnimScroll("#price-2",400,".content2")
    })


    return (
        <div id="fetures" className="mt-28 lg:mt-52 w-full xl:w-container mx-auto px-10 xl:px-0">
            <div className="title3 w-full lg:w-7/12 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-semibold leading-tight md:leading-relaxed text-gray-900">Everything you need to automate your work</h2> {/* Changed text */}
                <p className="mt-5 w-3/4 mx-auto text-gray-700 text-base">Powerful features designed specifically for students and teachers</p> {/* Changed text */}
            </div>
            <div className="flex flex-wrap xl:flex-nowrap justify-center gap-10 mt-16">
                {dataFetures.map((data,i) => {
                    return (
                        // Updated card style for light theme
                        <div id={"price-"+i} className="group bg-white/60 text-gray-800 border border-pink-200/50 hover:bg-white rounded-xl p-10 flex flex-col justify-between h-card shadow-sm">
                            <div className="">
                                <h3 className="text-3xl font-medium">{data.title}</h3>
                                
                                <p className="content2 mt-5 text-base text-gray-700">{data.description}</p> {/* Changed text */}
                                {data.include.map(inc => {
                                    return (
                                        <div className='flex items-start gap-5 mt-7 text-base'>
                                            {/* This style is good, pink-600 is a nice accent */}
                                            <CheckIcon className='w-5 bg-pink-600 text-white rounded-full p-1' />
                                            <p className="">{inc}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="">
                                {/* Updated button style */}
                                <a href="https://automater-dev.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <button className="bg-pink-600 group-hover:bg-pink-700 text-white w-full h-16 font-medium rounded-lg hover:shadow-xl transition duration-200">Get started</button>
                                </a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Fetures