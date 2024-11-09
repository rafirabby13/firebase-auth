import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../Firebase/Firebase.init.js';

const SignInWIthEMAIlPAss = () => {
    const [error, setError] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
        .then(user=>{
            console.log(user);
        })
        .catch(err=>{
            setError(err.message);
        })
        e.target.email.value =''
        e.target.password.value=''

    }
    return (
        <div>
             <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Sign In now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
              
                name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  
                />
                
                <p className="text-red-600 font-bold">{error}</p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default SignInWIthEMAIlPAss;