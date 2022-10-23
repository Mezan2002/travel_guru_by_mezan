import React, { useContext } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";
import TwitterIcon from "../../assets/images/icons/icons8-twitter-48.png";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signInWithGoogleAccount, signInWithFacebookAccount } =
    useContext(AuthContext);
  const handleGoogleLogIn = () => {
    signInWithGoogleAccount()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const handleFacebookLogIn = () => {
    signInWithFacebookAccount()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };
  return (
    <div className="min-h-screen mt-14">
      <div className="border w-4/12 mx-auto rounded-xl py-20">
        <h2 className="text-3xl font-semibold mb-10">Login</h2>
        <div className="w-9/12 mx-auto">
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl"
              type="email"
              placeholder="Username or Email"
            />
          </div>
          <div className="inputGroup ">
            <input
              className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl mt-10"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="flex justify-between  mt-10">
            <div>
              <input type="checkbox" name="" id="rememberMe" />
              <label htmlFor="rememberMe" className="ml-2">
                Remember Me
              </label>
            </div>
            <div>
              <Link to="" className="underline">
                Forgot Password
              </Link>
            </div>
          </div>
          <button className="btn btn-primary w-full mt-10 ">Login</button>
          <h4 className="my-10">
            Don't have an account?{" "}
            <Link className="underline">Create a new account</Link>
          </h4>
          <div className="divider  mt-5">OR SIGN IN WITH</div>
          <div className="flex justify-center mt-5">
            <div
              onClick={handleGoogleLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img src={GoogleIcon} alt="" />
              <p className="">Google</p>
            </div>
            <div
              onClick={handleFacebookLogIn}
              className="border mr-2 px-4 py-2 rounded-xl cursor-pointer"
            >
              <img className="pl-2.5" src={FacebookIcon} alt="" />
              <p className="">Facebook</p>
            </div>
            <div className="border mr-2 px-4 py-2 rounded-xl cursor-pointer">
              <img src={TwitterIcon} alt="" />
              <p className="">Twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
