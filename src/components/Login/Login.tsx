import React, {FC, useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import styles from './Login.module.css';
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
        <div className={styles.login}>
            <div className={styles.login__container}>
                <input
                    type="text"
                    className={styles.login__textBox}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail Address"
                />
                <input
                    type="password"
                    className={styles.login__textBox}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button
                    className={styles.login__btn}
                    onClick={() => logInWithEmailAndPassword(email, password)}
                >
                    Login
                </button>
                <button
                    className={[styles.login__btn, styles.login__google].join(' ')}
                    onClick={signInWithGoogle}>
                    Login with Google
                </button>
                <div>
                    <Link to="/reset">Forgot Password</Link>
                </div>
                <div>
                    Don't have an account? <Link to="/register">Register</Link> now.
                </div>
            </div>
        </div>
    )
};

export default Login;