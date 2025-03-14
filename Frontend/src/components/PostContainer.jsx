import React from "react";
import { useState, useEffect } from "react";
import Icon from "../assets/Icon.png"
import Search from "../assets/search.png"
import Hamburger from "../assets/hamburger.png"
import SearchBar from "./Search.jsx"
import Profile from "./Profile.jsx"
import Button from "./Button.jsx";
import Post from "./Post"


export default function PostContainer() {
    return(
        <div>
            <div className="post-container">
                <div className="posts">
                    <Post />
                </div>
                <div className="post-form">
                    <input className="post-input" placeholder="Type here to make a post...">

                    </input>
                    <div className="post-submit-button">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}