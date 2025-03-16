import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import Login from "../assets/login.png"
import Logout from "../assets/logout.png"
import Posts from "../assets/posts.png"
import Register from "../assets/register.png"
import Send from "../assets/send.png"
import Settings from "../assets/settings.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";
import Update from "../assets/update.png"
import { URL } from "../constants/url.js";

export default function MenuPanel() {
    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const resetPassword = async() => {
        const response = await axios.post(`${URL}/auth/reset-password`, {email: email, oldPassword: oldPassword, newPassword: newPassword, token: token})
        .then((response) => {
            console.log(response)
        })
        .catch((err) => { console.warn(err) })
    }

    return(
        <div style={{marginTop: "1vh"}}>
            Reset Password:
            <form className="reg-form" onSubmit={resetPassword} style={{marginTop: "1vh"}}>
                <input className="reg-input" type="email" placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }}></input>
                <input className="reg-input" type="password" placeholder="old password" value={oldPassword} onChange={(e) => {setOldPassword(e.target.value)}} ></input>
                <input className="reg-input" type="password" placeholder="new password" value={newPassword} onChange={(e) => {setNewPassword(e.target.value)}}></input>
                
                <button className="button" style={{width: "100%", marginTop: "2vh"}}>
                    <div style={{marginLeft: "20%"}}>
                        <img src={Update} style={{height: "70%", width: "70%"}}></img>
                    </div>
                    Update
                </button>
                {/* <Button icon={Register} title="Register" href="/register" email={email} username={username} password={password} />
                <Button icon={Login} title="Login" href="/login" email={email} username={username} password={password} /> */}
            </form>
        </div>
    )
}