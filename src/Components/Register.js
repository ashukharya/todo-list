// import React from "react";
// const Register = () => {
//   return <div>Register</div>
// };

// export default Register;

// src/RegisterPage.js
import "./register.css"
import React, { useState } from 'react';
import{ useNavigate, Link} from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: '',
    email: '',
    password: '',
  });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code here to handle form submission (e.g., send data to server)
    localStorage.setItem("user", JSON.stringify(input));
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Register Page</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={input.name}
            onChange={(e) =>
		  setInput ({
			...input, 
 			[e.target.name] : e.target.value,
		    })
		}
          />
        </div>
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
        <button type="submit">Register</button>
        <div>
            Has an account? 
            <Link to="/login">
                <u>LogIn  Here</u>
            </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
