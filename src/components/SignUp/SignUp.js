import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import GoogleIcon from "../../assets/images/icons/icons8-google-48.png";
import FacebookIcon from "../../assets/images/icons/icons8-facebook-48.png";
import TwitterIcon from "../../assets/images/icons/icons8-twitter-48.png";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const { signInWithGoogleAccount, signInWithFacebookAccount, newUserSignUp } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const from = event.target;
    const firstName = from.firstName.value;
    const lastName = from.lastName.value;
    const photoURL = from.photoURL.value;
    const email = from.email.value;
    const password = from.password.value;
    const confirmPassword = from.confirmPassword.value;
    if (password !== confirmPassword) {
      return setError(
        "CustomizedPassword is not matched with the confirm password"
      );
    }
    newUserSignUp(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        from.reset();
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleLogIn = () => {
    signInWithGoogleAccount()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };

  const handleFacebookLogIn = () => {
    signInWithFacebookAccount()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div>
      <div className="min-h-screen mt-14">
        <div className="border border-gray-500 w-4/12 mx-auto rounded-xl py-10">
          <h2 className="text-3xl font-semibold mb-5">Create an Account</h2>
          <p className="text-red-500 mb-5">{error.slice(10, 300)}</p>
          <form onSubmit={handleSubmit} className="w-9/12 mx-auto">
            <div className="flex justify-between items-center">
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                />
              </div>
              <div className="inputGroup ">
                <input
                  className="border-b-2 w-full py-3 pl-2 focus:outline-none text-xl "
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                type="text"
                name="photoURL"
                placeholder="Photo URL"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                type="email"
                name="email"
                placeholder="Username or Email"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className="inputGroup ">
              <input
                className="border-b-2 w-full py-2 pl-3 focus:outline-none text-xl mt-7"
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            <button className="btn btn-primary w-full mt-10 ">Sign Up</button>
            <h4 className="my-5">
              Already have an account?{" "}
              <Link to="/logIn" className="underline">
                Login
              </Link>
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
