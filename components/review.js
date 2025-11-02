import { StarIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useEffect } from 'react'
import AnimScroll from "./animScroll"

function Review() {

    let dataReview = [
        {
            id: 1,
            user: '/user5.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Naruto Uzhumaki'
        },
        {
            id: 2,
            user: '/user2.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Jacob Seed'
        },
        {
            id: 3,
            user: '/user3.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Emilia Tadashi'
        },
        {
            id: 4,
            user: '/user4.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Jonathan'
        },
        {
            id: 5,
            user: '/user5.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Franklin'
        },
        {
            id: 6,
            user: '/user6.jpg',
            review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.',
            name: 'Jason'
        }
    ]

    let card = null
    let pos = 0

    useEffect(() => {
        AnimScroll(".title4", 100, ".title4")
        AnimScroll("#review-0", 100, ".content4")
        AnimScroll("#review-1", 150, ".content4")
        AnimScroll("#review-2", 200, ".content4")
        AnimScroll("#review-3", 100, ".content4")
        AnimScroll("#review-4", 150, ".content4")
        AnimScroll("#review-5", 200, ".content4")

        card = document.querySelector('#card')
    })

    // --- UPDATED onNext FUNCTION ---
    const onNext = () => {
        // Check if we're at the end
        if (pos === -1260) {
            pos = 0; // Loop back to the start
        } else {
            pos = pos - 420; // Go to the next card
        }
        card.setAttribute('style', 'transform: translateX(' + pos + 'px); transition: 0.5s ease-out')
    }

    // --- UPDATED onPrev FUNCTION ---
    const onPrev = () => {
        // Check if we're at the start
        if (pos === 0) {
            pos = -1260; // Loop to the end
        } else {
            pos = pos + 420; // Go to the previous card
        }
        card.setAttribute('style', 'transform: translateX(' + pos + 'px); transition: 0.5s ease-out')
    }

    return (
        <div id="review" className="my-20 lg:my-36 w-full xl:w-container mx-auto text-center">
            <div className="title4">
                <h2 className="text-4xl font-semibold leading-relaxed text-gray-900">Client's say about us</h2>
                <p className="mt-3 w-3/4 mx-auto text-gray-700 text-base">See what our users are saying</p>
            </div>
            {/* Added 'overflow-hidden' to the parent to hide the moving cards */}
            <div className="w-full overflow-hidden">
                <div id="card" className="mt-20 text-left flex gap-10 px-12 xl:px-0">
                    {dataReview.map((review, i) => {
                        return (
                            <div id={"review-" + i} className="p-[2px] mt-5 rounded-2xl">
                                {/* Added 'flex-shrink-0' to prevent cards from shrinking */}
                                <div className="w-[375px] flex-shrink-0 text-gray-800 bg-white shadow-lg rounded-2xl px-6 pt-14 pb-6 border border-pink-100">
                                    <div className="w-20 h-20 absolute -mt-24 rounded-full overflow-hidden border-4 border-white">
                                        <img src={review.user} alt="user" />
                                    </div>
                                    <p className="content4 text-base leading-relaxed pb-5 border-b text-gray-700">"{review.review}"</p>
                                    <span className="flex justify-between items-center mt-8">
                                        <p className="font-semibold">{review.name}</p>
                                        <div className="flex">
                                            <span className="mr-2">5.0</span>
                                            <StarIcon className="w-5 text-orange-400" />
                                            <StarIcon className="w-5 text-orange-400" />
                                            <StarIcon className="w-5 text-orange-400" />
                                            <StarIcon className="w-5 text-orange-400" />
                                            <StarIcon className="w-5 text-orange-400" />
                                        </div>
                                    </span>
                                D</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="mt-16 flex items-center justify-center gap-2">
                <button onClick={onPrev}>
                    <ChevronLeftIcon className='w-10 mr-2 bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 transition-colors' />
                </button>
                <button onClick={onNext}>
                    <ChevronRightIcon className='w-10 ml-2 bg-pink-600 text-white rounded-full p-2 hover:bg-pink-700 transition-colors' />
                </button>
            </div>
        </div>
    )
}

export default Review