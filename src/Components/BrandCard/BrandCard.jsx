import { useEffect, useState } from "react";



const BrandCard = ({brand}) => {
    const { id, name, img } = brand;
    

    const [product, setProduct] = useState(null);
  

    //
    useEffect(() => {
        fetch('https://assignment-ten-complete-6cqb67ijn-irfan-khans-projects.vercel.app/brand')
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
    })

    
    const handleClick = () => {
        
    }
    return (
        <div className="my-16 md:w-94 mx-auto">
           
            <div className="card shadow-2xl" onClick={handleClick}>
            <figure><img  className=" p-14 w-[485px] h-[485px]" src={img} alt="Brand" /></figure>
            <div className="card-body bg-orange-100  text-center">
                <h2 className="font-semibold text-2xl text-center">{name}</h2>
                
            </div>
        </div>
            
        </div>
    );
};

export default BrandCard;