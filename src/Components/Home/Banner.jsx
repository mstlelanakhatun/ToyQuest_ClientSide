import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div className='relative grid grid-cols-1 items-center w-full rounded-xl h-full bg-cover bg-center bg-no-repeat mb-8 md:h-[550px] bg-[url(https://i.imgur.com/6lT3TP2.jpg)] p-4 '>
            <div className="bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] rounded-xl">
                <div className='text-white space-y-7 p-5 md:pl-12 md:w-1/2'>
                    <h2 className='text-5xl md:text-6xl font-bold'>Unleash the Power of Play with<span className=' text-indigo-500'>ToyQuest</span></h2>
                    <p>Welcome to ToyQuest: Unleash Your Imagination, Embark on Epic Adventures! Dive into a world where action figures come to life and play knows no bounds. Fuel your playtime with our thrilling collection of meticulously crafted action figures. From fearless heroes to formidable villains, ToyQuest brings you endless opportunities to conquer new frontiers and create unforgettable stories.</p>
                    <div>
                        <Link to='/allToys'><button className="button bg-indigo-500 flex items-center gap-3 mb-8">Explore Now <FaExternalLinkAlt /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;