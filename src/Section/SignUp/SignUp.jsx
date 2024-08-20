import React, { useState } from "react";
import "./SignUp.css";
import axios from "axios";
import { NavbarBrand } from "../../Compontent/index";
import { Link,  useNavigate } from "react-router-dom";
const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const [accept, setAccept] = useState(false);
    const [errorMessageEmail, setErrorMessageEmail] = useState('');
    const [errorMessageName, setErrorMessageName] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    async function submit(e) {
        let flag = true
        e.preventDefault();
        setAccept(true);
        setErrorMessageName('');
        setErrorMessageEmail('');
        setIsLoading(true);
        // التحقق من inputs 
        if (name === "" || password.length < 8 || rePassword !== password) {
            flag = false
        } else { flag = true };
        try {
            if (flag) {
                // send data
               const res = await axios.post('https://farm-build-your-portfolio-project-2.onrender.com/api/v1/customers/signup', {
                    name: name,
                    email: email,
                    password: password,
                    passwordConfirm: rePassword,
                });
                if(res.status === 201){
                    window.localStorage.setItem("email" , email);
                    navigate('/home');
                }
            }
        }
        catch (err) {
            // التحقق من وجود الايميل والاسم
            if (err.response && err.response.status === 500) {
                if (err.response.data && err.response.data.includes('duplicate key error')) {
                    if (err.response.data.includes('index: email_1')) {
                        setErrorMessageEmail('This email is already registered. Please use a different email.');
                    } else {
                        setErrorMessageEmail("");
                    }
                    if (err.response.data.includes('index: name_1')) {
                        setErrorMessageName('This name is already taken. Please choose a different name.');
                    } else {
                        setErrorMessageName("");
                    }
                }
            }
        } finally {
            setIsLoading(false);
        }
    }
    return (
        <>
            <div className="signUp w-full h-screen flex flex-col  items-center">
                <NavbarBrand />
                <div className="contaner flex flex-col">
                    <form className="flex flex-col justify-center w-3/4" onSubmit={submit} >
                        <div className="mb-6 flex flex-col w-full">
                            <label htmlFor="name" className="font-semibold">Full Name: </label>
                            <input className="border-2 rounded-md py-2 px-3" type='text' placeholder="Name..." id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            {name === "" && accept && <p style={{ color: "red" }} className="text-lg" >Username is required</p>}
                            {errorMessageName && <p style={{ color: "red" }} className="text-lg" >{errorMessageName}</p>}
                        </div>
                        <div className="mb-6 flex flex-col w-full">
                            <label htmlFor="email" className="font-semibold">Email: </label>
                            <input className="border-2 rounded-md py-2 px-3" type="email" placeholder="email..." id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                            {errorMessageEmail && <p style={{ color: "red" }} className="text-lg">{errorMessageEmail}</p>}
                        </div>
                        <div className="mb-6 flex flex-col w-full">
                            <label htmlFor="password" className="font-semibold">Password: </label>
                            <input className="border-2 rounded-md py-2 px-3" type="password" id="password" placeholder="Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
                            {password.length < 8 && accept && <p style={{ color: "red" }} className="text-lg">password must be more then 8 char</p>}
                        </div>
                        <div className="mb-6 flex flex-col w-full">
                            <label htmlFor="rePassword" className="font-semibold"> Repeat Password: </label>
                            <input className="border-2 rounded-md py-2 px-3" type="password" id="rePassword" placeholder="Repeat Password..." value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                            {rePassword !== password && accept && <p style={{ color: "red" }} className="text-lg">password dose not match</p>}
                        </div>
                        <div className="flex justify-center  w-full">
                            <button className="btn text-white w-full py-3 border-2 rounded-md" type="submit" disabled={isLoading}>
                                {isLoading ? 'Signing Up...' : 'Sign Up'}
                            </button>
                        </div>
                    </form>
                    <div className="flex flex-col justify-center items-center mt-2">
                        <p className="text-lg">Sign Up Already have an account ?</p>
                        <Link href="/" className="font-semibold text-xl text-black">Log in</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SignUp; 