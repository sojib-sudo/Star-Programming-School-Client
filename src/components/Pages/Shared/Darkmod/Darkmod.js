import React, { useContext } from 'react';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import './Darkmod.css';

const Darkmod = () => {
    const {darkMode, setDarkMode} = useContext(AuthContext);
    return (
        <div>
            <div className={darkMode ? "dark-mode" : "light-mode"}>
                <div className="container">
                    <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
                    <div className="switch-checkbox">
                    <label className="switch">
                        <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
                        <span className="slider round"> </span>
                    </label>
                    </div>
                    <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
                </div>
            </div>
        </div>
    );
};

export default Darkmod;