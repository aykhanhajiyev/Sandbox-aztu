import { useState } from "react";
import { Link } from "react-router-dom";
import Dashboard from "./Dashboard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
      // Perform sign-in validation here (e.g., check username and password)
  
      // Simulating successful sign-in
      window.location.href = "/dashboard"
    };
  
    return (
      <section class="wrapper bg-soft-primary">
        <figure><img src="assets/img/photos/clouds.png" alt="" /></figure>
        <div class="signin container-card w-25 pt-10 pb-10">
          <div class="form-floating mb-4">
            <input
              id="textInputExample"
              type="text"
              class="form-control"
              placeholder="Username"
            />
            <label for="textInputExample">İstifadəçi adı</label>
          </div>
          <div class="form-floating mb-4">
            <input
              id="textInputExample"
              type="password"
              class="form-control position-relative"
              placeholder="Password"
            />
            <label for="textInputExample">Şifrə</label>
          </div>

          <a className="btn btn-blue rounded-pill w-100 mb-4" onClick={handleSignIn}>Daxil ol</a>

          <a href="/register" className="btn btn-red rounded-pill w-100">
            Qeydiyyatdan keç 
          </a>
         
        </div>
      </section>
    );
  }

  export default SignIn;