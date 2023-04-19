import React, { FormEvent, useRef, useState } from "react";

const Login = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const person = { email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (emailRef.current !== null) person.email = emailRef.current.value;
    if (passwordRef.current !== null)
      person.password = passwordRef.current.value;
    console.log(person);
  };

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 ">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          ref={emailRef}
          id="email"
          type="email"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          type={showPassword ? "text" : "password"}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <input
          id="check"
          type="checkbox"
          className="form-check"
          checked={showPassword}
          onChange={handlePasswordVisibility}
        />
        <label htmlFor="check" className="form-check-label">
          Show Password
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Login
      </button>
    </form>
  );
};

export default Login;
