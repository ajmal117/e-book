import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contects/AuthProvider";
import googleLogo from "../assets/google-logo.svg";

const Login = () => {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((userCredential) => {
        // sign in
        const user = userCredential.user;
        alert("login successfull !");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });

    // console.log(email, password);
  };

  // sign-up using google acount
  const handleRegister = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        alert("sign-up successfully !");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
      });
  };

  return (
    <section className="gradient-form h-full  dark:bg-neutral-700 w-full flex items-center justify-center">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48"
                        src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        alt="logo"
                      />
                      {/* <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                      We are The Lotus Team
                    </h4> */}
                    </div>

                    <form onSubmit={handleLogin}>
                      <p className="mb-4 text-xl font-bold text-center">
                        {" "}
                        Login Form{" "}
                      </p>
                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label className="text-base">Email Address</label>
                        <input
                          type="text"
                          name="email"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput1"
                          placeholder="Username"
                        />
                      </div>

                      <div className="relative mb-4" data-te-input-wrapper-init>
                        <label className="text-base">Password</label>
                        <input
                          type="password"
                          name="password"
                          className="peer block min-h-[auto] w-full rounded border bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                          id="exampleFormControlInput11"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        {error ? (
                          <p className="text-red-600">
                            Email or Password is not correct :
                          </p>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <button
                          className="mb-3 bg-green-700 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.3)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          type="submit"
                          data-te-ripple-init
                          data-te-ripple-color="light"
                          // style={{
                          //   background:
                          //     "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                          // }}
                        >
                          Login
                        </button>
                      </div>

                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">If you have not registered?</p>
                        <Link to="/sign-up">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-blue-300 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                          >
                            Sign Up
                          </button>
                        </Link>
                      </div>
                      <div className=" flex w-full items-center flex-col mt-5 gap-3 border-2 border-blue-200 rounded-lg hover:bg-blue-50">
                        <button onClick={handleRegister} className="block">
                          <img
                            src={googleLogo}
                            alt=""
                            className="w-12 h-12 inline-block"
                          />{" "}
                          Login with Google
                        </button>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background:
                      " linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12 md:block hidden">
                    <h4 className="mb-6 text-xl font-semibold">Welcome</h4>
                    <p className="text-sm">
                      Hi there! My name is Ajmal Ali and I am very happy to
                      welcome you on board with Ajmico reads ! Hope Your journey
                      will be inspirational with Us.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
