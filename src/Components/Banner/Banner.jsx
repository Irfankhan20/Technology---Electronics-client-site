



const Banner = () => {
    return (
        <div>
            <div className="relative bg-cover bg-center md:h-screen h-72 banner-image" style={{ backgroundImage: 'url("https://i.ibb.co/LRrpRmH/5146680-2619705.jpg")' }}>
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
                <div className="absolute inset-0 flex items-center ">
                    {/* left side */}
                    <div className="ml-28">
                        <h1 className="md:w-9/12 text-2xl md:text-5xl text-white font-semibold leading-tight mb-4 line-">Transforming Lives Through <span className='text-orange-500 italic text-3xl md:text-6xl'>Technology and Electronics</span>.</h1>
                        <p className=" text-sm md:text-xl text-white mb-8 md:w-8/12 w-6/12 ">Technology and electronics encompass the dynamic world of innovation, where cutting-edge devices and systems continually shape our lives. From smartphones to artificial intelligence, they drive progress, connectivity, and convenience.




</p>
                        <div className="flex md:mb-0 ">
                            <button className="border border-white hover:bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">View Details</button>
                            <button className="border border-white hover:bg-white text-orange-500 font-semibold py-2 px-4 rounded shadow mr-4 duration-300">Our Services</button>
                        </div>
                    </div>
                    <div>
                        <img className="mr-28 opacity-80 " src="https://i.ibb.co/xCNkvdd/pngwing-com-1.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;