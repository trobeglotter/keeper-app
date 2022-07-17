import React from "react";

function Footer() {
    
    const currentDate = new Date().getFullYear();

    return (
        <footer> 
        <p className="footer">Copyright {currentDate} </p>
        </footer>
    );
};

export default Footer;