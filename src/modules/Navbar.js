import "./Navbar.css";
import 'boxicons';
import { useState } from "react";

const Navbar = ({ mode, onDark, ...props}) => {

    let navBarClass = `NavBarContainer ${mode && 'dark'}`

    let MoonIcon = () => <box-icon name='moon' {...(mode ? {type:"solid"}:{type:"outline"})} ></box-icon>

    // const darkModeHandler = () => {
    //     setDarkMode(prev=>!prev)

    //     props.onDark();
    // }

    return(
        <div className={navBarClass}>
            <h1 className="title">Where in the world</h1>
            <div className="mode" onClick={() =>onDark()}>
                <MoonIcon />
                <h2 className="modetext">Dark Mode</h2>
            </div>
        </div>
    )
}

export default Navbar;