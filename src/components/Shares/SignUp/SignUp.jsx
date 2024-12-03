import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const SignUp = () => {

  const {createUser} =useContext(AuthContext);



    const navItems = <>
   <div className='signup-nav'>
   <Link  to="/" className="text-blue-400 font-bold">Home</Link>
    <Link  to="/AllProperties" className="text-blue-400 font-bold">All properties</Link>
    <Link  to="/allBooks" className="text-blue-400 font-bold">Dashboard</Link>
    <Link  to="/allBooks" className="text-blue-400 font-bold">Agent Deshbord</Link>
    <Link  to="/login" className="text-blue-400 font-bold">LogIn</Link>
    <Link  to="/signUp" className="text-blue-400 font-bold">Sign UP</Link>
   </div>
    </>


const [registerError, setRegisterError] = useState('');
const [success, setSuccess] = useState('');

const handleSignUp = e =>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const accepted = e.target.terms.checked;
    console.log(email, password, accepted);
  
    // createUser 
    createUser(email, password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{
      console.error(error)
    })

        //  password at least 6 characters
    if(password.length < 6){
      setRegisterError('password should be at least 6 characters or longer');
      return;
    }
    else if(!/[a-z]/.test(password)){
      setRegisterError('your password should have at least one lowar case characters.')
      return;
    }
    else if(!accepted){
      setRegisterError('please accepted our terms and conditions!');
      return;
    }

      //  reset user 
      setRegisterError('');
      setSuccess('');

   }
     
    return (
        <div>
             {navItems}
              <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name='email' className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>

                <div>
            <input type="checkbox" name="terms" id="terms" />
            <label className='ml-2 mb-4' htmlFor='terms'>Accept our <a>Terms and Conditions</a></label>
            </div>
              </div>

            </form>

            {
              registerError && <p className='text-red-700'>{registerError}</p>
            }
            {
              success && <p className='text-green-600'>{success}</p>
            }

            <p>You already have an account? please <Link to="/login">
            <button type='submit' className="btn btn-link">Login</button>
            </Link> </p>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignUp;