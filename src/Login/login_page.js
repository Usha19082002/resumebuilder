import React, { useRef } from "react";
import Home_page from "../Home/home_page";
import '../Styles/login_page.css'
// import './LoginWithLocalStorage.css';
export default function Login_page() {
    const name = useRef()
    const password = useRef()
    const getname = localStorage.getItem("nameData")
    const getPassword = localStorage.getItem("passwordData")
    const handleSubmit = () => {
        if (name.current.value == "usha" && password.current.value == "12345") {
            localStorage.setItem("nameData", "usha")
            localStorage.setItem("passwordData", "12345")
        }
        // window.location.href='../Home/home_page';

    }

    return (
        <div className="body">
            <div className="wrapper">
                {
                    getname && getPassword ?
                        <Home_page /> :
                        <form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <div className="input-box">

                                <input type="text" ref={name} placeholder="Username" required />
                                {/* <i class='bx bxs-user'></i> */}
                            </div>
                            <div className="input-box">

                                <input type="password" ref={password} placeholder="Password" required />
                                {/* <i class='bx bxs-lock-alt'></i> */}
                            </div>
                            <div className="remember">
                                <input type="checkbox" required />
                                <label>Remember me</label>
                            </div>
                            <button className="btn">Login</button>
                        </form>
                }
            </div>
        </div>
    );
}
