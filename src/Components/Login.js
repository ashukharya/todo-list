// import React from "react";
// const Login = () => {
//   return <div>Login</div>
// };

// export default Login;

import "./login.css"
import React, { useState } from 'react';
import{ useNavigate, Link} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission (e.g., send data to server)
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if(input.email === loggeduser.email && input.password === loggeduser.password){
        localStorage.setItem("loggedin", true);
        navigate("/");
}else{
    alert("Wrong Email or password!");
}
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={input.email}
            onChange={(e) =>
		  setInput ({
			...input, 
 			[e.target.name] : e.target.value,
		    })
		}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={input.password}
            onChange={(e) =>
		  setInput ({
			...input, 
 			[e.target.name] : e.target.value,
		    })
		}
            required
          />
        </div>
        <button type="submit">Login</button>
        <div>
            No account? 
            <Link to="/register">
                <u>Register Here</u>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;