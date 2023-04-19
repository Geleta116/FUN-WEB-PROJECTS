import React, { FormEvent, useRef, useState } from "react";

const Signup = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const person = { name: "", email: "", password: "" };

  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current !== null) person.name = nameRef.current.value;
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
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Student Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>

      <div className="mb-3">
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

export default Signup;
