import React from "react";
import "./register.scss";
import { RegisterBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Register = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={RegisterBG} alt="imagebg" />
      </div>
      <div className="right">
        <p className="title">Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={16} />
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Register" />
        <Gap height={50} />
        <Link title="Back to Login" />
      </div>
    </div>
  );
};

export default Register;
