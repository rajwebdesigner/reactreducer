import React from "react";
import Navigation from "./Navigation";
import styles from "./MainHeader.module.css"

const MainHeader = props =>{
    return (<header className={styles['main-header']}>
        <h1>A Typical</h1>
            <Navigation isLoggedin={props.Authotication} isLogout={props.Logout} className="Navigation" />
        </header>)
}

export default MainHeader;