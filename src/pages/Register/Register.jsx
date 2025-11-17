import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // Create User
        createUser(email, password)
        .then(result =>{
            console.log(result.user);
        })
        .catch(error =>{
            console.error(error);
        })

    }
  return (
    <div>
        <Navbar></Navbar>
      <form onSubmit={handleRegister} className="text-center mt-20">
        <div>
          <h2 className="text-4xl">Please Register</h2>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 mx-auto shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input 
              type="text" 
              className="input"
              name="name" 
              placeholder="Name" />
             
              
              <label className="label">Photo URL</label>
              <input 
              type="text" 
              className="input"
              name="photo" 
              placeholder="Photo URL" />
              

              <label className="label">Email</label>
              <input 
              type="email" 
              className="input"
              name="email" 
              placeholder="Email" />
              <label className="label">Password</label>

              <input 
              type="password" 
              className="input" 
              name="password"
              placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </form>

      <p className="text-center mt-5">
        Already Have an account ? Please
        <Link className="text-blue-600 ml-5" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
