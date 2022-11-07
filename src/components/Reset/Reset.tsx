import React, {FC, useEffect, useState} from 'react';
import {useAuthState} from "react-firebase-hooks/auth";
import {useNavigate} from "react-router-dom";
import {Link} from "react-router-dom";
import {auth, sendPasswordReset, signInWithGoogle} from "../../firebase";
import styles from './Reset.module.css';

interface ResetProps {
}

const Reset: FC<ResetProps> = () => {

    const [email, setEmail] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (loading) return;
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
                                                Email <span className="text-red-600">*</span>
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
                                    <div className="flex flex-wrap -mx-3 mt-6">
                                        <div className="w-full px-3">
                                            <button
                                                className="text-white text-lg bg-blue-600 hover:bg-blue-700 w-full p-2"
                                                onClick={() => sendPasswordReset(email)}>
                                                Reset
                                            </button>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 text-center mt-6">
                                        Want to try again? <Link to="/"
                                                                       className="text-blue-600 hover:underline transition duration-150 ease-in-out">Login</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        );
        // <div className={styles.reset}>
        //     <div className={styles.reset__container}>
        //         <input
        //             type="text"
        //             className={styles.reset__textBox}
        //             value={email}
        //             onChange={(e) => setEmail(e.target.value)}
        //             placeholder="E-mail Address"
        //         />
        //         <button className={styles.reset__btn} onClick={() => sendPasswordReset(email)}>
        //             Send password reset email
        //         </button>
        //
        //         <div>
        //             Don't have an account? <Link to="/register">Register</Link> now.
        //         </div>
        //     </div>
        // </div>
}

export default Reset;
