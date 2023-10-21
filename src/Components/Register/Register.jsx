import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const {createUser, updateUserProfile} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from.pathname || '/'
    const handleRegister = e => {
        e.preventDefault();
        const accepted = e.target.terms.checked;
        console.log(accepted);
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const userDetails = {name, photo, email, password};
        console.log(userDetails);

         // password will be upto 6 characters 
         if (password.length < 6) {
           
            toast.error('Password must be at least 6 characters long', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        if (!accepted) {
            
            toast.error('Please accept the Terms and Conditions', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
            return;
        }

        //user create
        createUser(email, password)
        .then((result) => {
            console.log(result.user);
            handleUpdateUser(name, photo);
            
            toast.success('Registration successful!', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,

               
            });
            navigate(from,{replace:true})
        })
        .catch((error) => {
            console.error(error);
            
            toast.error('Registration failed. Please try again.', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        });
        const handleUpdateUser = (name, photo) => {
            const profile = {
              displayName: name,
              photoURL: photo,
            };
            console.log("🚀 ~ file: Registration.jsx:38 ~ handleUpdateUser ~ profile:", profile)
            updateUserProfile(profile)
              .then(() => {})
              .catch((error) => console.error(error));
          };
    

        
    }
    return (
        <div>
            <div className='my-16 md:my-20 md:w-10/12 w-11/12 mx-auto'>
                <div className="container mx-auto lg:flex lg:flex-row items-center md:p-16 py-8 rounded-3xl  shadow-2xl">
                    

                    <div className="md:w-1/2 w-full ">
                    <h1 className="text-4xl font-bold italic text-center">Register Now...!</h1>
                        <div className="card flex-shrink-0 w-full">
                            <form onSubmit={handleRegister} className="card-body">

                                {/* name box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Name</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    
                                    <input type="text" name='name' placeholder="Your Name" className="input input-bordered" required />
                                    </div>
                                </div>

                                {/* photo url box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Photo URL</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    
                                    <input type="text" name='photo' placeholder="Your Photo URL" className="input input-bordered" required />
                                    </div>
                                </div>
                                {/* email box  */}
                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text text-lg">Email</span>
                                    </label>
                                    <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-orange-500 text-white border-none">Required</span>
                                    <input type="email" name='email' placeholder="Your Email" className="input input-bordered" required />
                                    </div>
                                </div>

                                 {/* password box  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg">Password</span>
                                    </label>

                                   <div className='indicator w-full flex-col'>
                                    <span className="indicator-item badge bg-orange-500 text-white border-none">Required</span>
                                    <input type="password" name='password' placeholder="Password" className="input input-bordered" required />
                                    </div>

                                    {/* terms and condition  */}
                                    <div className="mb-3 mt-3">
                                        <input type="checkbox" name="terms" id="terms" />
                                        <label className="ml-2 font-medium" htmlFor="terms">Accept Our <a className="text-orange-500" href="">Terms and condition</a> </label>
                                    </div>
                                    
                                    
                                </div>

                                {/* register btn  */}
                                <div className="mt-6 form-control">
                                    <button className="border border-orange-500 hover:bg-orange-500 px-10 hover:text-white text-orange-500 font-bold text-lg py-2 rounded-lg shadow duration-300">Register</button>
                                </div>
                                <div className='text-center  mt-6'>
                                   

                                    
                            <div>

                                {/* new here link  */}
                                <p className='text-sm'> <span className=' text-orange-500'>Have an Account ?</span> <Link to="/login"><button className="btn btn-active btn-link normal-case text-sm text-sky-700 ">Login Here</button>
                                </Link></p>
                            </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* right side part  */}
                    <div className="md:w-1/2">
                        <h1 className='text-3xl mb-8 md:text-end text-center'>Welcome to <span className='text-orange-500 font-bold italic'>Tech-Mart</span></h1>
                        {/* <p className="text-orange-500 text-xl md:text-end text-center font-bold">Enjoy your life</p> */}
                        <img className="border-l-2 ml-16" src="https://i.ibb.co/j8gSHcV/Forms-amico.png" alt="" />
                        
                        
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Register;