import React, { useContext, useState } from 'react'
import './Signup.css';
import { AuthContext } from '../../AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const { backendUrl, setIsLoggedIn } = useContext(AuthContext);

    const [state, setState] = useState("Sign up");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (e) => {
        try {
            e.preventDefault();
            axios.defaults.withCredentials = true;

            if (state === "Sign up") {
                const { data } = await axios.post(`${backendUrl}/register`, { name, email, password });
                if (data.success) {
                    setIsLoggedIn(true);
                    navigate('/');
                    toast.success("Sign up successful");
                } else {
                    toast.error(data.message);
                }
            } else {
                const { data } = await axios.post(`${backendUrl}/login`, { email, password });
                if (data.success) {
                    setIsLoggedIn(true);
                    navigate('/');
                    toast.success("Login successful");
                } else {
                    toast.error(data.message);
                }
            }
        } catch (error) { toast.error(error.message); }
    }
    return (
        <div className='container mb-5'>
            <h2 className='text-center mt-5'>{state == "Sign up" ? "Create Account" : "Login"}</h2>
            <p className='text-center mt-3'>{state == "Sign up" ? "Create your account" : "Login to your account"}</p>

            <form className='mt-5 p-5' onSubmit={onSubmitHandler}>
                {state === "Sign up" && (<div>
                    <label className=''>Full Name</label><br />
                    <input type="text" placeholder='Full Name' required
                        onChange={e => setName(e.target.value)} value={name} />
                </div>)}

                <div>
                    <label>Email</label><br />
                    <input type="email" placeholder='Email' required
                        onChange={e => setEmail(e.target.value)} value={email} />
                </div>

                <div>
                    <label>Password</label><br />
                    <input type="password" placeholder='Password' required
                        onChange={e => setPassword(e.target.value)} value={password} />
                </div>

                <div className='row text-center mt-3'>
                    <button className='p-2 btn btn-primary fs-5' >{state}</button>
                </div>

                {state === "Sign up" ? (<p className='text-muted mt-3'>
                    Already have an account ?
                    <a href="" onClick={(e) => {
                        e.preventDefault();
                        setState("Login");
                    }}
                        style={{ textDecoration: "none" }}><span>Login here</span></a>
                </p>)
                    : (<p className='text-muted mt-3'>
                        Don't have an account ?
                        <a href="" onClick={(e) => {
                            e.preventDefault();
                            setState("Sign up");
                        }}
                            style={{ textDecoration: "none" }}><span>Sign up</span></a>
                    </p>)}

            </form>
        </div>
    );
}

export default Signup;