import React from "react";
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
import SettingsPanel from "./SettingsPanel.jsx"

export default function MenuPanel() {

    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')
    const [settings, setSettings] = useState(false);

    const showSettings = (e) => {
        setSettings(e);
    }

    return(
        <div className="menu">
            Menu
            <hr></hr>
            <button className="button" style={{width: "80%"}} onClick={() => { { !settings ? showSettings(true) : showSettings(false) } }}>
                <div style={{marginLeft: "20%"}}>
                    <img src={Settings}></img>
                </div>
                Settings
            </button>
            { settings ?
            <div>
                { !token ? "Please log in to access the settings." : <SettingsPanel />}
            </div>
            :
            <div>
                
            </div>
            }
        </div>
    )
}