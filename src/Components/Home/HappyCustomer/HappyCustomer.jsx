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
                            <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">Ahmed Uddin Sajon</h2>
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
                            <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://lh3.googleusercontent.com/kdDgTPTIGqmrWPq9kiudlWYaCqt2Vp0er-UCqju1ZLGedEciZe2vVr1Oh9tEdXDjRD0-dzUQyHwqw0DMcX4szCN1rlZBEqLFjxcQbCXTLYDxMcv7KUD8L-7exrVZ7u4hHr0DtuUF1PxF4rQKmgDTjksK-x_mYfl546O2snzo4P4296XHILmOCFlWrjgE_z_U_Jvk0PAbEZBF4GYIL0edZTEifmkCHbnu5QSbk4Q3C5A3WUyG7LoLllOujumUWXz8A9WUKUdn9TTyFXJo1PvZGCeQ__WBV4ldqSoZe3diRX9gmBe22si1Z0ggZPJfaexPUKOawYI2OTmxRXxc5NFvBujQ214vn_a_AnQL3-z84sUWp3FV625YylOIKRKMbrlGr-Kq2JzlZvIDg3rirmHokzSkiNLZA__ZHlN7T0n90IGv_Y6_d_YTdyoLqms1jAd1tdo2oKxOQTZVbnctiWeDlNcuTPfb90eTUV967_EP26uiTmT_SNa8dwXeug3iy2I0f7mHEvo7dsCN0GVkYvBv30lqIT1gfJBbUxMH-9HwRixduSQ-gGdZYwBuylx3ju8bgD2DbS4362VnT8YAbdtmAxvzRZZ_nw2SzVAQtXly-cNtHJyr9yA7U4OJdRF5232jqR80hcbaoWSO-_r8PTXm5yQbIT0o3MrkQcjwfpPII64SMbQUcIh8FzoEl8Z0LgC-pVf3XJI0exMnwdYc6m74_8xB_Qg18vGpING9l6fLxx5WaJbbR_Ic1bOPq_QTNGHs3Dw22DyskYKLuZ3_heyVzWRtGbJuwKVmqshnS_nNFHN9R8PCTzOr4Rlc_ffOcnuGV-pgCc3GfQYziAb-gAeTyKfXlPbyvzZha0TJXXAekCVMOavhSigxZE7aMTH4oqeFszDZmfc7fy7YG8Xet1oLxtIfQzXIx4bTEHv2SotxShdTnCE8ac0aJQ4meFnetPWr6PtH_54EtnblHiYJqA=w650-h866-s-no?authuser=1" />
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