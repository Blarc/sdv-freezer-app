import React, {FC, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {useAuthState} from "react-firebase-hooks/auth";
import {auth, logInWithEmailAndPassword, signInWithGoogle} from "../../firebase";

interface LoginProps {
}

const Login: FC<LoginProps> = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) {
            // maybe trigger a loading screen
            return;
        }
        if (user) navigate("/dashboard");
    }, [user, loading, navigate]);

    return (
        <div className="flex flex-col min-h-screen overflow-hidden">

            <main className="flex-grow">
                <section className="bg-gradient-to-b from-gray-200 to-white">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="pt-12 pb-12 md:pt-40 md:pb-20">

                            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                                <span
                                    className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400">ŠDV Freezer App</span>
                            </div>

                            <div className="max-w-md mx-auto">
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <label
                                            className="block text-gray-800 text-lg font-medium mb-2"
                                            htmlFor="email">
                                            Email
                                        </label>
                                        <input id="email"
                                               type="text"
                                               className="w-full text-gray-800 p-3"
                                               placeholder="Enter your email"
                                               required
                                               value={email}
                                               onChange={(e) => setEmail(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-4">
                                    <div className="w-full px-3">
                                        <div className="flex justify-between">
                                            <label
                                                className="block text-gray-800 text-lg font-medium mb-2"
                                                htmlFor="password">
                                                Password
                                            </label>
                                            <Link to="/reset"
                                                  className="text-sm font-medium text-blue-600 hover:underline">Having
                                                trouble loging in?</Link>
                                        </div>
                                        <input id="password"
                                               type="password"
                                               className="w-full text-gray-800 p-3"
                                               placeholder="Enter your password"
                                               required
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mt-6">
                                    <div className="w-full px-3">
                                        <button
                                            className="text-white text-lg bg-blue-600 hover:bg-blue-700 w-full p-2"
                                            onClick={() => logInWithEmailAndPassword(email, password)}>
                                            Log in
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center mt-6">
                                    <div className="border-t border-gray-300 flex-grow mr-3" aria-hidden="true"></div>
                                    <div className="text-gray-600 italic">Or</div>
                                    <div className="border-t border-gray-300 flex-grow ml-3" aria-hidden="true"></div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mt-6">
                                    <div className="w-full px-3">
                                        <button
                                            className="text-white text-lg bg-red-600 hover:bg-red-700 w-full p-2"
                                            onClick={signInWithGoogle}>
                                            Log in with Google
                                        </button>
                                    </div>
                                </div>
                                <div className="text-gray-600 text-center mt-6">
                                    Don’t you have an account? <Link to="/register"
                                                                     className="text-blue-600 hover:underline transition duration-150 ease-in-out">Register</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
};

export default Login;
