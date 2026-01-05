"use client";

import { StarIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid'
import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import AnimScroll from "./animScroll"

function Review() {
    const cardRef = useRef(null);
    const [isAnimating, setIsAnimating] = useState(false);

    const originalData = [
        { id: 1, user: '/user5.jpg', name: 'Sanjay Sir', review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.' },
        { id: 2, user: '/user2.jpg', name: 'Rajiv Sir', review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.' },
        { id: 3, user: '/user3.jpg', name: 'Rekha Mam', review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.' },
        { id: 4, user: '/user6.jpg', name: 'Rahul Sir', review: 'My students love using Autometer for their projects. It teaches them valuable automation skills.' }
    ];

    // Clone data for infinite effect: [Card1, Card2, Card3, Card4, Card1_Clone]
    const dataReview = [...originalData, originalData[0]];
    const cardWidth = 415; // Width + Gap

    useEffect(() => {
        AnimScroll(".title4", 100, ".title4");
    }, []);

    const handleMove = (direction) => {
        if (isAnimating) return;
        setIsAnimating(true);

        const currentTransform = gsap.getProperty(cardRef.current, "x");
        let targetX = direction === 'next' ? currentTransform - cardWidth : currentTransform + cardWidth;

        gsap.to(cardRef.current, {
            x: targetX,
            duration: 0.6,
            ease: "power2.inOut",
            onComplete: () => {
                const totalWidth = originalData.length * cardWidth;

                // Infinite Logic: Teleporting
                if (targetX <= -totalWidth) {
                    // If at clone, jump back to real Card 1
                    gsap.set(cardRef.current, { x: 0 });
                } else if (targetX > 0) {
                    // If going back from Card 1, jump to real Card 4
                    gsap.set(cardRef.current, { x: -totalWidth + cardWidth });
                }
                setIsAnimating(false);
            }
        });
    };

    return (
        <div id="review" className="my-20 lg:my-36 w-full xl:w-container mx-auto text-center overflow-hidden">
            <div className="title4">
                <h2 className="text-4xl font-bold font-orbitron uppercase tracking-wider text-gray-900">
                    Client's <span className="text-pink-600">say about us</span>
                </h2>
                <p className="mt-3 text-gray-700 italic">See what our users are saying</p>
            </div>

            <div className="mt-20 relative px-10">
                <div 
                    ref={cardRef} 
                    className="flex gap-10"
                    style={{ width: `${dataReview.length * cardWidth}px` }}
                >
                    {dataReview.map((review, i) => (
                        <div key={`${review.id}-${i}`} className="w-[375px] flex-shrink-0">
                            <div className="bg-white shadow-xl rounded-3xl px-8 pt-16 pb-8 border border-pink-50 border-b-4 border-b-pink-500 relative">
                                <div className="w-20 h-20 absolute -top-10 left-8 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                    <img src={review.user} alt={review.name} className="w-full h-full object-cover" />
                                </div>
                                <p className="text-gray-600 leading-relaxed italic text-lg">"{review.review}"</p>
                                <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-50">
                                    <p className="font-bold text-gray-900">{review.name}</p>
                                    <div className="flex items-center gap-1">
                                        <StarIcon className="w-5 h-5 text-orange-400" />
                                        <span className="text-sm font-black text-gray-400">5.0</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-16 flex items-center justify-center gap-6">
                <button onClick={() => handleMove('prev')} className="group">
                    <ChevronLeftIcon className='w-14 h-14 bg-white text-pink-600 border-2 border-pink-100 rounded-full p-3 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-md' />
                </button>
                <button onClick={() => handleMove('next')} className="group">
                    <ChevronRightIcon className='w-14 h-14 bg-white text-pink-600 border-2 border-pink-100 rounded-full p-3 group-hover:bg-pink-600 group-hover:text-white transition-all shadow-md' />
                </button>
            </div>
        </div>
    );
}

export default Review;