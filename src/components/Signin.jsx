import { React, useEffect, useState } from "react";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();
  const { googleSignIn, user } = UserAuth();
  const emailValidation = (val) => {
    if (val.match(/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g)) {
      console.log("true");
    } else {
      console.log("false");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/account");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  return (
    <div className="mt-40 flex items-center justify-center flex-col gap-8 w-full ">
      <div className="flex flex-col gap-4 justify-between items-center">
        <h1 className="text-6xl text-black">Sign In for a free account</h1>
        <p className="text-2xl">
          Don't have an account?{" "}
          <Link className="text-green-900 underline" to="/signup">
            {" "}
            Sign Up.
          </Link>
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-between gap-2 w-[70%]"
      >
        <div className="flex gap-4 w-1/3">
          <input
            className="h-[60px] w-full px-2 border-[2px] border-[green] rounded-[6px]"
            placeholder="Enter Email"
            onChange={(e) => emailValidation(e.target.value)}
            type="email"
            required
          />
        </div>
        <div className="flex gap-4 w-1/3">
          <input
            className="h-[60px] w-full px-2 border-[2px] border-[green] rounded-[6px]"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            required
          />
        </div>
        <button className="text-[24px] text-green-900 border-[2px] w-1/6 h-[55px] border-green-700 rounded-md hover:bg-gray-100">
          Sign In
        </button>
        <div>
          <GoogleButton onClick={handleGoogleSignIn} />
        </div>
      </form>
    </div>
  );
};

export default Signin;
