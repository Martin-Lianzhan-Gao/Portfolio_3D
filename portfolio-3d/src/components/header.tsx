import React from "react";
const Header = () => {
    return (
        <div className="flex flex-row justify-center w-full backdrop-blur-sm">
            <ul className="flex flex-row justify-between px-4 py-4 w-full max-w-screen-xl min-w-screen-md">
                <li>HOME</li>
                <li>EXPERIENCE</li>
                <li>PROJECT</li>
                <li>SKILLS</li>
                <li>EDUCATION</li>
                <li>CONTACT</li>
            </ul>
        </div>
    );
};

export default Header;