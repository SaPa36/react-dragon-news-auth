import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Login = () => {

    const {signIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignIn = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

       
        const email = form.get('email');
        const password = form.get('password');
        console.log( email, password);

        // Create User
        signIn(email, password)
        .then(result =>{
            console.log(result.user);

            navigate(location?.state ? location.state : '/');
        })
        .catch(error =>{
            console.error(error);
        })

    }
  return (
    <div>
        <Navbar></Navbar>
      <form onSubmit={handleSignIn} className="text-center mt-20">
        <div>
          <h2 className="text-4xl">Please Login</h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </div>
        </div>
      </form>

    
        <p className="text-center mt-5">
          New Here ? Please
          <Link className="text-blue-600 ml-5" to="/register">
            Register
          </Link>
        </p>
      
    </div>
  );
};

export default Login;
