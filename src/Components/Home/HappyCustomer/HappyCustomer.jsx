import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HappyCustomer = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 pb-24 mx-auto">
                <h1 className="text-center text-4xl font-bold my-8 md:mb-20">Our Happy Customers</h1>
                <div className="flex flex-wrap -m-4">
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/338309897_743868107189328_7623792166348866460_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=59mcxEyQvL8AX-PVYUq&_nc_ht=scontent.fdac137-1.fna&oh=00_AfDYb2u5I5rZN9obtv4cKWUK9VGO-YRJ2bdP9jh_4egZhQ&oe=6470D949" />
                            <p className="leading-relaxed">ToyQuest is a game-changer for toy car collectors! The quality of their products is outstanding, with incredible attention to detail. The customer service is fantastic, and the team goes above and beyond to ensure customer satisfaction. ToyQuest is my go-to destination for all my toy car needs. Highly impressed and highly recommended!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="">Ahmed Uddin Sajon</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 mb-6 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fdac137-1.fna.fbcdn.net/v/t39.30808-6/345911239_250267027489120_4342562393484756218_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=NZ-XLd-sMpMAX_dHXjv&_nc_ht=scontent.fdac137-1.fna&oh=00_AfCNNb2xmlqHJemdjnG-JBLC9ubHhZMRzamxUlsS3Re3RA&oe=647192FF" />
                            <p className="leading-relaxed">ToyQuest is a game-changer for toy car collectors like me. The range and quality of their products are outstanding. The attention to detail in their miniature cars is exceptional, bringing them to life. The customer service is top-notch, with friendly and knowledgeable staff. ToyQuest is a must-visit for any toy car enthusiast. Highly recommended!</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Md Nazmul Islam</h2>
                        </div>
                    </div>
                    <div className="lg:w-1/3 lg:mb-0 p-4" data-aos="fade-up" data-aos-duration="2000">
                        <div className="h-full text-center">
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://scontent.fzyl1-1.fna.fbcdn.net/v/t39.30808-6/348925918_1250917215800263_4718375392187493109_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JkcX9phvuQoAX-Ox1t4&_nc_ht=scontent.fzyl1-1.fna&oh=00_AfAqKyw9sZ2AJR-DS-JyZr6SPA5fPsqL_5eIm4dFs_lRIw&oe=6470FFBC" />
                            <p className="leading-relaxed">ToyQuest has taken my toy car collecting experience to new heights! Their impressive selection of high-quality cars, combined with their exceptional customer service, has made me a loyal customer. The attention to detail in their products is remarkable. I highly recommend ToyQuest to fellow collectors and enthusiasts.</p>
                            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Mrs Taus</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HappyCustomer;