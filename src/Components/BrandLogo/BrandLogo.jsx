

const BrandLogo = () => {
    return (
        <div className='md:py-10 md:mt-10'>
            <h2 className="text-center font-bold text-4xl pb-10 ">All Brands</h2>
        <div className="grid grid-cols-12 container mx-auto gap-6 bg-white " >
          <div className="md:col-span-3 col-span-12 ">
              <div className='bg-[#283149] md:h-full h-36 flex flex-col justify-center'>
                  <h1  className='text-[#F7B801] mb-3  md:text-5xl tracking-wide text-3xl custom-font text-center font-bold'>ALL YOUR <br></br> FAVORITE BRANDS</h1>
                  <h1 className='text-white text-sm text-center tracking-widest font-semibold uppercase '>See All Brands</h1>
              </div>
          </div>
          <div  className="md:col-span-9 col-span-12">
          <div className='grid md:grid-cols-6 grid-cols-4 md:gap-12 gap-6 md:p-10 px-6'>
            {/* img 1 */}
              <div>
                  <img  src="https://i.ibb.co/w482MFz/5a354ef694c9a9-4930814115134430626094.png" alt="" />
              </div>
              {/* img 2 */}
              <div>
                  <img src="https://i.ibb.co/55tBjcZ/kisspng-samsung-galaxy-s7-samsung-galaxy-s6-logo-samsung-e-samsung-5abe275edf3c99-146441521522411358.png" alt="" />
              </div>
              {/* img 3 */}
              <div>
                  <img src="https://i.ibb.co/fp30ztB/kisspng-sony-vaio-logo-cdr-metallic-vector-5adace5cbe66e1-4908001315242891167799.png" alt="" />
              </div>
              {/* img 4 */}
              <div>
                  <img src="https://i.ibb.co/8KyqF6r/kisspng-google-logo-googleplex-google-search-5b2cd7fd66a992-1457425415296655334205.png" alt="" />
              </div>
              {/* img 5 */}
              <div>
                  <img src=" https://i.ibb.co/dj2NRxB/5a36cc8a580752-0610743315135407463606.png" alt="" />
              </div>
              {/* img 6 */}
              <div>
                  <img src=" https://i.ibb.co/MCLkdcb/kisspng-nokia-lumia-920-nokia-3-nokia-ozo-smartphone-pepsi-logo-5ac1b2f8b97a16-632485881522643704759.png" alt="" />
              </div>
              

          </div>
          </div>
        </div>
        </div>
        
    );
};

export default BrandLogo;