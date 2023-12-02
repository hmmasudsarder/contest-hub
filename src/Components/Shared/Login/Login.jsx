import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { loadCaptchaEnginge, validateCaptcha, LoadCanvasTemplate } from "react-simple-captcha";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { Helmet } from "react-helmet-async";
import img from "../../../assets/images/authentication.gif";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);
  const { signIn } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((user) => {
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleValidateCaptcha = (e) => {
    const value = e.target.value;
    if (validateCaptcha(value, false)) {
      setDisabled(false);
    } else setDisabled(true);
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Contest-Hub Login </title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold text-center z-40">Login now!</h1>
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <button className=" btn bg-red-500">
                  <LoadCanvasTemplate />
                </button>
              </label>
              <input
                type="text"
                onChange={handleValidateCaptcha}
                name="captcha"
                placeholder="Type a right captcha"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-primary"
                disabled={disabled}
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-green-300 p-1 text-center">
            Already have a Account Please ?{" "}
            <Link className="text-red-400" to="/register">
              Sign Up
            </Link>{" "}
          </p>
          <SocialLogin className="p-12"></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
