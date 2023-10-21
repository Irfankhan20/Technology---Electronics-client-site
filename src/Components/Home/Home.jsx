import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandCard from "../BrandCard/BrandCard";
import BrandLogo from "../BrandLogo/BrandLogo";
import ProductReview from "../ProductReview/ProductReview";


const Home = () => {
    const brands = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ProductReview></ProductReview>
            <div className="my-16 md:my-20 md:w-10/12 w-11/12 mx-auto ">
                <h2 className=" font-bold text-2xl md:text-5xl text-center">All Brands</h2>
                <div className="grid lg:grid-cols-3 gap-4 justify-items-center">
                    {brands.map(brand => <BrandCard key={brand.id} brand={brand}></BrandCard>)}
                </div>
            </div>
            <BrandLogo></BrandLogo>
        </div>
    );
};

export default Home;