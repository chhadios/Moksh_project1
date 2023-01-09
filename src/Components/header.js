import React from "react";
import '../App.css'
import { useNavigate } from "react-router-dom";
const Header = () => {
    const Navigate = useNavigate()
    return (
        <>
            <div className="header">
                Product Analysis
                <div className="Navigation_container">
                    <div className="Navigation" onClick={()=>Navigate('/')} >
                        Page1
                    </div >
                    <div className="Navigation" onClick={()=>Navigate('/page2')} >
                        Page2
                    </div>
                    <div className="Navigation" onClick={()=>Navigate('/page3')} >
                        Page3
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;