import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

function Section() {
    return (
        <div>
            <div className="flex flex-col items-center mt-6 lg:mt-20">
                <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                    Bienvenue sur Ma Présentation,
                    <span className='bg-gradient-to-r from-orange-600 to-orange-900 text-transparent bg-clip-text'>
                        {" "} Je suis DevOtak_u
                    </span>
                </h1>
                <p className='text-center mt-10 text-lg text-neutral-500 max-w-4xl'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <div className="flex justify-center my-10">
                    <a href="#" className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-4 rounded-md hover:border hover:bg-none'> Commençons </a>
                    <a href="#" className="px-3 py-4 mx-3 rounded-md border hover:bg-gradient-to-r from-orange-500 to-orange-900"> Documentation </a>
                </div>

                <div className="flex mt-10 justify-center">
                    <video autoPlay loop muted className='w-2/5 mx-4 my-4 border rounded-lg'>
                        <source src={video1} type='video/mp4' />
                    </video>
                    <video autoPlay loop muted className=' w-2/5 mx-4 my-4 border rounded-lg '>
                        <source src={video2} type='video/mp4' />
                    </video>
                </div>
            </div>
        </div>
    )
}

export default Section 