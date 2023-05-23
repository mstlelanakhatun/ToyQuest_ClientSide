import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Gallery = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to the ToyQuest Gallery</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Where Miniature Marvels Come to Life! Explore captivating images of our exquisite collection, featuring sleek sports cars, rugged off-road vehicles, and more. Marvel at the intricate details and realistic designs that make these toy cars truly special.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-right">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/2mRIvaU.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-left">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/T7q47ON.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/vao9UgS.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-up">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/vCtlpM9.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-right">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/DLBjdVp.jpg" />
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full" data-aos="fade-left">
                            <img alt="gallery" className="w-full h-full object-cover object-center block rounded-xl" src="https://i.imgur.com/0Hh7WgU.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;