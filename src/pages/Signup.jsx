import { Link } from "react-router-dom";
import login from '../assets/images/login/login.svg'
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Signup = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignup = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
        })
        .catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={login} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm border bg-white rounded-md">
                        <div className="card-body">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <input type='submit' value="Sign Up" className="px-7 py-3 font-semibold text-sm bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 outline-none text-white rounded-md"/>
                                </div>
                            </form>
                            <p className='mt-5 text-center'>Have an account? <Link className='text-orange-500 font-bold' to={'/login'}>Login</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;