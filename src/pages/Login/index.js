import React from "react";
import { LoginBG } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img className="bg-image" src={LoginBG} alt="imagebg" />
      </div>
      <div className="right">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={16} />
        <Input label="Password" placeholder="Password" />
        <Gap height={30} />
        <Button title="Login" />
        <Gap height={50} />
        <Link title="Don't have an account, please register." />
      </div>
    </div>
  );
};

export default Login;
