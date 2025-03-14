import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"

export default function Profile() {
    const token = sessionStorage.getItem('token') === null ? null : sessionStorage.getItem('token')
    
    
    return(
        <div>
            { token === null ? <div></div> : 
            ( 
            <div className="profile">
                <div className="circle">

                </div>
                <div>
                    <div className="username">
                        username
                    </div>
                    <div className="rolename">
                        role name
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}