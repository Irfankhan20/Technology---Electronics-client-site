import Swal from "sweetalert2";





const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        
        const newProduct = {name, type, price, description, photo, rating}
        console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/brand',{
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'user Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset();
        })
        
   
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-4xl font-bold pb-8 text-center">Add Product</h2>
            <form onSubmit={handleAddProduct}>
                {/* row 1 */}
                <div className="md:flex gap-4">
                    {/* Product name  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Name</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="name" placeholder="Product name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    {/* product type*/}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Product Type</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name ="type" placeholder="Product Type" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 2 */}
                <div className="md:flex gap-4">
                    {/* Price  */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="price" placeholder="Enter Product Price" className="input input-bordered w-full" />
                        </label>
                    </div>  
                    {/* Description */}
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="description" placeholder="Write Product Description" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* row 3 */}
                
                <div className="md:flex gap-4">
                    {/* photo url  */}
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Phot URL</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="photo" placeholder="Write your photo url" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* row 4 */}
                
                <div className="md:flex gap-4">
                    {/* rating  */}
                    <div className="form-control md:w-full">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <label className="input-group">

                            <input type="text" name="rating" placeholder="give rating" className="input input-bordered w-full" />
                        </label>
                    </div>

                </div>
                {/* row 5 */}
                <div className="md:flex gap-4">
                    {/* add Product btn  */}
                    <div className="form-control md:w-full">
                        <input type="submit" value="Add Product" className="btn btn-block mt-6 bg-orange-600 text-white" />
                    </div>

                </div>
                
            </form>
        </div>
    );
};

export default AddProduct;