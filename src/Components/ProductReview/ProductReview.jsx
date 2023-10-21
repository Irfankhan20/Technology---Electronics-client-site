

const ProductReview = () => {
    return (
        <div className="mt-24">
            <h2 className="text-center font-bold text-4xl pb-9">Why should you shop from our store?</h2>
            <div className='grid grid-cols-10 container  mx-auto justify-center gap-10 py-16  items-center'>
                <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='md:w-24' src="https://i.ibb.co/Lv8XJd1/feature-icon-1.png" alt="" />
                        <h1 className='font-bold md:text-xl text-md  shadow-lg'>EARN REWARDS AND SHOP WITH POINTS</h1>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='md:w-24' src="https://i.ibb.co/KL1nk8Y/feature-icon-2.png" alt="" />
                        <h1 className='font-bold md:text-xl text-md  shadow-lg'>RSVP & WAITLISTS</h1>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='md:w-24 ' src="https://i.ibb.co/HgH5XyW/feature-icon-3.png" alt="" />
                        <h1 className='font-bold md:text-xl text-md   shadow-lg'>FLEXIBLE PAYMENT OPTIONS</h1>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-12 '>
                    <div className='flex flex-col items-center text-center gap-8'>
                        <img className='md:w-24' src="https://i.ibb.co/PDjN9gC/feature-icon-4.png" alt="" />
                        <h1 className='font-bold md:text-xl text-md  shadow-lg '>CONTESTS & GIVEAWAYS</h1>
                    </div>
                </div>
                <div className='md:col-span-2 col-span-12 text-center '>
                    <button className='custom-button bg-orange-600 text-white p-4 shadow-xl font-bold uppercase'>See More Reason</button>
                </div>

            </div>

        </div>
    );
};

export default ProductReview;